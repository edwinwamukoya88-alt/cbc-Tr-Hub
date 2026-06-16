"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

export function SaveToLibrary({ saved = false, onToggle }: { saved?: boolean; onToggle?: () => void }) {
  return (
    <Button variant="ghost" size="sm" onClick={onToggle}>
      <Bookmark className={`h-4 w-4 mr-1 ${saved ? "fill-primary-500 text-primary-500" : ""}`} />
      {saved ? "Saved" : "Save"}
    </Button>
  );
}
