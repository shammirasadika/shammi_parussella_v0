
import React from "react";

export default function CareerPlanPage() {
  return (
    <section className="container mx-auto py-16 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center">🎯 Career Development Plan</h1>

      {/* Roadmap */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Roadmap: Full-Stack Developer → AI Engineering Tech Lead</h2>
        <p className="mb-2">A focused 5-year strategy aligned with my goal to lead teams and build enterprise-grade AI solutions.</p>
      </div>

      {/* Career Vision */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🌟 Career Vision</h2>
        <p>To become a Tech Lead specializing in AI-powered software solutions, combining advanced full-stack development with intelligent automation. I aim to deliver impactful digital products, guide engineering teams, and mentor future innovators while pushing boundaries in applied AI.</p>
      </div>

      {/* Core Values */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🔑 Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-bold">Excellence</div>
            <div className="text-muted-foreground text-sm">Master modern technologies and architecture</div>
          </div>
          <div>
            <div className="font-bold">Innovation</div>
            <div className="text-muted-foreground text-sm">Drive AI-enhanced product capabilities</div>
          </div>
          <div>
            <div className="font-bold">Leadership</div>
            <div className="text-muted-foreground text-sm">Support and uplift engineering teams</div>
          </div>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🚀 Career Timeline</h2>
        <div className="space-y-6">
          {/* Phase 1 */}
          <div>
            <div className="font-bold text-cyan-600">🔹 Phase 1 — 2025: Establish Strong Engineering Foundation</div>
            <div className="text-muted-foreground">Role Target: Full-Stack Developer / Software Engineer</div>
            <ul className="list-disc pl-6 mb-2">
              <li>Next.js, React, TypeScript, Node.js</li>
              <li>.NET Core + Azure Cloud</li>
              <li>API design & secure architectures</li>
              <li>MCP-enabled AI automation features</li>
            </ul>
            <div className="font-semibold">Goals:</div>
            <ul className="list-disc pl-6">
              <li>Secure a sponsored Software/AI Developer role in Australia</li>
              <li>Contribute to 5+ production features or automation workflows</li>
              <li>Present AI portfolio and Digital Twin to employers</li>
            </ul>
          </div>
          {/* Phase 2 */}
          <div>
            <div className="font-bold text-purple-600">🔹 Phase 2 — 2026–2027: Transition toward AI Engineering</div>
            <div className="text-muted-foreground">Role Target: AI/ML Engineer / Intelligent Automation Developer</div>
            <ul className="list-disc pl-6 mb-2">
              <li>RAG architecture & Vector DBs</li>
              <li>Model integration and deployment</li>
              <li>AI agents for enterprise workflows</li>
              <li>Azure & cloud automation</li>
            </ul>
            <div className="font-semibold">Goals:</div>
            <ul className="list-disc pl-6">
              <li>Lead small AI-powered feature deliveries</li>
              <li>Mentor junior engineers</li>
              <li>Publish technical content (articles/presentations)</li>
            </ul>
          </div>
          {/* Phase 3 */}
          <div>
            <div className="font-bold text-yellow-600">🔹 Phase 3 — 2028–2029: Leadership & Architecture</div>
            <div className="text-muted-foreground">Role Target: Senior Software Engineer → Tech Lead</div>
            <ul className="list-disc pl-6 mb-2">
              <li>System design & scalable architecture</li>
              <li>Cross-functional leadership</li>
              <li>AI-driven digital transformation</li>
              <li>Code quality + process improvements</li>
            </ul>
            <div className="font-semibold">Goals:</div>
            <ul className="list-disc pl-6">
              <li>Lead end-to-end AI solution implementations</li>
              <li>Drive engineering best practices</li>
              <li>Represent engineering team in strategy discussions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Skill Development Plan */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🔧 Key Skill Development Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="font-bold mb-1">Technical Mastery</div>
            <ul className="list-disc pl-6">
              <li>Full-stack development: Next.js, React, TypeScript, Node.js</li>
              <li>.NET Core & Azure Cloud engineering</li>
              <li>API design, security, and integration</li>
              <li>AI/ML: RAG architecture, Vector DBs, model deployment</li>
              <li>Automation: MCP-enabled workflows, agent reliability</li>
              <li>DevOps: Azure DevOps, CI/CD pipelines</li>
              <li>Database optimization & performance tuning</li>
              <li>Distributed systems & microservices</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-1">Leadership Growth</div>
            <ul className="list-disc pl-6">
              <li>Architecture reviews & technical decision-making</li>
              <li>Mentoring and upskilling teammates</li>
              <li>Stakeholder communication & conflict resolution</li>
              <li>Agile project ownership and delivery excellence</li>
              <li>Cross-functional team leadership</li>
              <li>Technical content creation & presentations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🏆 Milestones</h2>
        <table className="w-full text-left border border-border rounded-lg overflow-hidden">
          <thead className="bg-muted">
            <tr>
              <th className="p-2">Year</th>
              <th className="p-2">Target Achievement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">2025</td>
              <td className="p-2">First developer role + AI product contributions</td>
            </tr>
            <tr>
              <td className="p-2">2026</td>
              <td className="p-2">Ownership of AI automation components</td>
            </tr>
            <tr>
              <td className="p-2">2027</td>
              <td className="p-2">Become a key technical decision-maker</td>
            </tr>
            <tr>
              <td className="p-2">2028</td>
              <td className="p-2">Lead a development team → Tech Lead level</td>
            </tr>
            <tr>
              <td className="p-2">2029</td>
              <td className="p-2">Recognized expert in enterprise AI innovation</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Current Action Plan */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📌 Current Action Plan — Next 30 Days</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="font-bold mb-1">Job Search Execution</div>
            <ul className="list-disc pl-6">
              <li>Apply to 10+ roles weekly</li>
              <li>Tailor resume for sponsorship-friendly job postings</li>
              <li>Strengthen GitHub with clean case-study documentation</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-1">Networking Strategy</div>
            <ul className="list-disc pl-6">
              <li>Connect with 5+ recruiters/engineers daily on LinkedIn</li>
              <li>Attend local Melbourne tech meetups (Flutter, React, AI, Azure)</li>
              <li>Share AI demos regularly to increase visibility</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-1">Skills Building</div>
            <ul className="list-disc pl-6">
              <li>Finalize shammi.dev portfolio & deploy to Vercel</li>
              <li>Improve AI agent reliability and evaluation metrics</li>
              <li>Continue Azure certification path (AZ-104 → AZ-400 → AI-102 next)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Driving Mindset */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">💡 Driving Mindset</h2>
        <blockquote className="italic text-lg text-center text-muted-foreground">“Lead through innovation. Build through learning. Grow through impact.”</blockquote>
      </div>
    </section>
  );
}
