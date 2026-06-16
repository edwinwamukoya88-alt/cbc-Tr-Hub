"use client";
import { useState, useCallback } from "react";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase/auth";
import { AIGenerationType, AIGenerationInputs, AIGenerationResult } from "../types";

export function useAIGenerate(type: AIGenerationType) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AIGenerationResult | null>(null);

  const generate = useCallback(async (inputs: AIGenerationInputs) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      if (!app) throw new Error("Firebase is not configured");
      const auth = getAuth(app);
      const user = auth.currentUser;
      if (!user) throw new Error("Not authenticated");

      const token = await user.getIdToken();

      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ type, ...inputs }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Request failed with status ${res.status}`);
      }

      const data = (await res.json()) as AIGenerationResult;
      setResult(data);
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Generation failed";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [type]);

  return { generate, loading, error, result };
}
