import { UserRole, Plan, Language } from "@/types";

export interface AuthState {
  user: {
    uid: string;
    email: string;
    displayName: string;
    role: UserRole;
    avatarUrl?: string;
    phone?: string;
    schoolId?: string;
    plan: Plan;
    isActive: boolean;
    preferences: {
      language: Language;
      biblicalIntegration: boolean;
      darkMode: boolean;
    };
  } | null;
  loading: boolean;
  error: string | null;
}

export type AuthAction =
  | { type: "SET_USER"; payload: AuthState["user"] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SIGN_OUT" };
