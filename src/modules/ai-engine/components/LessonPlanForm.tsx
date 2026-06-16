"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { CurriculumSelector } from "@/modules/curriculum/components/CurriculumSelector";
import { useAIGenerate } from "../hooks/useAIGenerate";

interface LessonPlanFormProps {
  onResult: (result: unknown) => void;
}

export function LessonPlanForm({ onResult }: LessonPlanFormProps) {
  const [grade, setGrade] = useState("");
  const [area, setArea] = useState("");
  const [strand, setStrand] = useState("");
  const [subStrand, setSubStrand] = useState("");
  const [duration, setDuration] = useState(40);
  const [language, setLanguage] = useState<"en" | "sw">("en");
  const [biblicalIntegration, setBiblicalIntegration] = useState(false);

  const { generate, loading, error } = useAIGenerate("lesson_plan");

  const handleGenerate = async () => {
    const result = await generate({ grade, learningArea: area, strand, subStrand, duration, language, biblicalIntegration });
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Duration (minutes)</Label>
          <Input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} min={1} />
        </div>
        <div className="space-y-2">
          <Label>Language</Label>
          <div className="flex gap-2">
            <Toggle pressed={language === "en"} onPressedChange={() => setLanguage("en")}>English</Toggle>
            <Toggle pressed={language === "sw"} onPressedChange={() => setLanguage("sw")}>Kiswahili</Toggle>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Biblical Integration</Label>
          <Toggle pressed={biblicalIntegration} onPressedChange={setBiblicalIntegration}>
            {biblicalIntegration ? "On" : "Off"}
          </Toggle>
        </div>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button onClick={handleGenerate} disabled={loading || !grade || !area}>
        {loading ? "Generating..." : "Generate Lesson Plan"}
      </Button>
    </div>
  );
}
