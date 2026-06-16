import { KICD_SYSTEM_PROMPT } from "./system-prompts";

export function buildSmartSearchPrompt(params: { query: string; filters?: Record<string, string> }): string {
  const filterStr = params.filters
    ? `\nActive Filters:\n${Object.entries(params.filters).map(([k, v]) => `- ${k}: ${v}`).join("\n")}`
    : "";

  return `${KICD_SYSTEM_PROMPT}

Analyse the following educator search query and return structured results.

Query: "${params.query}"
${filterStr}

Interpret the query and provide:
1. Intent classification (lesson_plan, exam, scheme_of_work, rubric, resource, or general)
2. Extracted parameters (grade, learningArea, strand, topic if identifiable)
3. Suggested search refinements (if query is vague)
4. Direct answer or resource recommendations based on CBC curriculum
5. Related topics the user might find useful

Be concise and practical for a busy teacher.`;
}
