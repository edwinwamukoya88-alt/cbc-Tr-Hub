"use client";
import React, { useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useCurriculumSelector } from "../hooks/useCurriculumSelector";

interface CurriculumSelectorProps {
  grade?: string; learningArea?: string; strand?: string; subStrand?: string;
  onGradeChange: (id: string) => void;
  onLearningAreaChange: (id: string) => void;
  onStrandChange: (id: string) => void;
  onSubStrandChange: (id: string) => void;
}

export function CurriculumSelector({
  grade, learningArea, strand, subStrand,
  onGradeChange, onLearningAreaChange, onStrandChange, onSubStrandChange,
}: CurriculumSelectorProps) {
  const { grades, learningAreas, strands, subStrands, loading, fetchGrades, fetchLearningAreas, fetchStrands, fetchSubStrands } = useCurriculumSelector();

  useEffect(() => { fetchGrades(); }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Grade</Label>
        <Select value={grade || ""} onValueChange={(v) => { onGradeChange(v); fetchLearningAreas(v); }}>
          <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
          <SelectContent>
            {grades.map((g) => (<SelectItem key={g.id} value={g.id}>{g.name}</SelectItem>))}
          </SelectContent>
        </Select>
      </div>
      {grade && (
        <div className="space-y-2">
          <Label>Learning Area</Label>
          <Select value={learningArea || ""} onValueChange={(v) => { onLearningAreaChange(v); fetchStrands(grade!, v); }}>
            <SelectTrigger><SelectValue placeholder="Select subject" /></SelectTrigger>
            <SelectContent>
              {learningAreas.map((a) => (<SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>))}
            </SelectContent>
          </Select>
        </div>
      )}
      {learningArea && (
        <div className="space-y-2">
          <Label>Strand</Label>
          <Select value={strand || ""} onValueChange={(v) => { onStrandChange(v); fetchSubStrands(grade!, learningArea!, v); }}>
            <SelectTrigger><SelectValue placeholder="Select strand" /></SelectTrigger>
            <SelectContent>
              {strands.map((s) => (<SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>))}
            </SelectContent>
          </Select>
        </div>
      )}
      {strand && (
        <div className="space-y-2">
          <Label>Sub-Strand</Label>
          <Select value={subStrand || ""} onValueChange={onSubStrandChange}>
            <SelectTrigger><SelectValue placeholder="Select sub-strand" /></SelectTrigger>
            <SelectContent>
              {subStrands.map((s) => (<SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>))}
            </SelectContent>
          </Select>
        </div>
      )}
      {loading && <p className="text-sm text-muted-foreground">Loading curriculum data...</p>}
    </div>
  );
}
