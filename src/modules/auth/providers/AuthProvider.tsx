"use client";

import React, { createContext, useContext, useReducer, useEffect, useCallback } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase/auth";
import { AuthState, AuthAction } from "../types";
import { mapFirebaseUserToAppUser, getRoleRedirect } from "../utils";
import { User } from "@/types";

const initialState: AuthState = {
  user: null,
  loading: true,
  error: null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload, loading: false, error: null };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SIGN_OUT":
      return { ...initialState, loading: false };
    default:
      return state;
  }
}

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string, phone?: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  setError: (error: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          if (userDoc.exists()) {
            dispatch({
              type: "SET_USER",
              payload: mapFirebaseUserToAppUser(
                firebaseUser,
                userDoc.data() as Partial<User>
              ),
            });
          } else {
            const newUser = mapFirebaseUserToAppUser(firebaseUser);
            await setDoc(doc(db, "users", firebaseUser.uid), {
              ...newUser,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            });
            dispatch({ type: "SET_USER", payload: newUser });
          }
        } catch {
          dispatch({
            type: "SET_USER",
            payload: mapFirebaseUserToAppUser(firebaseUser),
          });
        }
      } else {
        dispatch({ type: "SIGN_OUT" });
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Sign in failed";
      dispatch({ type: "SET_ERROR", payload: message });
      throw err;
    }
  }, []);

  const signUp = useCallback(
    async (email: string, password: string, name: string, phone?: string) => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name });

        const newUser: User = {
          uid: cred.user.uid,
          email,
          displayName: name,
          role: "teacher",
          phone: phone ?? "",
          plan: "free",
          isActive: true,
          preferences: {
            language: "en",
            biblicalIntegration: false,
            darkMode: false,
          },
        };

        await setDoc(doc(db, "users", cred.user.uid), {
          ...newUser,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        dispatch({ type: "SET_USER", payload: newUser });
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Sign up failed";
        dispatch({ type: "SET_ERROR", payload: message });
        throw err;
      }
    },
    []
  );

  const signInWithGoogle = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Google sign in failed";
      dispatch({ type: "SET_ERROR", payload: message });
      throw err;
    }
  }, []);

  const signOut = useCallback(async () => {
    await firebaseSignOut(auth);
    dispatch({ type: "SIGN_OUT" });
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  }, []);

  const setError = useCallback((error: string | null) => {
    dispatch({ type: "SET_ERROR", payload: error });
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...state, signIn, signUp, signInWithGoogle, signOut, resetPassword, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
