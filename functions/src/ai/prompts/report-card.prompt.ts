import { KICD_SYSTEM_PROMPT } from "./system-prompts";

export function buildReportCardPrompt(params: {
  studentName: string; grade: string; term: number; year: number;
  schoolName: string; subjects: Array<{ name: string; score: number; grade: string; comment: string }>;
  competencies: Array<{ name: string; rating: string; comment: string }>;
  teacherName: string; principalName: string;
}): string {
  return `${KICD_SYSTEM_PROMPT}

Generate a complete CBC report card for:
- Student: ${params.studentName}
- Grade: ${params.grade}
- Term: ${params.term}, Year: ${params.year}
- School: ${params.schoolName}
- Teacher: ${params.teacherName}
- Principal: ${params.principalName}

Subjects and Performance:
${params.subjects.map(s => `- ${s.name}: Score ${s.score}, Grade ${s.grade}`).join("\n")}

CBC Core Competencies Ratings:
${params.competencies.map(c => `- ${c.name}: ${c.rating}`).join("\n")}

Generate a comprehensive report card including:
1. Student and school information header
2. Subject-by-subject performance summary with individual comments
3. CBC core competencies assessment
4. PCIs and values integration feedback
5. Overall teacher comment
6. Areas of strength and recommendations for growth
7. Next term focus areas
8. Signatory section

Format as a professional, printable report card document.`;
}
