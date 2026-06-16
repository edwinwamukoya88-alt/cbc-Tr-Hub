"use client";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Loader2, X } from "lucide-react";
import { useSmartSearch } from "../hooks/useSmartSearch";

interface SmartSearchBarProps {
  onResults: (results: any[], recommendations: any[], interpreted: any) => void;
}

export function SmartSearchBar({ onResults }: SmartSearchBarProps) {
  const [query, setQuery] = useState("");
  const { search, results, recommendations, loading, interpreting, interpreted } = useSmartSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    const data = await search(query.trim());
    onResults(data?.results || [], data?.recommendations || [], data?.interpreted);
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search resources... Try: 'Grade 5 Maths Fractions lesson plan' or 'Teach me division'"
          className="pl-10 pr-10 h-12 text-base"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        {interpreting && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-xs text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> AI interpreting...
          </div>
        )}
        {query && !interpreting && (
          <button onClick={() => { setQuery(""); }} className="absolute right-3 top-1/2 -translate-y-1/2">
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {interpreted && (
        <div className="flex flex-wrap gap-2">
          {interpreted.grade && <Badge variant="secondary">{interpreted.grade}</Badge>}
          {interpreted.learningArea && <Badge variant="secondary">{interpreted.learningArea}</Badge>}
          {interpreted.resourceType && <Badge variant="secondary">{interpreted.resourceType.replace(/_/g, " ")}</Badge>}
        </div>
      )}
    </div>
  );
}
