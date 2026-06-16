export type AIGenerationType = "lesson_plan" | "exam" | "scheme_of_work" | "rubric" | "report_comment" | "report_card";

export interface AIGenerationInputs {
  grade: string;
  learningArea: string;
  strand?: string;
  subStrand?: string;
  duration?: number;
  language?: "en" | "sw";
  biblicalIntegration?: boolean;
  [key: string]: unknown;
}

export interface AIGenerationResult {
  id: string;
  type: AIGenerationType;
  output: string;
  outputFormat: "markdown" | "json";
  model: "gpt-4o" | "gemini-pro";
  tokensUsed: number;
  createdAt: Date;
}
