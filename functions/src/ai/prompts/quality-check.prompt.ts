import { KICD_SYSTEM_PROMPT } from "./system-prompts";

export function buildQualityCheckPrompt(params: { content: string; contentType: string; grade: string; learningArea: string }): string {
  return `${KICD_SYSTEM_PROMPT}

Review the following ${params.contentType} for Grade ${params.grade} - ${params.learningArea} and provide a quality assessment.

Content to review:
---
${params.content}
---

Score the content on the following criteria (1-10 each):
1. **Curriculum Alignment** - How well does it match KICD CBC standards?
2. **Accuracy** - Is the information factually correct and grade-appropriate?
3. **Clarity** - Is the language clear and accessible for the target audience?
4. **Completeness** - Does it cover all required sections/elements?
5. **Pedagogical Soundness** - Does it use effective teaching approaches?
6. **Differentiation** - Does it address diverse learner needs?
7. **Assessment Integration** - Are assessment methods appropriately included?

Provide:
- Overall score (average of all criteria)
- Specific strengths
- Specific areas for improvement with actionable suggestions
- Verdict: Approve, Revise, or Reject`;
}
