"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CurriculumSelector } from "@/modules/curriculum/components/CurriculumSelector";
import { useAIGenerate } from "../hooks/useAIGenerate";

interface RubricFormProps {
  onResult: (result: unknown) => void;
}

export function RubricForm({ onResult }: RubricFormProps) {
  const [grade, setGrade] = useState("");
  const [area, setArea] = useState("");
  const [strand, setStrand] = useState("");
  const [subStrand, setSubStrand] = useState("");
  const [criteriaCount, setCriteriaCount] = useState(4);

  const { generate, loading, error } = useAIGenerate("rubric");

  const handleGenerate = async () => {
    const result = await generate({ grade, learningArea: area, strand, subStrand, criteriaCount });
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
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label>Number of Criteria Levels</Label>
          <Input type="number" value={criteriaCount} onChange={(e) => setCriteriaCount(Number(e.target.value))} min={2} max={6} />
        </div>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button onClick={handleGenerate} disabled={loading || !grade || !area}>
        {loading ? "Generating..." : "Generate Rubric"}
      </Button>
    </div>
  );
}
