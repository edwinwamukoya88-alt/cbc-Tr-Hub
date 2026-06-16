import type { Metadata } from "next";
export const metadata: Metadata = { title: "School Management" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">School Management</h2>
      <p className="text-muted-foreground">School list, registration, and management tools will appear here.</p>
    </div>
  );
}
