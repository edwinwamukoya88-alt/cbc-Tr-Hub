import type { Metadata } from "next";
export const metadata: Metadata = { title: "Exams" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Exams</h2>
      <p className="text-muted-foreground">Create and manage CBC assessments. Feature coming soon.</p>
    </div>
  );
}
