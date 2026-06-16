"use client";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { GRADE_LEVELS, RESOURCE_TYPES } from "@/lib/constants";

interface SearchFiltersProps {
  grade: string; setGrade: (v: string) => void;
  subject: string; setSubject: (v: string) => void;
  type: string; setType: (v: string) => void;
}

export function SearchFilters({ grade, setGrade, subject, setSubject, type, setType }: SearchFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="space-y-1">
        <Label className="text-xs">Grade</Label>
        <Select value={grade} onValueChange={setGrade}>
          <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="All" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {GRADE_LEVELS.map(g => <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1">
        <Label className="text-xs">Subject</Label>
        <Select value={subject} onValueChange={setSubject}>
          <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="All" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="mathematics">Mathematics</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="science">Science & Technology</SelectItem>
            <SelectItem value="kiswahili">Kiswahili</SelectItem>
            <SelectItem value="social_studies">Social Studies</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1">
        <Label className="text-xs">Type</Label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="All" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {RESOURCE_TYPES.map(t => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
