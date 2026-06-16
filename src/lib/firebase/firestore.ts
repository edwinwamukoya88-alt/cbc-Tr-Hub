import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  Timestamp,
  serverTimestamp,
  DocumentData,
  addDoc,
} from "firebase/firestore";
import { db } from "./auth";

export {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  Timestamp,
  serverTimestamp,
  addDoc,
};

export function getCollection(path: string) {
  return collection(db, path);
}

export function getDocument(path: string, ...segments: string[]) {
  return doc(db, path, ...segments);
}

export async function getDocumentData<T>(path: string, ...segments: string[]) {
  const docRef = doc(db, path, ...segments);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() } as T & { id: string };
}
