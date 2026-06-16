import { initializeApp, getApps, cert } from "firebase-admin/app";

const serviceAccount = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "cbc-teachers-hub-app";

export function getAdminApp() {
  if (getApps().length > 0) return getApps()[0];

  if (serviceAccount) {
    try {
      const sa = JSON.parse(serviceAccount);
      return initializeApp({ credential: cert(sa), projectId });
    } catch {
      // fall through to default
    }
  }

  return initializeApp({ projectId });
}
