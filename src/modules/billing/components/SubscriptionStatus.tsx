"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSubscription } from "../hooks/useSubscription";

export function SubscriptionStatus() {
  const { subscription, isLoading, cancelSub } = useSubscription();

  if (isLoading) return <div className="animate-pulse h-32 bg-muted rounded-lg" />;

  if (!subscription) {
    return (
      <Card>
        <CardHeader><CardTitle>Free Plan</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">You are on the Free plan. Upgrade to access unlimited AI generations.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Subscription</CardTitle>
        <Badge variant={subscription.status === "active" ? "success" : "warning"}>{subscription.status}</Badge>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <p>Plan: <strong>{subscription.plan.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</strong></p>
        <p>Amount: <strong>KSh {subscription.amount?.toLocaleString()}/month</strong></p>
        {subscription.currentPeriodEnd && <p>Renewal: {new Date(subscription.currentPeriodEnd.seconds * 1000).toLocaleDateString()}</p>}
        <Button variant="destructive" size="sm" onClick={() => cancelSub.mutate()} className="mt-4">
          Cancel Subscription
        </Button>
      </CardContent>
    </Card>
  );
}
