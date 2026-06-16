"use client";
import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from "recharts";

interface PerformanceRadarProps {
  data: Record<string, string>;
}

const levelToNumber = (level: string) => {
  switch (level) { case "exceeds": return 4; case "meets": return 3; case "approaching": return 2; case "below": return 1; default: return 0; }
};

export function PerformanceRadar({ data }: PerformanceRadarProps) {
  if (!data) return null;
  const chartData = Object.entries(data).map(([key, value]) => ({
    competency: key.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase()),
    score: levelToNumber(value as string),
    fullMark: 4,
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="competency" tick={{ fontSize: 11 }} />
          <PolarRadiusAxis angle={30} domain={[0, 4]} tick={false} />
          <Radar dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
