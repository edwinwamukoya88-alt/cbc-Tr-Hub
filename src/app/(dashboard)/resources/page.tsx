import type { Metadata } from "next";
export const metadata: Metadata = { title: "Resource Centre" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Resource Centre</h2>
      <p className="text-muted-foreground">Browse, search, and share CBC teaching resources. Feature coming soon.</p>
    </div>
  );
}
