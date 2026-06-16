"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CurriculumSelector } from "@/modules/curriculum/components/CurriculumSelector";
import { useAIGenerate } from "../hooks/useAIGenerate";

interface ExamFormProps {
  onResult: (result: unknown) => void;
}

export function ExamForm({ onResult }: ExamFormProps) {
  const [grade, setGrade] = useState("");
  const [area, setArea] = useState("");
  const [strand, setStrand] = useState("");
  const [subStrand, setSubStrand] = useState("");
  const [duration, setDuration] = useState(60);
  const [questionCount, setQuestionCount] = useState(20);

  const { generate, loading, error } = useAIGenerate("exam");

  const handleGenerate = async () => {
    const result = await generate({ grade, learningArea: area, strand, subStrand, duration, questionCount });
    onResult(result);
  };

  return (
    <div className="space-y-6">
      <CurriculumSelector
        grade={grade} learningArea={area} strand={strand} subStrand={subStrand}
        onGradeChange={setGrade}
        onLearningAreaChange={setArea}
        onStrandChange={setStrand}
        onSubStrandChange={setSubStrand}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Duration (minutes)</Label>
          <Input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} min={1} />
        </div>
        <div className="space-y-2">
          <Label>Number of Questions</Label>
          <Input type="number" value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))} min={1} />
        </div>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button onClick={handleGenerate} disabled={loading || !grade || !area}>
        {loading ? "Generating..." : "Generate Exam"}
      </Button>
    </div>
  );
}
