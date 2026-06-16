"use client";
import React from "react";
import { Loader2 } from "lucide-react";

export function AIGenerationProgress({ status = "Generating" }: { status?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
      <p className="text-sm text-muted-foreground">{status}...</p>
      <p className="text-xs text-muted-foreground">This may take a moment</p>
    </div>
  );
}
