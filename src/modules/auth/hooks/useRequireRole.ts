"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./useAuth";
import { UserRole } from "@/types";

export function useRequireRole(requiredRole: UserRole | UserRole[]) {
  const { user, loading } = useAuth();
  const router = useRouter();

  const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];

  useEffect(() => {
    if (!loading && user && !roles.includes(user.role)) {
      router.push("/dashboard");
    }
  }, [user, loading, router, roles]);

  return { user, loading, authorized: user ? roles.includes(user.role) : false };
}
