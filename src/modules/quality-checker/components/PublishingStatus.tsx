"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface PublishingStatusProps {
  status: string;
}

const statusStyles: Record<string, "success" | "warning" | "destructive" | "default"> = {
  approved: "success",
  published: "success",
  pending_review: "warning",
  revision_required: "destructive",
  rejected: "destructive",
  approved_with_recommendations: "default",
  high_similarity: "destructive",
};

export function PublishingStatus({ status }: PublishingStatusProps) {
  return (
    <Badge variant={statusStyles[status] || "default"}>
      {status.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
    </Badge>
  );
}
