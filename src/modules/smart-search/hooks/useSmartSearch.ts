"use client";
import { useState, useCallback } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "@/lib/firebase/auth";

export function useSmartSearch() {
  const [results, setResults] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [interpreting, setInterpreting] = useState(false);
  const [interpreted, setInterpreted] = useState<any>(null);

  const search = useCallback(async (query: string) => {
    setLoading(true);
    setInterpreting(true);
    try {
      if (app) {
        const functions = getFunctions(app);
        const fn = httpsCallable(functions, "smartSearch");
        const response = await fn({ query });
        const data = response.data as any;
        setResults(data.results || []);
        setRecommendations(data.recommendations || []);
        setInterpreted(data.interpreted);
        return data;
      }
      return null;
    } finally {
      setLoading(false);
      setInterpreting(false);
    }
  }, []);

  return { results, recommendations, loading, interpreting, interpreted, search };
}
