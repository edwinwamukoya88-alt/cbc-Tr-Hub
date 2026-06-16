import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
export const metadata: Metadata = { title: "Report Cards" };
export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Report Cards</h2>
        <Button asChild>
          <Link href="/report-cards/new">
            <Plus className="h-4 w-4 mr-2" />
            New Report Card
          </Link>
        </Button>
      </div>
      <p className="text-muted-foreground">Generate termly CBC report cards. Feature coming soon.</p>
    </div>
  );
}
