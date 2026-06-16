import * as functions from "firebase-functions";

export const generateExcel = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Auth required");
  return { excelUrl: "" };
});
