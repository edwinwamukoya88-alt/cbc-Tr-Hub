import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const generateReportComments = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Authentication required");

  const { grade, learningArea, studentName, performanceLevel, strengths, areasForImprovement, language } = data;

  if (!grade || !learningArea || !studentName || !performanceLevel) {
    throw new functions.https.HttpsError("invalid-argument", "Missing required fields: grade, learningArea, studentName, performanceLevel");
  }

  const usageRef = admin.firestore().doc(`ai_usage/${context.auth.uid}/monthly/${getCurrentMonth()}`);
  const usageDoc = await usageRef.get();
  const usage = usageDoc.data() || { reportComments: 0 };

  await usageRef.set({ reportComments: (usage.reportComments || 0) + 1 }, { merge: true });

  return { success: true, message: "Report comment generation initialized" };
});

function getCurrentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}
