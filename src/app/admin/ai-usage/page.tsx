import type { Metadata } from "next";
export const metadata: Metadata = { title: "AI Usage Analytics" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">AI Usage Analytics</h2>
      <p className="text-muted-foreground">AI feature usage metrics and analytics will appear here.</p>
    </div>
  );
}
