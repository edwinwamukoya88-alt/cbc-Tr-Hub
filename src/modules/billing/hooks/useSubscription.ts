"use client";
import { useQuery, useMutation } from "@tanstack/react-query";
import { doc, getDoc, DocumentData } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { db, app } from "@/lib/firebase/auth";
import { useAuth } from "@/modules/auth/hooks/useAuth";

interface SubscriptionData extends DocumentData {
  plan: string;
  status: string;
  amount: number;
  currentPeriodEnd?: { seconds: number };
  [key: string]: unknown;
}

export function useSubscription() {
  const { user } = useAuth();

  const { data: subscription, isLoading } = useQuery<SubscriptionData | null>({
    queryKey: ["subscription", user?.uid],
    queryFn: async () => {
      if (!user || !db) return null;
      const snap = await getDoc(doc(db, "subscriptions", user.uid));
      return snap.exists() ? ({ id: snap.id, ...snap.data()! } as unknown as SubscriptionData) : null;
    },
    enabled: !!user,
  });

  const createCheckout = useMutation({
    mutationFn: async (plan: string) => {
      if (!app) throw new Error("Firebase is not configured");
      const functions = getFunctions(app);
      const fn = httpsCallable(functions, "initiatePesapalPayment");
      const result = await fn({ plan });
      return result.data as { redirectUrl: string };
    },
  });

  const cancelSub = useMutation({
    mutationFn: async () => {
      if (!app) throw new Error("Firebase is not configured");
      const functions = getFunctions(app);
      const fn = httpsCallable(functions, "cancelSubscription");
      await fn();
    },
  });

  return { subscription, isLoading, createCheckout, cancelSub };
}
