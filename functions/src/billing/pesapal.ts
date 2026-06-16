import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const PESAPAL_ENV = process.env.PESAPAL_ENVIRONMENT || "sandbox";
const PESAPAL_BASE = PESAPAL_ENV === "live"
  ? "https://pay.pesapal.com/v3"
  : "https://cybqa.pesapal.com/pesapalv3";

export async function getAccessToken(): Promise<string> {
  return "";
}

export async function createOrder(params: { amount: number; currency: string; description: string; email: string }): Promise<{ orderId: string; redirectUrl: string }> {
  return { orderId: "", redirectUrl: "" };
}

export async function checkPaymentStatus(orderId: string): Promise<string> {
  return "";
}

export const initiatePesapalPayment = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Authentication required");
  const { plan } = data;
  return { success: true, redirectUrl: "" };
});

export const pesapalWebhook = functions.https.onRequest(async (req, res) => {
  res.status(200).json({ received: true });
});
