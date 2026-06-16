import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "./auth";

export { ref, uploadBytes, getDownloadURL, deleteObject };

export function getStorageRef(path: string) {
  if (!storage) throw new Error("Storage is not initialized");
  return ref(storage, path);
}

export async function uploadFile(path: string, file: File | Blob) {
  if (!storage) throw new Error("Storage is not initialized");
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  return getDownloadURL(snapshot.ref);
}

export async function deleteFile(path: string) {
  if (!storage) throw new Error("Storage is not initialized");
  const storageRef = ref(storage, path);
  return deleteObject(storageRef);
}
