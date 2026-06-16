"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";
import { useReportCard } from "../hooks/useReportCard";
import { GRADE_LEVELS } from "@/lib/constants";

const defaultSubjects = ["Mathematics", "English", "Science and Technology", "Kiswahili", "Social Studies", "Creative Arts", "Religious Education", "Physical Education", "Agriculture", "Home Science"];

export function ReportCardForm() {
  const { generate, loading } = useReportCard();
  const [students, setStudents] = useState([{ name: "", subjects: defaultSubjects.map(s => ({ learningArea: s, catScore: "", midTermScore: "", endTermScore: "" })) }]);
  const [grade, setGrade] = useState("");
  const [term, setTerm] = useState("1");
  const [year, setYear] = useState(new Date().getFullYear().toString());

  const addStudent = () => setStudents(prev => [...prev, { name: "", subjects: defaultSubjects.map(s => ({ learningArea: s, catScore: "", midTermScore: "", endTermScore: "" })) }]);

  const generateReportCard = async () => {
    for (const student of students) {
      const data = {
        studentName: student.name,
        grade,
        term: parseInt(term),
        year: parseInt(year),
        subjects: student.subjects.map(s => ({
          learningArea: s.learningArea,
          catScore: s.catScore ? parseFloat(s.catScore) : undefined,
          midTermScore: s.midTermScore ? parseFloat(s.midTermScore) : undefined,
          endTermScore: s.endTermScore ? parseFloat(s.endTermScore) : undefined,
        })),
      };
      await generate(data);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Grade</Label>
          <Select value={grade} onValueChange={setGrade}>
            <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
            <SelectContent>
              {GRADE_LEVELS.map((g) => <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Term</Label>
          <Select value={term} onValueChange={setTerm}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Term 1</SelectItem>
              <SelectItem value="2">Term 2</SelectItem>
              <SelectItem value="3">Term 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Year</Label>
          <Input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
      </div>

      {students.map((student, si) => (
        <Card key={si}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Student {si + 1}</CardTitle>
            {students.length > 1 && (
              <Button variant="ghost" size="icon" onClick={() => setStudents(prev => prev.filter((_, i) => i !== si))}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Student Name</Label>
              <Input value={student.name} onChange={(e) => setStudents(prev => prev.map((s, i) => i === si ? { ...s, name: e.target.value } : s))} placeholder="Enter student name" />
            </div>
            <div className="space-y-2">
              <Label>Subjects & Scores</Label>
              <div className="grid grid-cols-4 gap-2 text-sm font-medium text-muted-foreground pb-2">
                <div>Subject</div><div>CAT</div><div>Mid-Term</div><div>End-Term</div>
              </div>
              {student.subjects.map((subject, j) => (
                <div key={j} className="grid grid-cols-4 gap-2">
                  <Input value={subject.learningArea} className="bg-muted" readOnly />
                  <Input type="number" placeholder="%" value={subject.catScore} onChange={(e) => setStudents(prev => prev.map((s, i) => i === si ? { ...s, subjects: s.subjects.map((sub, k) => k === j ? { ...sub, catScore: e.target.value } : sub) } : s))} />
                  <Input type="number" placeholder="%" value={subject.midTermScore} onChange={(e) => setStudents(prev => prev.map((s, i) => i === si ? { ...s, subjects: s.subjects.map((sub, k) => k === j ? { ...sub, midTermScore: e.target.value } : sub) } : s))} />
                  <Input type="number" placeholder="%" value={subject.endTermScore} onChange={(e) => setStudents(prev => prev.map((s, i) => i === si ? { ...s, subjects: s.subjects.map((sub, k) => k === j ? { ...sub, endTermScore: e.target.value } : sub) } : s))} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex gap-4">
        <Button variant="outline" onClick={addStudent}><Plus className="h-4 w-4 mr-2" /> Add Student</Button>
        <Button onClick={generateReportCard} disabled={loading}>{loading ? "Generating..." : "Generate Report Cards"}</Button>
      </div>
    </div>
  );
}
