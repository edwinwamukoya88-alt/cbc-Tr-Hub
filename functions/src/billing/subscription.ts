import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const createSubscription = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Auth required");
  return { success: true };
});

export const cancelSubscription = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Auth required");
  return { success: true };
});

export const checkExpiredGracePeriods = functions.pubsub.schedule("every 24 hours").onRun(async (context) => {
  console.log("Checking expired grace periods...");
});
