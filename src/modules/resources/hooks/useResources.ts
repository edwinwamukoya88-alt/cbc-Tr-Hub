"use client";
import { useQuery } from "@tanstack/react-query";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/auth";

export function useResources(filters?: Record<string, string>) {
  return useQuery({
    queryKey: ["resources", filters],
    queryFn: async () => {
      const constraints: any[] = [where("status", "==", "published"), orderBy("createdAt", "desc"), limit(20)];
      const q = query(collection(db, "resources"), ...constraints);
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },
  });
}
