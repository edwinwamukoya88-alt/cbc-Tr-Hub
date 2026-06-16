import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

interface ReportCardInput {
  studentName: string;
  grade: string;
  term: number;
  year: number;
  schoolName: string;
  subjects: Array<{ name: string; score: number; grade: string; comment: string }>;
  competencies: Array<{ name: string; rating: string; comment: string }>;
  teacherName: string;
  principalName: string;
}

export const generateReportCard = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Authentication required");

  const {
    studentName, grade, term, year, schoolName, subjects, competencies, teacherName, principalName,
  } = data as ReportCardInput;

  if (!studentName || !grade || !term || !year || !schoolName) {
    throw new functions.https.HttpsError("invalid-argument", "Missing required report card fields");
  }

  const usageRef = admin.firestore().doc(`ai_usage/${context.auth.uid}/monthly/${getCurrentMonth()}`);
  const usageDoc = await usageRef.get();
  const usage = usageDoc.data() || { reportCards: 0 };

  const reportCardRef = await admin.firestore().collection("report_cards").add({
    userId: context.auth.uid,
    studentName,
    grade,
    term,
    year,
    schoolName,
    subjects,
    competencies,
    teacherName,
    principalName,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    status: "generating",
  });

  await usageRef.set({ reportCards: (usage.reportCards || 0) + 1 }, { merge: true });

  return {
    success: true,
    reportCardId: reportCardRef.id,
    message: "Report card generation pipeline started",
  };
});

function getCurrentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}
