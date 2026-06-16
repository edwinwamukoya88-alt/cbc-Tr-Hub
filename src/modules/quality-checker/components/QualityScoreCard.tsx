"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { QualityScores } from "../types";

interface QualityScoreCardProps {
  scores: QualityScores;
  compact?: boolean;
}

function ScoreRing({ label, score, size = "sm" }: { label: string; score: number; size?: "sm" | "lg" }) {
  const color = score >= 75 ? "bg-green-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className="text-center">
      <div className={cn("relative inline-flex items-center justify-center", size === "lg" ? "h-24 w-24" : "h-16 w-16")}>
        <Progress value={score} className={cn("absolute inset-0", size === "lg" ? "h-24 w-24" : "h-16 w-16")} />
        <span className={cn("font-bold", size === "lg" ? "text-lg" : "text-sm")}>{score}</span>
      </div>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export function QualityScoreCard({ scores, compact }: QualityScoreCardProps) {
  return (
    <Card>
      <CardHeader><CardTitle className="text-lg">Quality Scores</CardTitle></CardHeader>
      <CardContent>
        <div className={cn("grid gap-4", compact ? "grid-cols-2" : "grid-cols-2 md:grid-cols-5")}>
          <ScoreRing label="Overall" score={scores.overallScore} size={compact ? "sm" : "lg"} />
          <ScoreRing label="Originality" score={scores.originalityScore} />
          <ScoreRing label="Curriculum" score={scores.curriculumAlignmentScore} />
          <ScoreRing label="Readiness" score={scores.classroomReadinessScore} />
          <ScoreRing label="Quality" score={scores.educationalQualityScore} />
        </div>
      </CardContent>
    </Card>
  );
}
