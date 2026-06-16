import * as functions from "firebase-functions";

export const generatePDF = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Auth required");
  const { type, content } = data;
  return { pdfUrl: "" };
});

export const generateReportCardPDF = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Auth required");
  const { reportCardId } = data;
  return { pdfUrl: "" };
});
