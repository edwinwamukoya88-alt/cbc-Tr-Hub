import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, guides, and updates for CBC teachers in Kenya",
};

const posts = [
  { slug: "getting-started-with-cbc-lesson-plans", title: "Getting Started with CBC Lesson Plans", excerpt: "Learn how to create effective CBC-aligned lesson plans using AI.", date: "2026-01-15", author: "CBC Teachers Hub" },
  { slug: "mastering-cbc-report-cards", title: "Mastering CBC Report Cards", excerpt: "A complete guide to generating comprehensive report cards with competency mapping.", date: "2026-01-10", author: "CBC Teachers Hub" },
  { slug: "ai-in-kenyan-classrooms", title: "AI in Kenyan Classrooms: A Teacher's Guide", excerpt: "How AI is transforming teaching in Kenya and what it means for you.", date: "2026-01-05", author: "CBC Teachers Hub" },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">CBC Teachers Blog</h1>
      <p className="text-muted-foreground mb-8">Tips, guides, and insights for Kenyan CBC educators</p>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{new Date(post.date).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })} &mdash; {post.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
