import type { Metadata } from "next";
export const metadata: Metadata = { title: "New Report Card" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">New Report Card</h2>
      <p className="text-muted-foreground">Fill in the details to generate a CBC report card. Feature coming soon.</p>
    </div>
  );
}
