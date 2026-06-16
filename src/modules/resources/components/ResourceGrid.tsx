"use client";
import React from "react";
import { ResourceCard } from "./ResourceCard";
import { Skeleton } from "@/components/ui/skeleton";

interface ResourceGridProps {
  resources: any[];
  loading?: boolean;
}

export function ResourceGrid({ resources, loading }: ResourceGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        ))}
      </div>
    );
  }

  if (!resources?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No resources found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {resources.map((r) => <ResourceCard key={r.id} resource={r} />)}
    </div>
  );
}
