import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about CBC Teachers Hub - our mission, team, and vision for Kenyan CBC education",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About CBC Teachers Hub</h1>
      <div className="prose dark:prose-invert max-w-none space-y-4">
        <p>
          CBC Teachers Hub is an AI-powered platform designed specifically for Kenyan teachers implementing the 
          Competency-Based Curriculum (CBC). We understand the challenges teachers face — from creating lesson plans 
          aligned to KICD standards to generating meaningful report cards for every learner.
        </p>
        <h2>Our Mission</h2>
        <p>
          To empower every CBC teacher with AI tools that save time, improve teaching quality, and enhance learner 
          outcomes across Kenya.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>AI-powered lesson plan generation aligned to KICD curriculum</li>
          <li>Exam and assessment creation with Bloom's taxonomy integration</li>
          <li>Advanced report card generator with CBC competency mapping</li>
          <li>Schemes of work for termly planning</li>
          <li>Resource Centre with AI-powered smart search</li>
          <li>AI Quality Checker for content integrity</li>
        </ul>
        <h2>Our Team</h2>
        <p>
          We are a team of Kenyan educators, software engineers, and AI specialists passionate about transforming 
          education through technology. With years of experience in the Kenyan education system, we understand 
          what teachers need to succeed.
        </p>
      </div>
    </div>
  );
}
