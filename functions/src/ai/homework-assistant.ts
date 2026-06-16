import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const homeworkHelp = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Authentication required");

  const { question, grade, learningArea, subject } = data;
  if (!question) {
    throw new functions.https.HttpsError("invalid-argument", "Question is required");
  }

  const usageRef = admin.firestore().doc(`ai_usage/${context.auth.uid}/monthly/${getCurrentMonth()}`);
  const usageDoc = await usageRef.get();
  const usage = usageDoc.data() || { homeworkHelp: 0 };

  await usageRef.set({ homeworkHelp: (usage.homeworkHelp || 0) + 1 }, { merge: true });

  return {
    success: true,
    message: "Homework help request received",
  };
});

function getCurrentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}
