import { KICD_SYSTEM_PROMPT } from "./system-prompts";

export function buildCommentPrompt(params: {
  grade: string; learningArea: string; studentName: string;
  performanceLevel: string; strengths: string[]; areasForImprovement: string[];
  language: string;
}): string {
  return `${KICD_SYSTEM_PROMPT}

Generate a professional CBC report comment for:
- Grade: ${params.grade}
- Learning Area: ${params.learningArea}
- Student: ${params.studentName}
- Performance Level: ${params.performanceLevel}
- Key Strengths: ${params.strengths.join(", ")}
- Areas for Improvement: ${params.areasForImprovement.join(", ")}
- Output Language: ${params.language === "sw" ? "Kiswahili" : "English"}

Write a constructive, encouraging comment that:
1. Highlights the student's strengths with specific examples
2. Addresses areas for growth in a positive, actionable manner
3. Aligns with CBC competency-based assessment philosophy
4. Provides concrete recommendations for improvement
5. Encourages parental involvement in the learning process

Keep the comment 3-5 sentences, professional yet warm in tone.`;
}
