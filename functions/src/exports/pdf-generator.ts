import * as functions from "firebase-functions";

export const generatePDF = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Auth required");
  const { type, content } = data;
  return { pdfUrl: "" };
});

export const generateReportCardPDF = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Auth required");
  const { reportCardId } = data;
  return { pdfUrl: "" };
});
