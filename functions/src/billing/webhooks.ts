import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const handlePesapalIPN = functions.https.onRequest(async (req, res) => {
  const { pesapal_notification_type, pesapal_transaction_tracking_id } = req.body;
  res.status(200).json({ status: "processed" });
});
