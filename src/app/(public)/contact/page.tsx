import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the CBC Teachers Hub team",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-muted-foreground mb-8">
        Have questions or feedback? We would love to hear from you. Send us a message and we will respond within 24 hours.
      </p>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input className="w-full border border-border rounded-md px-3 py-2 bg-background" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="w-full border border-border rounded-md px-3 py-2 bg-background" placeholder="you@school.ac.ke" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <input className="w-full border border-border rounded-md px-3 py-2 bg-background" placeholder="How can we help?" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <textarea className="w-full border border-border rounded-md px-3 py-2 bg-background min-h-[150px]" placeholder="Tell us more..." />
        </div>
        <button type="submit" className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600">
          Send Message
        </button>
      </form>
    </div>
  );
}
