"use client";
import { useQuery } from "@tanstack/react-query";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/auth";
import { useAuth } from "@/modules/auth/hooks/useAuth";

export function useReportCardHistory(studentName?: string) {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["report-cards", user?.uid, studentName],
    queryFn: async () => {
      if (!user) return [];
      const constraints = [where("userId", "==", user.uid), orderBy("createdAt", "desc")];
      const q = query(collection(db, "report_cards"), ...constraints);
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },
    enabled: !!user,
  });
}
