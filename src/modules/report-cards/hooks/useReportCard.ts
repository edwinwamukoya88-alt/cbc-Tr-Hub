"use client";
import { useState, useCallback } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "@/lib/firebase/auth";

export function useReportCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async (data: any) => {
    if (!app) {
      setError("Firebase is not configured");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const functions = getFunctions(app);
      const fn = httpsCallable(functions, "generateReportCard");
      const result = await fn(data);
      return result.data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Generation failed";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { generate, loading, error };
}
