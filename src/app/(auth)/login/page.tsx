import { LoginForm } from "@/modules/auth/components/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your CBC Teachers Hub account",
};

export default function LoginPage() {
  return <LoginForm />;
}
