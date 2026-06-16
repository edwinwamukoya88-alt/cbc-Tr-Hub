"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  FileText,
  ClipboardCheck,
  ScrollText,
  BarChart3,
  Layers,
  MessageSquareQuote,
  CreditCard,
  ArrowRight,
  Clock,
  Save,
} from "lucide-react";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

const quickActions = [
  {
    title: "Lesson Plans",
    description: "Generate CBC-aligned lesson plans",
    href: "/lesson-plans",
    icon: BookOpen,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950",
  },
  {
    title: "Exams",
    description: "Create assessments with marking schemes",
    href: "/exams",
    icon: ClipboardCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950",
  },
  {
    title: "Report Cards",
    description: "Generate termly report cards",
    href: "/report-cards",
    icon: FileText,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950",
  },
  {
    title: "Schemes of Work",
    description: "Plan your term with structured schemes",
    href: "/schemes",
    icon: Layers,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950",
  },
];

const aiUsageLimits = [
  { label: "Lesson Plans", used: 5, limit: 20, icon: BookOpen },
  { label: "Report Cards", used: 2, limit: 10, icon: FileText },
  { label: "Exams", used: 8, limit: 15, icon: ClipboardCheck },
  { label: "Schemes of Work", used: 3, limit: 10, icon: Layers },
  { label: "Rubrics", used: 1, limit: 10, icon: ScrollText },
  { label: "Report Comments", used: 4, limit: 20, icon: MessageSquareQuote },
];

const recentActivity = [
  {
    type: "lesson_plan",
    title: "Grade 4 – Fractions Lesson Plan",
    time: "2 hours ago",
    icon: BookOpen,
    color: "text-blue-500",
  },
  {
    type: "exam",
    title: "Grade 5 – Science Mid-Term Exam",
    time: "Yesterday",
    icon: ClipboardCheck,
    color: "text-emerald-500",
  },
  {
    type: "report_card",
    title: "Grade 3 – Term 2 Report Cards",
    time: "2 days ago",
    icon: FileText,
    color: "text-amber-500",
  },
];

export function DashboardPage() {
  const { user, loading, error } = useAuth();

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-64" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-64 rounded-xl" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-destructive">
        <CardContent className="pt-6 text-center">
          <p className="text-destructive font-medium">Failed to load dashboard</p>
          <p className="text-sm text-muted-foreground mt-1">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight">
          Welcome back{user?.displayName ? `, ${user.displayName}` : ""}
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s your teaching overview for today
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">AI Generations</CardTitle>
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">+8 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Saved Resources</CardTitle>
            <Save className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">12 lesson plans, 8 exams</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Report Cards</CardTitle>
            <FileText className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Generated this term</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Subscription</CardTitle>
            <CreditCard className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <Badge variant={user?.plan === "free" ? "secondary" : "success"}>
              {user?.plan === "teacher_pro"
                ? "Teacher Pro"
                : user?.plan === "school"
                  ? "School"
                  : "Free"}
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">
              {user?.plan === "free"
                ? "Upgrade to unlock more"
                : "Active until Dec 2026"}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.title}
              variant="outline"
              asChild
              className="h-auto flex-col items-start gap-3 p-4 text-left"
            >
              <Link href={action.href}>
                <div className={`rounded-lg p-2 ${action.bg}`}>
                  <Icon className={`h-5 w-5 ${action.color}`} />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">{action.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              </Link>
            </Button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                No recent activity
              </p>
            ) : (
              recentActivity.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 border-b pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="rounded-lg bg-muted p-2">
                      <Icon className={`h-4 w-4 ${item.color}`} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {item.time}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="#">
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                );
              })
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">AI Usage This Month</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiUsageLimits.map((item) => {
              const Icon = item.icon;
              const percentage = Math.round((item.used / item.limit) * 100);
              return (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-muted-foreground">
                      {item.used}/{item.limit}
                    </span>
                  </div>
                  <Progress value={percentage} />
                </div>
              );
            })}
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/subscription">
                <BarChart3 className="h-4 w-4 mr-2" />
                View usage details
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
