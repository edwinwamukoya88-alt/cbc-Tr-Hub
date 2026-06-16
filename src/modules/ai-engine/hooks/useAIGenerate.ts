"use client";
import { useState, useCallback } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "@/lib/firebase/auth";
import { AIGenerationType, AIGenerationInputs, AIGenerationResult } from "../types";

const functions = getFunctions(app);

export function useAIGenerate(type: AIGenerationType) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AIGenerationResult | null>(null);

  const generate = useCallback(async (inputs: AIGenerationInputs) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const fn = httpsCallable(functions, `generate${type.replace(/_/g, "").replace(/^\w/, c => c.toUpperCase())}`);
      const response = await fn({ type, ...inputs });
      setResult(response.data as AIGenerationResult);
      return response.data as AIGenerationResult;
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
