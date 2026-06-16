import type { Metadata } from "next";
export const metadata: Metadata = { title: "Admin Dashboard" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border rounded-lg p-4"><p className="text-sm text-muted-foreground">Total Users</p><p className="text-2xl font-bold">--</p></div>
        <div className="border rounded-lg p-4"><p className="text-sm text-muted-foreground">Active Schools</p><p className="text-2xl font-bold">--</p></div>
        <div className="border rounded-lg p-4"><p className="text-sm text-muted-foreground">Subscriptions</p><p className="text-2xl font-bold">--</p></div>
        <div className="border rounded-lg p-4"><p className="text-sm text-muted-foreground">Total Resources</p><p className="text-2xl font-bold">--</p></div>
      </div>
      <p className="text-muted-foreground">Statistics will populate once the system is live.</p>
    </div>
  );
}
