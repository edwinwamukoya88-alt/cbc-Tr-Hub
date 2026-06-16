"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { CurriculumSelector } from "@/modules/curriculum/components/CurriculumSelector";
import { useAIGenerate } from "../hooks/useAIGenerate";

interface ReportCommentFormProps {
  onResult: (result: unknown) => void;
}

export function ReportCommentForm({ onResult }: ReportCommentFormProps) {
  const [grade, setGrade] = useState("");
  const [area, setArea] = useState("");
  const [studentName, setStudentName] = useState("");
  const [performance, setPerformance] = useState("good");
  const [language, setLanguage] = useState<"en" | "sw">("en");

  const { generate, loading, error } = useAIGenerate("report_comment");

  const handleGenerate = async () => {
    const result = await generate({ grade, learningArea: area, studentName, performance, language });
    onResult(result);
  };

  return (
    <div className="space-y-6">
      <CurriculumSelector
        grade={grade} learningArea={area}
        onGradeChange={setGrade}
        onLearningAreaChange={setArea}
        onStrandChange={() => {}}
        onSubStrandChange={() => {}}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Student Name</Label>
          <Input value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="e.g. John Kamau" />
        </div>
        <div className="space-y-2">
          <Label>Performance Level</Label>
          <div className="flex gap-2">
            <Toggle pressed={performance === "excellent"} onPressedChange={() => setPerformance("excellent")}>Excellent</Toggle>
            <Toggle pressed={performance === "good"} onPressedChange={() => setPerformance("good")}>Good</Toggle>
            <Toggle pressed={performance === "needs_improvement"} onPressedChange={() => setPerformance("needs_improvement")}>Needs Improvement</Toggle>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Language</Label>
          <div className="flex gap-2">
            <Toggle pressed={language === "en"} onPressedChange={() => setLanguage("en")}>English</Toggle>
            <Toggle pressed={language === "sw"} onPressedChange={() => setLanguage("sw")}>Kiswahili</Toggle>
          </div>
        </div>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button onClick={handleGenerate} disabled={loading || !grade || !area || !studentName}>
        {loading ? "Generating..." : "Generate Comment"}
      </Button>
    </div>
  );
}
