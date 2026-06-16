import { KICD_SYSTEM_PROMPT } from "./system-prompts";

export function buildSchemePrompt(params: {
  grade: string; learningArea: string; term: number; year: number;
  weeks: number; strands: string[]; biblicalIntegration: boolean;
}): string {
  return `${KICD_SYSTEM_PROMPT}

Generate a CBC-aligned Scheme of Work for:
- Grade: ${params.grade}
- Learning Area: ${params.learningArea}
- Term: ${params.term}
- Year: ${params.year}
- Duration: ${params.weeks} weeks
- Strands to cover: ${params.strands.join(", ")}
- Biblical Integration: ${params.biblicalIntegration ? "Yes" : "No"}

Create a comprehensive scheme of work table with columns:
1. Week | Lesson | Strand | Sub-Strand | Specific Learning Outcomes | Key Inquiry Questions | Learning Experiences | Learning Resources | Assessment Methods | Reflection

Include proper sequencing of content across the term, ensuring coverage of all specified strands.
Align each lesson with CBC core competencies and PCIs.
Provide differentiated learning experiences for diverse learners.`;
}
