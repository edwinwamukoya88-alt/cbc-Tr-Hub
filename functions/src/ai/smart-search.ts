import * as functions from "firebase-functions";

export const smartSearch = functions.region("africa-south1").https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Authentication required");

  const { query, filters } = data;
  if (!query) throw new functions.https.HttpsError("invalid-argument", "Query is required");

  return {
    success: true,
    query,
    interpretation: {},
    results: [],
    message: "Smart search initialized",
  };
});
