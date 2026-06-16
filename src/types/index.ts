import { Timestamp } from "firebase/firestore";

export type UserRole = "super_admin" | "school_admin" | "teacher" | "parent";
export type Plan = "free" | "teacher_pro" | "school";
export type Language = "en" | "sw";

export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  avatarUrl?: string;
  phone?: string;
  schoolId?: string;
  plan: Plan;
  isActive: boolean;
  preferences: {
    language: Language;
    biblicalIntegration: boolean;
    darkMode: boolean;
  };
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export type SubscriptionStatus =
  | "active"
  | "grace_period"
  | "expired"
  | "cancelled";

export interface Subscription {
  userId: string;
  entityType: "user" | "school";
  plan: "teacher_pro" | "school";
  status: SubscriptionStatus;
  pesapalOrderId: string;
  pesapalSubscriptionId?: string;
  amount: number;
  currency: "KES";
  currentPeriodStart: Timestamp;
  currentPeriodEnd: Timestamp;
  gracePeriodEnd?: Timestamp;
  cancelledAt?: Timestamp;
  paymentMethod: "mpesa" | "airtel_money" | "card" | "bank";
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface AIUsageMonth {
  lessonPlans: number;
  exams: number;
  schemesOfWork: number;
  rubrics: number;
  reportComments: number;
  reportCards: number;
  homeworkHelp: number;
  smartSearchQueries: number;
  qualityChecks: number;
  totalTokensUsed: number;
  totalCostUsd: number;
  month: string;
}

export type ResourceType =
  | "lesson_plan"
  | "scheme_of_work"
  | "exam"
  | "rubric"
  | "notes"
  | "revision_paper"
  | "project"
  | "teaching_aid"
  | "worksheet"
  | "marking_scheme"
  | "presentation";

export type ResourceSource = "curated" | "ai_generated" | "community";
export type ResourceStatus =
  | "draft"
  | "pending_review"
  | "published"
  | "rejected";

export type PublishingRecommendation =
  | "approved"
  | "approved_with_recommendations"
  | "revision_required"
  | "high_similarity";

export interface Resource {
  title: string;
  description: string;
  type: ResourceType;
  grade: string;
  learningArea: string;
  strand?: string;
  subStrand?: string;
  term?: number;
  source: ResourceSource;
  authorId: string;
  authorName: string;
  fileUrl?: string;
  content?: string;
  thumbnailUrl?: string;
  status: ResourceStatus;
  isPremium: boolean;
  price?: number;
  qualityScore?: number;
  originalityScore?: number;
  curriculumAlignmentScore?: number;
  classroomReadinessScore?: number;
  publishingRecommendation?: PublishingRecommendation;
  qualityReviewId?: string;
  downloads: number;
  rating: number;
  ratingCount: number;
  views: number;
  tags: string[];
  seoSlug: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface GeneratedContent {
  userId: string;
  type:
    | "lesson_plan"
    | "exam"
    | "scheme_of_work"
    | "rubric"
    | "report_comment"
    | "report_card";
  inputs: Record<string, unknown>;
  output: string;
  outputFormat: "markdown" | "json";
  model: "gpt-4o" | "gemini-pro";
  tokensUsed: number;
  isSavedToLibrary: boolean;
  isSharedToResourceCentre: boolean;
  language: Language;
  createdAt: Timestamp;
}

export type QualityRecommendation =
  | "approved"
  | "approved_with_recommendations"
  | "revision_required"
  | "high_similarity";

export interface QualityReview {
  resourceId: string;
  reviewedBy: "ai" | "admin";
  adminUserId?: string;
  originalityScore: number;
  curriculumAlignmentScore: number;
  classroomReadinessScore: number;
  educationalQualityScore: number;
  overallScore: number;
  aiWritingLikelihoodScore: number;
  duplicateContentDetected: boolean;
  similarResourceIds: string[];
  originalityAnalysis: string;
  curriculumReview: string;
  qualityObservations: string;
  improvementSuggestions: string[];
  recommendation: QualityRecommendation;
  adminOverride?: {
    decision: "approved" | "rejected";
    reason: string;
    timestamp: Timestamp;
  };
  createdAt: Timestamp;
}

export type OverallPerformanceRating =
  | "excellent"
  | "high_achiever"
  | "average"
  | "developing"
  | "needs_intensive_support";

export type CompetencyLevel = "exceeds" | "meets" | "approaching" | "below";

export interface SubjectResult {
  learningArea: string;
  catScore?: number;
  midTermScore?: number;
  endTermScore?: number;
  averageScore: number;
  grade: string;
  performanceLevel: CompetencyLevel;
  strengths: string;
  areasForImprovement: string;
  comment: string;
}

export interface ReportCard {
  userId: string;
  schoolId?: string;
  studentName: string;
  studentId?: string;
  grade: string;
  term: number;
  year: number;
  subjects: SubjectResult[];
  overallPerformanceRating: OverallPerformanceRating;
  strengthsAnalysis: string;
  areasForImprovement: string;
  competencyEvaluation: {
    criticalThinking: CompetencyLevel;
    communication: CompetencyLevel;
    collaboration: CompetencyLevel;
    creativity: CompetencyLevel;
    selfEfficacy: CompetencyLevel;
    digitalLiteracy?: CompetencyLevel;
  };
  teacherComment: string;
  behaviorComment: string;
  effortComment: string;
  parentFeedbackSummary: string;
  homeSupportSuggestions: string[];
  motivationMessage: string;
  revisionTopics: string[];
  studyStrategies: string[];
  teacherInterventions: string[];
  parentalSupportTips: string[];
  model: "gpt-4o" | "gemini-pro";
  language: Language;
  exportedPdfUrl?: string;
  createdAt: Timestamp;
}

export interface Grade {
  name: string;
  level:
    | "pre_primary"
    | "lower_primary"
    | "upper_primary"
    | "junior_secondary";
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
