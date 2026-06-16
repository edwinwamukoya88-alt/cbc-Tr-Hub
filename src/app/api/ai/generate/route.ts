import { NextRequest, NextResponse } from "next/server";
import { getAdminApp } from "@/lib/firebase/admin";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import crypto from "crypto";

const TYPES = ["lesson_plan", "exam", "scheme_of_work", "rubric", "report_comment", "report_card"] as const;

function getCurrentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

async function trackUsage(userId: string, type: string) {
  try {
    const admin = getAdminApp();
    const db = getFirestore(admin);
    const usageRef = db.doc(`ai_usage/${userId}/monthly/${getCurrentMonth()}`);
    const fieldMap: Record<string, string> = {
      lesson_plan: "lessonPlans", exam: "examsGenerated", scheme_of_work: "schemesGenerated",
      rubric: "rubricsGenerated", report_comment: "reportCommentsGenerated", report_card: "reportCardsGenerated",
    };
    const field = fieldMap[type] || "other";
    await usageRef.set({ [field]: FieldValue.increment(1) }, { merge: true });
  } catch {
    // non-blocking
  }
}

function generateSampleOutput(type: string) {
  switch (type) {
    case "lesson_plan":
      return {
        id: crypto.randomUUID(), type, outputFormat: "markdown" as const, model: "gpt-4o" as const, tokensUsed: 1200,
        createdAt: new Date(),
        output: `# Lesson Plan\n\n**Grade:** 5\n**Subject:** Mathematics\n**Strand:** Numbers\n**Duration:** 40 min\n\n## Learning Outcomes\nBy the end of the lesson, learners should be able to:\n1. Identify place values up to thousands\n2. Read and write numbers in words\n3. Compare numbers using >, <, =\n\n## Resources\n- Place value chart\n- Counters\n- Number cards\n\n## Lesson Development\n\n| Stage | Time | Teacher Activity | Learner Activity |\n|-------|------|-----------------|------------------|\n| Introduction | 5 min | Review previous knowledge on counting | Respond to questions |\n| Development | 25 min | Demonstrate place values using chart | Practice with counters |\n| Conclusion | 10 min | Assess understanding through oral questions | Complete worksheet |\n\n## Assessment\nObservation, oral questions, worksheet\n\n## Biblical Integration\nStewardship - managing God's gifts wisely (Parable of the Talents)`,
      };
    case "exam":
      return {
        id: crypto.randomUUID(), type, outputFormat: "markdown" as const, model: "gpt-4o" as const, tokensUsed: 1500,
        createdAt: new Date(),
        output: `# Mathematics Assessment - Grade 5\n\n**Duration:** 1 hour\n**Total Marks:** 30\n\n## Section A: Multiple Choice (10 marks)\n1. What is the place value of 7 in 3,742?\n   a) 7  \n   b) 70  \n   c) 700  \n   d) 7,000\n\n2. 1/4 + 1/4 = ?\n   a) 1/8  \n   b) 1/2  \n   c) 2/4  \n   d) 3/4\n\n## Section B: Short Answer (10 marks)\n11. Write 3,456 in words.\n12. Arrange these numbers in ascending order: 4,502, 4,025, 4,520, 4,250\n\n## Section C: Problem Solving (10 marks)\n21. A farmer has 2,450 mangoes. He sells 1,280. How many remain?`,
      };
    case "scheme_of_work":
      return {
        id: crypto.randomUUID(), type, outputFormat: "markdown" as const, model: "gpt-4o" as const, tokensUsed: 2000,
        createdAt: new Date(),
        output: `# Scheme of Work - Mathematics Grade 5 - Term 1\n\n| Week | Strand | Sub-strand | Learning Outcomes | Resources |\n|------|--------|-----------|------------------|-----------|\n| 1-2 | Numbers | Place Value | Identify place values up to 100,000 | Place value charts |\n| 3-4 | Numbers | Addition & Subtraction | Add/subtract numbers up to 10,000 | Counters, abacus |\n| 5-6 | Numbers | Multiplication | Multiply 2-digit by 1-digit numbers | Multiplication tables |\n| 7-8 | Numbers | Division | Divide 2-digit numbers by 1-digit | Sharing objects |\n| 9-10 | Fractions | Introduction | Identify and write fractions | Fraction circles |\n| 11-12 | Fractions | Operations | Add and subtract like fractions | Fraction strips |\n| 13 | Assessment | End of Term | Review all topics | Test papers |`,
      };
    case "rubric":
      return {
        id: crypto.randomUUID(), type, outputFormat: "markdown" as const, model: "gpt-4o" as const, tokensUsed: 800,
        createdAt: new Date(),
        output: `# Mathematics Assessment Rubric - Grade 5\n\n| Criteria | Exceeding (4) | Meeting (3) | Approaching (2) | Below (1) |\n|----------|--------------|-------------|-----------------|-----------|\n| Place Value | Correctly identifies all place values | Identifies most place values | Identifies some with help | Cannot identify |\n| Computation | Solves all problems accurately | Solves most problems | Solves some problems | Struggles with computation |\n| Problem Solving | Applies strategies independently | Applies strategies with minimal help | Needs guidance | Cannot apply strategies |\n| Communication | Clearly explains thinking | Explains with minor gaps | Partial explanation | No explanation |`,
      };
    case "report_comment":
      return {
        id: crypto.randomUUID(), type, outputFormat: "markdown" as const, model: "gpt-4o" as const, tokensUsed: 600,
        createdAt: new Date(),
        output: `# Report Comments - Grade 5 Mathematics\n\n## Learner: Jane Mwangi\n\n**Strengths:**\n- Excellent understanding of place values and number operations\n- Works systematically through problem-solving tasks\n- Participates actively in group discussions\n\n**Areas for Improvement:**\n- Needs more practice with fraction operations\n- Should work on speed in mental math exercises\n\n**Teacher's Recommendation:**\nJane is a diligent learner who shows great potential in mathematics. She should continue practicing fraction problems at home using online resources. Her positive attitude towards learning is commendable.`,
      };
    case "report_card":
      return {
        id: crypto.randomUUID(), type, outputFormat: "markdown" as const, model: "gpt-4o" as const, tokensUsed: 2500,
        createdAt: new Date(),
        output: `# CBC Report Card\n\n**School:** Nairobi Primary School\n**Learner:** Jane Mwangi\n**Grade:** 5\n**Term:** 1, 2025\n\n## Subject Performance\n\n| Subject | Grade | Comment |\n|---------|-------|---------|\n| Mathematics | B+ | Good understanding of concepts |\n| English | A | Excellent reading comprehension |\n| Kiswahili | B | Improving in vocabulary |\n| Science | A | Outstanding in experiments |\n| Social Studies | B+ | Good participation |\n\n## Competency Assessment\n| Competency | Emerging | Developing | Proficient | Exemplary |\n|------------|----------|------------|------------|-----------|\n| Communication | | | ✓ | |\n| Critical Thinking | | | ✓ | |\n| Creativity | | ✓ | | |\n| Collaboration | | | ✓ | |\n| Citizenship | | ✓ | | |\n\n## Overall Performance\nJane has had a productive term. She demonstrates strong academic ability and positive character traits. Continue reading widely at home.`,
      };
    default:
      return { id: crypto.randomUUID(), type, outputFormat: "markdown" as const, model: "gpt-4o" as const, tokensUsed: 0, createdAt: new Date(), output: "No sample data available." };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type } = body;

    if (!type || !TYPES.includes(type)) {
      return NextResponse.json({ error: `Invalid type. Must be one of: ${TYPES.join(", ")}` }, { status: 400 });
    }

    const authHeader = request.headers.get("authorization");
    let userId = "anonymous";

    if (authHeader?.startsWith("Bearer ")) {
      const token = authHeader.slice(7);
      try {
        const admin = getAdminApp();
        const { getAuth } = await import("firebase-admin/auth");
        const decoded = await getAuth(admin).verifyIdToken(token);
        userId = decoded.uid;
      } catch {
        return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
      }
    } else {
      return NextResponse.json({ error: "Authorization header required" }, { status: 401 });
    }

    await trackUsage(userId, type);

    const result = generateSampleOutput(type);

    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
