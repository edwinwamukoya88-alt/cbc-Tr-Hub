export interface SubjectScoreInput {
  learningArea: string;
  catScore?: number;
  midTermScore?: number;
  endTermScore?: number;
  teacherObservations?: string;
}

export interface ReportCardFormData {
  studentName: string;
  grade: string;
  term: number;
  year: number;
  subjects: SubjectScoreInput[];
  behaviorNotes?: string;
  attendancePercentage?: number;
  language: "en" | "sw";
}
