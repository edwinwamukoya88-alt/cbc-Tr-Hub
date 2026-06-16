import type { Metadata } from "next";
export const metadata: Metadata = { title: "Report Card Details" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Report Card Details</h2>
      <p className="text-muted-foreground">View and manage this report card. Feature coming soon.</p>
    </div>
  );
}
