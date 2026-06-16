import type { Metadata } from "next";
export const metadata: Metadata = { title: "Resource Management" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Resource Management</h2>
      <p className="text-muted-foreground">Resource moderation, uploads, and categorization will appear here.</p>
    </div>
  );
}
