export const MODEL_ROUTING = {
  lesson_plan:     { primary: "gemini" as const,  fallback: "openai" as const },
  exam:            { primary: "openai" as const,  fallback: "gemini" as const },
  scheme_of_work:  { primary: "openai" as const,  fallback: "gemini" as const },
  rubric:          { primary: "gemini" as const,  fallback: "openai" as const },
  report_comment:  { primary: "gemini" as const,  fallback: "openai" as const },
  report_card:     { primary: "openai" as const,  fallback: "gemini" as const },
  smart_search:    { primary: "gemini" as const,  fallback: "openai" as const },
  quality_check:   { primary: "gemini" as const,  fallback: "openai" as const },
  homework_help:   { primary: "gemini" as const,  fallback: "openai" as const },
} as const;

export type AITask = keyof typeof MODEL_ROUTING;

export function getModelForTask(task: AITask, useFallback = false): "gpt-4o" | "gemini-pro" {
  const route = MODEL_ROUTING[task];
  return useFallback ? route.fallback : route.primary;
}
