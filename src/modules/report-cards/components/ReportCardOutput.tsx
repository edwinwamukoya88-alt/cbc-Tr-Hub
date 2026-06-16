"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";

interface ReportCardOutputProps {
  data: any;
}

export function ReportCardOutput({ data }: ReportCardOutputProps) {
  if (!data) return null;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Report Card: {data.studentName}</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Printer className="h-4 w-4 mr-2" /> Print</Button>
          <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" /> PDF</Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-sm text-muted-foreground">Grade</p><p className="font-medium">{data.grade}</p></div>
          <div><p className="text-sm text-muted-foreground">Term</p><p className="font-medium">Term {data.term}</p></div>
          <div><p className="text-sm text-muted-foreground">Year</p><p className="font-medium">{data.year}</p></div>
          <div><p className="text-sm text-muted-foreground">Performance</p><Badge>{data.overallPerformanceRating}</Badge></div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Subject Performance</h3>
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-2">Subject</th><th className="text-right py-2">Avg Score</th><th className="text-right py-2">Grade</th><th className="text-right py-2">Level</th></tr></thead>
            <tbody>
              {data.subjects?.map((s: any, i: number) => (
                <tr key={i} className="border-b"><td className="py-2">{s.learningArea}</td><td className="text-right py-2">{s.averageScore}%</td><td className="text-right py-2">{s.grade}</td><td className="text-right py-2"><Badge variant="outline">{s.performanceLevel}</Badge></td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {data.strengthsAnalysis && (
          <div><h3 className="font-semibold mb-1">Strengths</h3><p className="text-sm text-muted-foreground">{data.strengthsAnalysis}</p></div>
        )}
        {data.areasForImprovement && (
          <div><h3 className="font-semibold mb-1">Areas for Improvement</h3><p className="text-sm text-muted-foreground">{data.areasForImprovement}</p></div>
        )}
        {data.teacherComment && (
          <div><h3 className="font-semibold mb-1">Teacher's Comment</h3><p className="text-sm italic">{data.teacherComment}</p></div>
        )}
        {data.motivationMessage && (
          <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg"><p className="text-sm font-medium text-primary-700">{data.motivationMessage}</p></div>
        )}
      </CardContent>
    </Card>
  );
}
