import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const generateSchemeOfWork = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Authentication required");

  const { grade, learningArea, term, year, weeks, strands, biblicalIntegration } = data;

  if (!grade || !learningArea || !term || !year) {
    throw new functions.https.HttpsError("invalid-argument", "Missing required fields: grade, learningArea, term, year");
  }

  const usageRef = admin.firestore().doc(`ai_usage/${context.auth.uid}/monthly/${getCurrentMonth()}`);
  const usageDoc = await usageRef.get();
  const usage = usageDoc.data() || { schemesOfWork: 0 };

  await usageRef.set({ schemesOfWork: (usage.schemesOfWork || 0) + 1 }, { merge: true });

  return { success: true, message: "Scheme of work generation initialized" };
});

function getCurrentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}
