import { KICD_SYSTEM_PROMPT } from "./system-prompts";

export function buildRubricPrompt(params: {
  grade: string; learningArea: string; taskDescription: string;
  criteria: string[]; performanceLevels: number; language: string;
}): string {
  return `${KICD_SYSTEM_PROMPT}

Generate a CBC-aligned analytic rubric for:
- Grade: ${params.grade}
- Learning Area: ${params.learningArea}
- Task: ${params.taskDescription}
- Assessment Criteria: ${params.criteria.join(", ")}
- Performance Levels: ${params.performanceLevels} (e.g., Exceeds, Meets, Approaching, Below)
- Output Language: ${params.language === "sw" ? "Kiswahili" : "English"}

Structure the rubric as a table with:
1. Criteria listed in the first column
2. Performance levels as subsequent columns
3. Clear descriptors for each criterion at each performance level
4. A scoring guide with total possible points
5. Space for teacher comments

Ensure descriptors are specific, observable, and measurable.`;
}
