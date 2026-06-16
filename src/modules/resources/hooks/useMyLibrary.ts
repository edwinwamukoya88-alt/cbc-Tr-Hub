"use client";
import { useQuery } from "@tanstack/react-query";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/auth";
import { useAuth } from "@/modules/auth/hooks/useAuth";

export function useMyLibrary() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["my-library", user?.uid],
    queryFn: async () => {
      if (!user || !db) return [];
      const q = query(collection(db, "resources"), where("authorId", "==", user.uid), where("status", "==", "published"));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },
    enabled: !!user,
  });
}
