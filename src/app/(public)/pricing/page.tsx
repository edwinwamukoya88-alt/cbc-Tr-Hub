import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose the right plan for your CBC teaching needs",
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your needs. All plans include access to our AI-powered CBC teaching tools.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free */}
        <div className="border border-border rounded-lg p-8">
          <h3 className="text-xl font-bold mb-2">Free</h3>
          <p className="text-4xl font-bold mb-1">KSh 0</p>
          <p className="text-sm text-muted-foreground mb-6">per month</p>
          <ul className="space-y-3 text-sm mb-8">
            <li className="flex items-center gap-2">20 Lesson Plans / month</li>
            <li className="flex items-center gap-2">5 Report Cards per class / month</li>
            <li className="flex items-center gap-2">3 Exams / month</li>
            <li className="flex items-center gap-2">2 Schemes of Work / month</li>
            <li className="flex items-center gap-2">30 Smart Search queries / month</li>
            <li className="flex items-center gap-2">5 Quality Checks / month</li>
          </ul>
        </div>
        {/* Teacher Pro */}
        <div className="border-2 border-primary-500 rounded-lg p-8 relative shadow-lg">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs px-4 py-1 rounded-full">Popular</span>
          <h3 className="text-xl font-bold mb-2">Teacher Pro</h3>
          <p className="text-4xl font-bold mb-1">KSh 500</p>
          <p className="text-sm text-muted-foreground mb-6">per month</p>
          <ul className="space-y-3 text-sm mb-8">
            <li className="flex items-center gap-2">Unlimited AI generations</li>
            <li className="flex items-center gap-2">Unlimited Smart Search</li>
            <li className="flex items-center gap-2">Unlimited Quality Checks</li>
            <li className="flex items-center gap-2">AI Quality & Originality Checker</li>
            <li className="flex items-center gap-2">Advanced PDF & Excel exports</li>
            <li className="flex items-center gap-2">Priority support</li>
          </ul>
        </div>
        {/* School */}
        <div className="border border-border rounded-lg p-8">
          <h3 className="text-xl font-bold mb-2">School</h3>
          <p className="text-4xl font-bold mb-1">KSh 5,000</p>
          <p className="text-sm text-muted-foreground mb-6">per month</p>
          <ul className="space-y-3 text-sm mb-8">
            <li className="flex items-center gap-2">Up to 50 teachers</li>
            <li className="flex items-center gap-2">All Teacher Pro features</li>
            <li className="flex items-center gap-2">School management dashboard</li>
            <li className="flex items-center gap-2">Student & parent portals</li>
            <li className="flex items-center gap-2">Dedicated account manager</li>
            <li className="flex items-center gap-2">Custom branding</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
