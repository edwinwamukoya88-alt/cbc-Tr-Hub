import { SignupForm } from "@/modules/auth/components/SignupForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your CBC Teachers Hub account and start generating AI-powered teaching materials",
};

export default function SignupPage() {
  return <SignupForm />;
}
