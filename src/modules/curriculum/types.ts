export interface Grade {
  name: string;
  level: "pre_primary" | "lower_primary" | "upper_primary" | "junior_secondary";
  order: number;
}

export interface LearningArea {
  name: string;
  code: string;
}

export interface Strand {
  name: string;
  order: number;
}

export interface SubStrand {
  name: string;
  specificLearningOutcomes: string[];
  suggestedActivities: string[];
  suggestedResources: string[];
  order: number;
}
