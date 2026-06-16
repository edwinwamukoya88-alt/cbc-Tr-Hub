import { ForgotPasswordForm } from "@/modules/auth/components/ForgotPasswordForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your CBC Teachers Hub password",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
