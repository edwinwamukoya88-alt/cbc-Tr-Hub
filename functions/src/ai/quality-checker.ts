import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const checkQuality = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Authentication required");

  const { content, contentType, grade, learningArea } = data;
  if (!content || !contentType) {
    throw new functions.https.HttpsError("invalid-argument", "content and contentType are required");
  }

  const reviewRef = await admin.firestore().collection("quality_reviews").add({
    userId: context.auth.uid,
    content,
    contentType,
    grade,
    learningArea,
    status: "pending",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return {
    success: true,
    reviewId: reviewRef.id,
    message: "Quality check initialized",
  };
});
