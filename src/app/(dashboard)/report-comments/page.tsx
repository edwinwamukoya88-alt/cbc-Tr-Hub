import type { Metadata } from "next";
export const metadata: Metadata = { title: "Report Comments" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Report Comments</h2>
      <p className="text-muted-foreground">Generate personalized report card comments. Feature coming soon.</p>
    </div>
  );
}
