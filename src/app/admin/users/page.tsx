import type { Metadata } from "next";
export const metadata: Metadata = { title: "User Management" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">User Management</h2>
      <p className="text-muted-foreground">User list and management controls will appear here.</p>
    </div>
  );
}
