import type { Metadata } from "next";
export const metadata: Metadata = { title: "Rubrics" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Rubrics</h2>
      <p className="text-muted-foreground">Create assessment rubrics for CBC learning areas. Feature coming soon.</p>
    </div>
  );
}
