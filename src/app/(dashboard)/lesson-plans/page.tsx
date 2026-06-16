import type { Metadata } from "next";
export const metadata: Metadata = { title: "Lesson Plans" };
export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Lesson Plans</h2>
      </div>
      <p className="text-muted-foreground">Generate CBC-aligned lesson plans. Feature coming soon.</p>
    </div>
  );
}
