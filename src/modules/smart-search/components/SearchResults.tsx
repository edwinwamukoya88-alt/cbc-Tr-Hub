"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Eye } from "lucide-react";
import type { SearchResult } from "../types";

interface SearchResultsProps {
  results: SearchResult[];
  recommendations: any[];
  summary?: string;
}

export function SearchResults({ results, recommendations, summary }: SearchResultsProps) {
  if (!results.length) return null;

  return (
    <div className="space-y-6">
      {summary && <p className="text-sm text-muted-foreground">{summary}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((r) => (
          <Card key={r.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-base">{r.title}</CardTitle>
                <Badge variant="outline" className="text-xs">{r.type.replace(/_/g, " ")}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{r.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Download className="h-3 w-3" />{r.downloads}</span>
                <span className="flex items-center gap-1"><Star className="h-3 w-3" />{r.rating?.toFixed(1)}</span>
                <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{r.views}</span>
                {r.qualityScore && <Badge variant={r.qualityScore >= 75 ? "success" : "warning"}>Q: {r.qualityScore}</Badge>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {recommendations?.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3">AI Recommended</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {recommendations.map((r: any, i: number) => (
              <Card key={i} className="min-w-[200px] flex-shrink-0">
                <CardContent className="p-4">
                  <p className="text-sm font-medium">{r.title}</p>
                  <p className="text-xs text-muted-foreground">{r.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
