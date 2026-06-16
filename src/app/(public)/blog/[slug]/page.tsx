import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started with CBC Lesson Plans",
  description: "Learn how to create effective CBC-aligned lesson plans using AI",
};

export default function BlogPostPage() {
  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <Link href="/blog" className="text-sm text-primary-500 hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
      <h1 className="text-4xl font-bold mb-4">Getting Started with CBC Lesson Plans</h1>
      <p className="text-muted-foreground mb-8">January 15, 2026 &mdash; CBC Teachers Hub</p>
      <div className="prose dark:prose-invert max-w-none space-y-4">
        <p>
          Creating effective lesson plans aligned to the Competency-Based Curriculum (CBC) can be time-consuming. 
          With CBC Teachers Hub, you can generate comprehensive, KICD-aligned lesson plans in seconds.
        </p>
        <h2>What Makes a Great CBC Lesson Plan?</h2>
        <p>
          A CBC lesson plan should include clear learning outcomes, interactive activities that develop core competencies, 
          integration of Pertinent and Contemporary Issues (PCIs), and varied assessment methods.
        </p>
        <h2>Using the AI Lesson Plan Generator</h2>
        <ol>
          <li>Select the grade and learning area</li>
          <li>Choose the strand and sub-strand from the curriculum</li>
          <li>Set the lesson duration</li>
          <li>Toggle biblical integration if desired</li>
          <li>Choose English or Kiswahili output</li>
          <li>Click Generate</li>
        </ol>
        <p>
          The AI will generate a complete lesson plan with learning outcomes, introduction, development activities, 
          competency mapping, assessment methods, and differentiated learning suggestions.
        </p>
        <h2>Tips for Best Results</h2>
        <ul>
          <li>Be specific with your strand and sub-strand selection</li>
          <li>Review and customize the generated content to fit your class</li>
          <li>Save quality plans to your personal library for future use</li>
          <li>Use the export button to download as PDF for your lesson book</li>
        </ul>
      </div>
    </article>
  );
}
