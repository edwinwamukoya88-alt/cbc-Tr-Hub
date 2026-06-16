export const APP_NAME = "CBC Teachers Hub";
export const APP_DESCRIPTION = "AI-powered teaching tools for the Competency-Based Curriculum";
export const APP_URL = "https://cbcteachershub.com";

export const PLANS = {
  free: {
    name: "Free",
    price: 0,
    limits: {
      lessonPlans: 20,
      exams: 3,
      schemesOfWork: 2,
      rubrics: 5,
      reportComments: 10,
      reportCardsPerClass: 10,
      smartSearchQueries: 30,
      qualityChecks: 5,
    },
  },
  teacher_pro: {
    name: "Teacher Pro",
    price: 500,
    currency: "KES",
    period: "monthly",
    limits: {
      lessonPlans: 500,
      exams: 500,
      schemesOfWork: 500,
      rubrics: 500,
      reportComments: 500,
      reportCardsPerClass: 500,
      smartSearchQueries: -1,
      qualityChecks: -1,
    },
  },
  school: {
    name: "School",
    price: 5000,
    currency: "KES",
    period: "monthly",
    limits: {
      lessonPlans: -1,
      exams: -1,
      schemesOfWork: -1,
      rubrics: -1,
      reportComments: -1,
      reportCardsPerClass: -1,
      smartSearchQueries: -1,
      qualityChecks: -1,
    },
  },
} as const;

export const GRADE_LEVELS = [
  { value: "pp1", label: "Pre-Primary 1" },
  { value: "pp2", label: "Pre-Primary 2" },
  { value: "grade_1", label: "Grade 1" },
  { value: "grade_2", label: "Grade 2" },
  { value: "grade_3", label: "Grade 3" },
  { value: "grade_4", label: "Grade 4" },
  { value: "grade_5", label: "Grade 5" },
  { value: "grade_6", label: "Grade 6" },
  { value: "grade_7", label: "Grade 7" },
  { value: "grade_8", label: "Grade 8" },
  { value: "grade_9", label: "Grade 9" },
] as const;

export const RESOURCE_TYPES = [
  { value: "lesson_plan", label: "Lesson Plan" },
  { value: "scheme_of_work", label: "Scheme of Work" },
  { value: "exam", label: "Exam" },
  { value: "rubric", label: "Rubric" },
  { value: "notes", label: "Notes" },
  { value: "revision_paper", label: "Revision Paper" },
  { value: "project", label: "Project" },
  { value: "teaching_aid", label: "Teaching Aid" },
  { value: "worksheet", label: "Worksheet" },
  { value: "marking_scheme", label: "Marking Scheme" },
  { value: "presentation", label: "Presentation" },
] as const;

export const CBC_PERFORMANCE_LEVELS = [
  "exceeds",
  "meets",
  "approaching",
  "below",
] as const;
