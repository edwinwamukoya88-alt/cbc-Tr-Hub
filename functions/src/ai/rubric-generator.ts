import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const generateRubric = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Authentication required");

  const { grade, learningArea, taskDescription, criteria, performanceLevels, language } = data;

  if (!grade || !learningArea || !taskDescription || !criteria) {
    throw new functions.https.HttpsError("invalid-argument", "Missing required fields: grade, learningArea, taskDescription, criteria");
  }

  const usageRef = admin.firestore().doc(`ai_usage/${context.auth.uid}/monthly/${getCurrentMonth()}`);
  const usageDoc = await usageRef.get();
  const usage = usageDoc.data() || { rubrics: 0 };

  await usageRef.set({ rubrics: (usage.rubrics || 0) + 1 }, { merge: true });

  return { success: true, message: "Rubric generation initialized" };
});

function getCurrentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}
