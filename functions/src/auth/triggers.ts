import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const onUserCreate = functions.auth.user().onCreate(async (user) => {
  await admin.firestore().doc(`users/${user.uid}`).set({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || "",
    role: "teacher",
    plan: "free",
    isActive: true,
    preferences: { language: "en", biblicalIntegration: false, darkMode: false },
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });
});

export const onUserDelete = functions.auth.user().onDelete(async (user) => {
  await admin.firestore().doc(`users/${user.uid}`).delete();
});
