"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Download } from "lucide-react";

interface SchemeOutputProps {
  output?: string;
}

export function SchemeOutput({ output }: SchemeOutputProps) {
  if (!output) return null;

  const handleCopy = () => navigator.clipboard.writeText(output);
  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "scheme-of-work.md"; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Generated Scheme of Work</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}><Copy className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" onClick={handleDownload}><Download className="h-4 w-4" /></Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm max-w-none whitespace-pre-wrap">{output}</div>
      </CardContent>
    </Card>
  );
}
