"use client";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { PLANS } from "@/lib/constants";

export function usePlanLimits() {
  const { user } = useAuth();
  const plan = user?.plan ?? "free";
  return { plan, limits: PLANS[plan]?.limits ?? PLANS.free.limits };
}
