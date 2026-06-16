import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const generateExam = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Authentication required");

  const { grade, learningArea, strand, subStrand, questionTypes, bloomLevels, totalMarks, duration, includeMarkingScheme, language } = data;

  if (!grade || !learningArea || !strand) {
    throw new functions.https.HttpsError("invalid-argument", "Missing required fields: grade, learningArea, strand");
  }

  const usageRef = admin.firestore().doc(`ai_usage/${context.auth.uid}/monthly/${getCurrentMonth()}`);
  const usageDoc = await usageRef.get();
  const usage = usageDoc.data() || { exams: 0 };

  await usageRef.set({ exams: (usage.exams || 0) + 1 }, { merge: true });

  return { success: true, message: "Exam generation initialized" };
});

function getCurrentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}
