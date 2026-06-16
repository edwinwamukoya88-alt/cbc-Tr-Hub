"use client";
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/auth";

export function useQualityReview(resourceId: string) {
  return useQuery({
    queryKey: ["quality-review", resourceId],
    queryFn: async () => {
      if (!resourceId) return null;
      const snap = await getDoc(doc(db, "quality_reviews", resourceId));
      return snap.exists() ? { id: snap.id, ...snap.data() } : null;
    },
    enabled: !!resourceId,
  });
}
