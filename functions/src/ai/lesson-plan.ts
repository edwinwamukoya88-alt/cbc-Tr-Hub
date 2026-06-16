import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

export const generateLessonPlan = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Authentication required");

  const { grade, learningArea, strand, subStrand, duration, biblicalIntegration, language } = data;

  if (!grade || !learningArea || !strand) {
    throw new functions.https.HttpsError("invalid-argument", "Missing required fields: grade, learningArea, strand");
  }

  const usageRef = admin.firestore().doc(`ai_usage/${context.auth.uid}/monthly/${getCurrentMonth()}`);
  const usageDoc = await usageRef.get();
  const usage = usageDoc.data() || { lessonPlans: 0 };

  await usageRef.set({ lessonPlans: (usage.lessonPlans || 0) + 1 }, { merge: true });

  return { success: true, message: "Lesson plan generation initialized" };
});

function getCurrentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}
