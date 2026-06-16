import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold text-primary-700">
            CBC Teachers Hub
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/pricing" className="hover:text-primary-500 transition-colors">Pricing</Link>
            <Link href="/resources" className="hover:text-primary-500 transition-colors">Resources</Link>
            <Link href="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">CBC Teachers Hub</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered tools for Kenyan CBC teachers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/pricing" className="hover:text-primary-500">Lesson Plans</Link></li>
                <li><Link href="/pricing" className="hover:text-primary-500">Exams</Link></li>
                <li><Link href="/pricing" className="hover:text-primary-500">Report Cards</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/resources" className="hover:text-primary-500">Resource Centre</Link></li>
                <li><Link href="/blog" className="hover:text-primary-500">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary-500">About</Link></li>
                <li><Link href="/contact" className="hover:text-primary-500">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CBC Teachers Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
