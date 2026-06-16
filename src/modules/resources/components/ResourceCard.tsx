"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Eye } from "lucide-react";
import { PublishingStatus } from "@/modules/quality-checker/components/PublishingStatus";

interface ResourceCardProps {
  resource: any;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base line-clamp-1">{resource.title}</CardTitle>
          {resource.qualityScore && <Badge variant={resource.qualityScore >= 75 ? "success" : "warning"} className="shrink-0">Q: {resource.qualityScore}</Badge>}
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-xs">{resource.type?.replace(/_/g, " ")}</Badge>
          <Badge variant="outline" className="text-xs">{resource.grade}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{resource.description}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Download className="h-3 w-3" />{resource.downloads || 0}</span>
            <span className="flex items-center gap-1"><Star className="h-3 w-3" />{resource.rating?.toFixed(1) || "0.0"}</span>
            <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{resource.views || 0}</span>
          </div>
          <PublishingStatus status={resource.status} />
        </div>
      </CardContent>
    </Card>
  );
}
