"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useSubscription } from "../hooks/useSubscription";

interface PricingCardProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({ id, name, price, currency, period, features, highlighted }: PricingCardProps) {
  const { createCheckout } = useSubscription();

  return (
    <Card className={`relative ${highlighted ? "border-primary-500 shadow-lg" : ""}`}>
      {highlighted && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs px-4 py-1 rounded-full">Popular</div>}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <p className="text-3xl font-bold">{currency === "KES" ? "KSh " : ""}{price.toLocaleString()}</p>
        <CardDescription>per {period}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" /> {f}
            </li>
          ))}
        </ul>
        <Button className="w-full" variant={highlighted ? "default" : "outline"} onClick={() => createCheckout.mutate(id)} disabled={createCheckout.isPending}>
          {createCheckout.isPending ? "Redirecting..." : id === "free" ? "Get Started" : "Subscribe"}
        </Button>
      </CardContent>
    </Card>
  );
}
