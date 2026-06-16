import type { Metadata } from "next";
export const metadata: Metadata = { title: "Review Details" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Review Details</h2>
      <p className="text-muted-foreground">Detailed view of a quality review submission will appear here.</p>
    </div>
  );
}
