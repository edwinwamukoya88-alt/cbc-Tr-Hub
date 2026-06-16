import { KICD_SYSTEM_PROMPT } from "./system-prompts";

export function buildLessonPlanPrompt(params: {
  grade: string; learningArea: string; strand: string; subStrand: string;
  duration: number; biblicalIntegration: boolean; language: string;
}): string {
  return `${KICD_SYSTEM_PROMPT}

Generate a detailed CBC-aligned lesson plan for:
- Grade: ${params.grade}
- Learning Area: ${params.learningArea}
- Strand: ${params.strand}
- Sub-Strand: ${params.subStrand}
- Duration: ${params.duration} minutes
- Biblical Integration: ${params.biblicalIntegration ? "Yes" : "No"}
- Output Language: ${params.language === "sw" ? "Kiswahili" : "English"}

Include the following sections:
1. Learning Outcomes (specific, measurable)
2. Learning Resources
3. Introduction/Lesson Launch (5-10 min)
4. Main Activity/Lesson Development (step-by-step, interactive)
5. CBC Core Competencies developed
6. Pertinent and Contemporary Issues (PCIs)
7. Values integration
8. Assessment Methods (formative and summative)
9. Extended Activities (differentiated - fast learners and slow learners)
10. Teacher Reflection

Format as a structured markdown document with clear headings and bullet points.`;
}
