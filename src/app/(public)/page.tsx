import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, PenTool, BarChart3, BookOpen, Search, ShieldCheck } from "lucide-react";

const features = [
  { icon: FileText, title: "AI Lesson Plans", description: "Generate CBC-aligned lesson plans in seconds" },
  { icon: PenTool, title: "Exam Generator", description: "Create exams with marking schemes and Bloom's taxonomy" },
  { icon: BarChart3, title: "Report Cards", description: "Advanced AI report cards with competency mapping" },
  { icon: BookOpen, title: "Schemes of Work", description: "Termly schemes aligned to KICD curriculum" },
  { icon: Search, title: "Smart Search", description: "AI-powered search across thousands of resources" },
  { icon: ShieldCheck, title: "Quality Checker", description: "AI ensures every resource meets quality standards" },
];

export default function LandingPage() {
  return (
    <div>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            AI-Powered Tools for{" "}
            <span className="text-primary-500">CBC Teachers</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Generate lesson plans, exams, schemes of work, and report cards aligned to KICD standards.
            Save hours every week with AI built for the Competency-Based Curriculum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="text-base px-8">Get Started Free</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="text-base px-8">View Pricing</Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">No credit card required. Free plan includes 20 lesson plans.</p>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Teach CBC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary-500 mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <p className="text-3xl font-bold">KSh 0</p>
                <CardDescription>Per month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>20 Lesson Plans</li>
                  <li>5 Report Cards</li>
                  <li>30 Smart Searches</li>
                  <li>Basic exports</li>
                </ul>
                <Link href="/signup" className="mt-6 block">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="relative border-primary-500 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs px-3 py-1 rounded-full">Popular</div>
              <CardHeader>
                <CardTitle>Teacher Pro</CardTitle>
                <p className="text-3xl font-bold">KSh 500</p>
                <CardDescription>Per month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Unlimited AI generations</li>
                  <li>Unlimited Smart Search</li>
                  <li>AI Quality Checker</li>
                  <li>Advanced PDF exports</li>
                </ul>
                <Link href="/signup" className="mt-6 block">
                  <Button className="w-full">Subscribe Now</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>School</CardTitle>
                <p className="text-3xl font-bold">KSh 5,000</p>
                <CardDescription>Per month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Up to 50 teachers</li>
                  <li>All Pro features</li>
                  <li>School management</li>
                  <li>Priority support</li>
                </ul>
                <Link href="/signup" className="mt-6 block">
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
