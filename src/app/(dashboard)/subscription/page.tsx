import type { Metadata } from "next";
export const metadata: Metadata = { title: "Subscription" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Subscription</h2>
      <p className="text-muted-foreground">Manage your subscription plan and billing. Feature coming soon.</p>
    </div>
  );
}
