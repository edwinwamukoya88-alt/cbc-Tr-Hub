import type { Metadata } from "next";
export const metadata: Metadata = { title: "Schemes of Work" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Schemes of Work</h2>
      <p className="text-muted-foreground">Plan your term with structured schemes of work. Feature coming soon.</p>
    </div>
  );
}
