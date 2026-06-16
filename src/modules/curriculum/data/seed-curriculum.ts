import { Timestamp } from "firebase/firestore";

export const SEED_GRADES = [
  { name: "Grade 4", level: "upper_primary", order: 4 },
  { name: "Grade 5", level: "upper_primary", order: 5 },
  { name: "Grade 6", level: "upper_primary", order: 6 },
];

export const SEED_LEARNING_AREAS: Record<string, { name: string; code: string }[]> = {
  "Grade 4": [
    { name: "Mathematics", code: "MATH" },
    { name: "English", code: "ENG" },
    { name: "Science and Technology", code: "SCI" },
  ],
  "Grade 5": [
    { name: "Mathematics", code: "MATH" },
    { name: "English", code: "ENG" },
    { name: "Science and Technology", code: "SCI" },
  ],
  "Grade 6": [
    { name: "Mathematics", code: "MATH" },
    { name: "English", code: "ENG" },
    { name: "Science and Technology", code: "SCI" },
  ],
};

export const SEED_STRANDS: Record<string, { name: string; order: number }[]> = {
  "Mathematics": [
    { name: "Numbers", order: 1 },
    { name: "Measurement", order: 2 },
    { name: "Geometry", order: 3 },
    { name: "Data Handling", order: 4 },
    { name: "Algebra", order: 5 },
  ],
  "English": [
    { name: "Listening and Speaking", order: 1 },
    { name: "Reading", order: 2 },
    { name: "Writing", order: 3 },
    { name: "Grammar", order: 4 },
  ],
  "Science and Technology": [
    { name: "Living Things", order: 1 },
    { name: "Environment", order: 2 },
    { name: "Matter", order: 3 },
    { name: "Force and Energy", order: 4 },
    { name: "Technology", order: 5 },
  ],
};

export const SEED_SUB_STRANDS: Record<string, { name: string; outcomes: string[]; activities: string[]; resources: string[]; order: number }[]> = {
  "Numbers": [
    {
      name: "Whole Numbers",
      outcomes: ["Identify place value up to millions", "Round off numbers to the nearest ten, hundred, thousand"],
      activities: ["Using place value charts", "Grouping objects in hundreds, tens, ones"],
      resources: ["Place value chart", "Counters", "Number cards"],
      order: 1,
    },
    {
      name: "Fractions",
      outcomes: ["Identify proper and improper fractions", "Add and subtract fractions with like denominators"],
      activities: ["Using fraction strips", "Shading fraction parts"],
      resources: ["Fraction charts", "Manipulatives", "Fraction strips"],
      order: 2,
    },
  ],
};
