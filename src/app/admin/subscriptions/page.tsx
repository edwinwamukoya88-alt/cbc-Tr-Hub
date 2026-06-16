import type { Metadata } from "next";
export const metadata: Metadata = { title: "Subscription Management" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Subscription Management</h2>
      <p className="text-muted-foreground">Subscription plans, billing, and plan management will appear here.</p>
    </div>
  );
}
