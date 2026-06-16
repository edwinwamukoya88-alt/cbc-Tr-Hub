"use client";
import { useState, useCallback } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "@/lib/firebase/auth";

const functions = getFunctions(app);

export function useExport() {
  const [loading, setLoading] = useState(false);

  const exportPDF = useCallback(async (type: string, content: any) => {
    setLoading(true);
    try {
      const fn = httpsCallable(functions, "generatePDF");
      const result = await fn({ type, content });
      return result.data as { pdfUrl: string };
    } finally {
      setLoading(false);
    }
  }, []);

  const exportExcel = useCallback(async (type: string, data: any) => {
    setLoading(true);
    try {
      const fn = httpsCallable(functions, "generateExcel");
      const result = await fn({ type, data });
      return result.data as { excelUrl: string };
    } finally {
      setLoading(false);
    }
  }, []);

  return { exportPDF, exportExcel, loading };
}
