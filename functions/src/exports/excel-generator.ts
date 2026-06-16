import * as functions from "firebase-functions";

export const generateExcel = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Auth required");
  return { excelUrl: "" };
});
