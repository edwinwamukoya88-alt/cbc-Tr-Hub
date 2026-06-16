"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CurriculumSelector } from "@/modules/curriculum/components/CurriculumSelector";
import { useAIGenerate } from "../hooks/useAIGenerate";

interface SchemeFormProps {
  onResult: (result: unknown) => void;
}

export function SchemeForm({ onResult }: SchemeFormProps) {
  const [grade, setGrade] = useState("");
  const [area, setArea] = useState("");
  const [term, setTerm] = useState(1);
  const [weeks, setWeeks] = useState(13);

  const { generate, loading, error } = useAIGenerate("scheme_of_work");

  const handleGenerate = async () => {
    const result = await generate({ grade, learningArea: area, term, weeks });
    onResult(result);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Grade</Label>
          <CurriculumSelector
            grade={grade}
            onGradeChange={setGrade}
            onLearningAreaChange={setArea}
            onStrandChange={() => {}}
            onSubStrandChange={() => {}}
          />
        </div>
        <div className="space-y-2">
          <Label>Learning Area</Label>
          <CurriculumSelector
            grade={grade} learningArea={area}
            onGradeChange={setGrade}
            onLearningAreaChange={setArea}
            onStrandChange={() => {}}
            onSubStrandChange={() => {}}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Term</Label>
          <Input type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} min={1} max={3} />
        </div>
        <div className="space-y-2">
          <Label>Number of Weeks</Label>
          <Input type="number" value={weeks} onChange={(e) => setWeeks(Number(e.target.value))} min={1} max={14} />
        </div>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button onClick={handleGenerate} disabled={loading || !grade || !area}>
        {loading ? "Generating..." : "Generate Scheme of Work"}
      </Button>
    </div>
  );
}
