"use client";
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/auth";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { PLANS } from "@/lib/constants";

export function useAIUsage() {
  const { user } = useAuth();
  const month = new Date().toISOString().slice(0, 7);

  return useQuery({
    queryKey: ["ai-usage", user?.uid, month],
    queryFn: async () => {
      if (!user || !db) return null;
      const docRef = doc(db, "ai_usage", user.uid, "monthly", month);
      const snap = await getDoc(docRef);
      return snap.data() || {};
    },
    enabled: !!user,
  });
}

export function usePlanLimits() {
  const { user } = useAuth();
  if (!user) return { limits: PLANS.free.limits, plan: "free" as const };
  return { limits: PLANS[user.plan]?.limits ?? PLANS.free.limits, plan: user.plan };
}
