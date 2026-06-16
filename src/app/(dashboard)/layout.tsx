"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useRequireAuth } from "@/modules/auth/hooks/useRequireAuth";

export default function DashboardRoutesLayout({ children }: { children: React.ReactNode }) {
  const { loading } = useRequireAuth("/login");

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}
