import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";
import firebaseConfig from "./config";

function hasFirebaseConfig(): boolean {
  return !!(firebaseConfig.apiKey && firebaseConfig.projectId);
}

const app: FirebaseApp = hasFirebaseConfig()
  ? !getApps().length
    ? initializeApp(firebaseConfig)
    : getApps()[0]
  : (null as unknown as FirebaseApp);

const auth: Auth = app ? getAuth(app) : (null as unknown as Auth);
const db: Firestore = app ? getFirestore(app) : (null as unknown as Firestore);
const storage: FirebaseStorage = app ? getStorage(app) : (null as unknown as FirebaseStorage);

export { app, auth, db, storage };
