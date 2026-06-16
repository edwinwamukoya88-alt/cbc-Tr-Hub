import { KICD_SYSTEM_PROMPT } from "./system-prompts";

export function buildExamPrompt(params: {
  grade: string; learningArea: string; strand: string; subStrand: string;
  questionTypes: string[]; bloomLevels: string[]; totalMarks: number;
  duration: number; includeMarkingScheme: boolean; language: string;
}): string {
  return `${KICD_SYSTEM_PROMPT}

Generate a CBC-aligned examination for:
- Grade: ${params.grade}
- Learning Area: ${params.learningArea}
- Strand: ${params.strand}
- Sub-Strand: ${params.subStrand}
- Question Types: ${params.questionTypes.join(", ")}
- Bloom's Taxonomy Levels: ${params.bloomLevels.join(", ")}
- Total Marks: ${params.totalMarks}
- Duration: ${params.duration} minutes
- Include Marking Scheme: ${params.includeMarkingScheme ? "Yes" : "No"}
- Output Language: ${params.language === "sw" ? "Kiswahili" : "English"}

Structure the exam with:
1. Clear instructions to the learner
2. Questions organized by skill level (Remembering, Understanding, Applying, Analysing, Evaluating, Creating)
3. Varied question types aligned with CBC assessment guidelines
4. Appropriate marks allocation per question
5. Practical/performance tasks where applicable
${params.includeMarkingScheme ? "\n6. Marking scheme with model answers and mark allocation" : ""}

Format as a clean, printable assessment document.`;
}
