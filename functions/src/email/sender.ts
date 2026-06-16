import * as functions from "firebase-functions";

export async function sendEmail(to: string, subject: string, body: string) {
  console.log(`Email would be sent to ${to}: ${subject}`);
}

export const sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {
  console.log(`Welcome email for ${user.email}`);
});
