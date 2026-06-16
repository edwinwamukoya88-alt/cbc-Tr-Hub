import type { Metadata } from "next";
export const metadata: Metadata = { title: "Quality Reviews Queue" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Quality Reviews Queue</h2>
      <p className="text-muted-foreground">Pending and completed quality review submissions will appear here.</p>
    </div>
  );
}
