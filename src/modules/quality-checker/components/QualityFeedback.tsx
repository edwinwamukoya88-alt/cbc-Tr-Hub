"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

interface QualityFeedbackProps {
  suggestions: string[];
  observations: string;
  recommendation: string;
}

export function QualityFeedback({ suggestions, observations, recommendation }: QualityFeedbackProps) {
  return (
    <Card>
      <CardHeader><CardTitle className="text-lg">AI Feedback</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-accent-500 mt-0.5" />
          <div>
            <p className="font-medium mb-1">Quality Observations</p>
            <p className="text-sm text-muted-foreground">{observations}</p>
          </div>
        </div>
        {suggestions?.length > 0 && (
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-medium mb-1">Improvement Suggestions</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {suggestions.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>
        )}
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
          <div>
            <p className="font-medium mb-1">Recommendation</p>
            <p className="text-sm text-muted-foreground capitalize">{recommendation?.replace(/_/g, " ")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
