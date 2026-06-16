"use client";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GRADE_LEVELS, RESOURCE_TYPES } from "@/lib/constants";

interface ResourceFiltersProps {
  grade: string; setGrade: (v: string) => void;
  type: string; setType: (v: string) => void;
}

export function ResourceFilters({ grade, setGrade, type, setType }: ResourceFiltersProps) {
  return (
    <div className="flex gap-4">
      <Select value={grade} onValueChange={setGrade}>
        <SelectTrigger className="w-40"><SelectValue placeholder="Grade" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Grades</SelectItem>
          {GRADE_LEVELS.map(g => <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className="w-40"><SelectValue placeholder="Type" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          {RESOURCE_TYPES.map(t => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}
