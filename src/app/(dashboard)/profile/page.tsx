import type { Metadata } from "next";
export const metadata: Metadata = { title: "Profile Settings" };
export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Profile Settings</h2>
      <p className="text-muted-foreground">Manage your account profile and preferences. Feature coming soon.</p>
    </div>
  );
}
