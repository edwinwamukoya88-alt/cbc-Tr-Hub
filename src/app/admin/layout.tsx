"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const adminNav = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/schools", label: "Schools" },
  { href: "/admin/subscriptions", label: "Subscriptions" },
  { href: "/admin/resources", label: "Resources" },
  { href: "/admin/quality-reviews", label: "Quality Reviews" },
  { href: "/admin/ai-usage", label: "AI Usage" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div className="flex items-center justify-center min-h-screen"><div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full" /></div>;
  
  if (!user || user.role !== "super_admin") {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r border-border bg-sidebar p-4">
        <div className="text-lg font-bold text-primary-700 mb-6">Admin Panel</div>
        <nav className="space-y-1">
          {adminNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-sm ${active ? "bg-primary-100 text-primary-700 font-medium" : "hover:bg-muted"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b border-border flex items-center justify-between px-6">
          <h1 className="font-semibold">Admin</h1>
          <div className="flex items-center gap-3">
            <Link href="/dashboard"><Button variant="ghost" size="sm">Back to Dashboard</Button></Link>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">{user.displayName?.charAt(0) || "A"}</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
