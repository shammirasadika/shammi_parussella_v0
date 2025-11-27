"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar, Users, Code2, Sparkles, ArrowRight, Layers } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const caseStudies = [
  {
    id: "digital-twin",
    title: "Digital Twin RAG System",
    subtitle: "AI-Powered Professional Assistant",
    summary: "Enterprise-grade RAG system with vector embeddings, conversation memory, and 24/7 production availability for recruiter interactions.",
    week: "6-8",
    category: "AI & ML",
    color: "from-purple-500 to-pink-500",
    thumbnail: "🤖",
    tags: ["Next.js", "RAG", "Upstash Vector", "Groq LLM", "TypeScript"],
    overview: "Enterprise-grade Digital Twin system using RAG architecture with 24/7 availability, professional STAR-formatted profile, and optimized for recruiter interactions.",
    problem: "Need for an intelligent AI assistant that can provide accurate, context-aware responses about professional experience while maintaining conversation history and providing proper citations.",
    solution: "Built a sophisticated RAG system with vector embeddings, conversation memory, and advanced retrieval strategies. Implemented 12-step methodology with STAR profile optimization.",
    architecture: {
      description: "RAG Architecture with Vector Search and LLM Integration",
      components: [
        "User Query → Query Processor → Intent Detection",
        "Vector Embeddings → Upstash Vector DB Search → Relevant Chunks",
        "Context Assembly → Ollama LLM → Response Generation",
        "Conversation Memory → Context Management → Citation System",
      ],
    },
    screenshots: [
      { title: "Chat Interface", description: "Clean, professional conversation UI with STAR-formatted responses" },
      { title: "Vector Search", description: "Semantic search retrieving relevant professional experience" },
      { title: "Citations", description: "Source attribution with document references" },
      { title: "Analytics", description: "Query patterns and response quality metrics" },
    ],
    technologies: ["Next.js 15", "TypeScript", "Upstash Vector", "Groq LLM", "RAG", "Embeddings", "Vercel"],
    features: [
      "Vector database with semantic search",
      "Multi-turn conversation with context memory",
      "STAR-formatted professional profile",
      "Advanced query processing and intent detection",
      "Hybrid search (vector + keyword)",
      "Citation generation with source attribution",
      "24/7 production deployment with monitoring",
      "Performance optimization (<3s response time)",
    ],
    challenges: [
      {
        issue: "Context retention across conversations",
        solution: "Implemented conversation memory system with sliding window context management",
      },
      {
        issue: "Response relevance and accuracy",
        solution: "Developed hybrid search with re-ranking and filtering strategies",
      },
      {
        issue: "Production scalability",
        solution: "Optimized chunking, caching, and deployed with comprehensive monitoring",
      },
    ],
    results: [
      ">99% uptime since deployment",
      "<3 second average response time",
      "Handles concurrent users efficiently",
      "Professional presentation for recruiters",
    ],
    github: "https://github.com/shammirasadika/Digital-Twin",
    demo: "https://digital-twin-vert-nu.vercel.app/",
    lessonsLearned: [
      "Importance of chunking strategy for retrieval quality",
      "Balance between context window size and performance",
      "Value of proper monitoring in production systems",
    ],
  },
  {
    id: "person-app",
    title: "Person Management System",
    subtitle: "Full-Stack CRUD Application",
    summary: "Production-ready full-stack app with Prisma ORM, Neon Postgres, OAuth authentication, and complete CRUD operations.",
    week: "3-5",
    category: "Full-Stack",
    color: "from-cyan-500 to-blue-500",
    thumbnail: "👥",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Auth.js", "OAuth"],
    overview: "Production-ready full-stack application with complete CRUD operations, Prisma ORM, Neon Postgres, and enterprise-grade Auth.js OAuth authentication.",
    problem: "Build a scalable, secure full-stack application demonstrating modern web development practices with database integration and user authentication.",
    solution: "Developed comprehensive Person App with Next.js 15, Prisma ORM, and Auth.js. Implemented protected routes, role-based access control, and production deployment.",
    architecture: {
      description: "Three-Tier Architecture with OAuth Authentication",
      components: [
        "Frontend → Next.js 15 + React 19 → Server Components",
        "API Layer → Next.js API Routes → Business Logic",
        "Database → Prisma ORM → Neon PostgreSQL",
        "Auth → Auth.js → OAuth Providers (Google, GitHub)",
      ],
    },
    screenshots: [
      { title: "Person List", description: "Paginated table with search and filter functionality" },
      { title: "Create Form", description: "Client and server-side validation with error handling" },
      { title: "OAuth Login", description: "Secure authentication with Google and GitHub" },
      { title: "Edit Interface", description: "Optimistic updates with real-time feedback" },
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Prisma ORM", "Neon Postgres", "Auth.js", "OAuth", "Vercel"],
    features: [
      "Full CRUD operations (Create, Read, Update, Delete)",
      "Prisma ORM with PostgreSQL database",
      "OAuth authentication (Google, GitHub)",
      "Protected routes and middleware",
      "Role-based access control (RBAC)",
      "Session management with secure cookies",
      "Form validation client and server-side",
      "Optimistic UI updates",
    ],
    challenges: [
      {
        issue: "Secure authentication implementation",
        solution: "Integrated Auth.js with OAuth providers and session-based authentication",
      },
      {
        issue: "Database schema design",
        solution: "Designed normalized schema with proper relationships and constraints",
      },
      {
        issue: "Protected route management",
        solution: "Implemented middleware for route protection and role validation",
      },
    ],
    results: [
      "Fully functional CRUD operations",
      "Secure authentication with 2 OAuth providers",
      "Role-based access protecting sensitive data",
      "Production-ready deployment",
    ],
    github: "https://github.com/shammirasadika/person-app-shammi",
    demo: "https://person-search-neon.vercel.app/auth/signin?callbackUrl=%2F",
    lessonsLearned: [
      "Importance of proper error handling in API routes",
      "Value of optimistic updates for UX",
      "Security best practices for authentication",
    ],
  },
  {
    id: "mcp-server",
    title: "Rolldice Pattern MCP Server",
    subtitle: "Model Context Protocol Implementation",
    summary: "Custom MCP server following the Rolldice pattern for AI agent tool calling, demonstrating protocol implementation and integration.",
    week: "4",
    category: "AI Infrastructure",
    color: "from-green-500 to-emerald-500",
    thumbnail: "🎲",
    tags: ["TypeScript", "MCP Protocol", "Node.js", "Claude", "JSON-RPC"],
    overview: "Implementation of the Rolldice pattern for Model Context Protocol (MCP) server, providing a foundation for AI agents to perform tool-based operations through standardized communication.",
    problem: "Need to understand and implement the MCP protocol pattern using the Rolldice example as a learning foundation for building custom MCP servers.",
    solution: "Built MCP server following the Rolldice pattern with TypeScript, implementing proper JSON-RPC communication, tool definitions, and client integration with Claude Desktop.",
    architecture: {
      description: "MCP Protocol with JSON-RPC Communication (Rolldice Pattern)",
      components: [
        "AI Agent (Claude) → MCP Client → Tool Discovery",
        "MCP Server → Tool Registry → Rolldice Function",
        "Tool Execution → Random Number Generation → Result",
        "Response Formatting → JSON Schema → Result to AI",
      ],
    },
    screenshots: [
      { title: "Claude Desktop", description: "MCP server connected with Rolldice tool available" },
      { title: "Tool Calling", description: "AI agent invoking rolldice tool with parameters" },
      { title: "JSON-RPC", description: "Request/response communication flow" },
      { title: "Server Output", description: "Logging and debugging information" },
    ],
    technologies: ["TypeScript", "Node.js", "MCP Protocol", "Claude Desktop", "JSON-RPC"],
    features: [
      "MCP protocol implementation following Rolldice pattern",
      "JSON-RPC 2.0 communication",
      "Tool definition with input schemas",
      "Claude Desktop integration",
      "Input validation and error handling",
      "Structured response formatting",
      "Server logging and monitoring",
    ],
    challenges: [
      {
        issue: "Understanding MCP protocol specification",
        solution: "Studied Rolldice pattern implementation and JSON-RPC standards",
      },
      {
        issue: "Tool schema and validation design",
        solution: "Followed MCP specification for proper tool interface definitions",
      },
      {
        issue: "Claude Desktop configuration",
        solution: "Set up proper config file and tested connection with debug logging",
      },
    ],
    results: [
      "Successfully implemented Rolldice MCP pattern",
      "Claude Desktop successfully connects",
      "Tool calling works as expected",
      "Foundation for custom MCP servers",
    ],
    github: "https://github.com/shammirasadika/mcp-server-shammi",
    demo: "https://rolldice-mcpserver-theta.vercel.app/",
    lessonsLearned: [
      "MCP protocol architecture and design patterns",
      "JSON-RPC communication fundamentals",
      "Importance of proper tool schema documentation",
    ],
  },
  {
    id: "portfolio",
    title: "Professional Portfolio",
    subtitle: "Next.js Portfolio with MCP Integration",
    summary: "Modern, responsive portfolio showcasing technical expertise with AI-powered navigation, MCP demonstrations, and comprehensive project presentation.",
    week: "2, 9",
    category: "Portfolio",
    color: "from-orange-500 to-red-500",
    thumbnail: "🎨",
    tags: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "MCP"],
    overview: "Modern, responsive portfolio built with Next.js 15 and React 19, featuring AI-powered navigation, MCP tool integration, and comprehensive project showcase.",
    problem: "Create professional portfolio that showcases technical expertise while integrating all workshop projects and demonstrating MCP capabilities.",
    solution: "Developed comprehensive portfolio with v0.dev-assisted design, sticky navigation, interactive demos, and 5 dedicated pages for complete project presentation.",
    architecture: {
      description: "Modern Next.js App Router Architecture",
      components: [
        "Frontend → React 19 Server Components → Streaming SSR",
        "Routing → Next.js App Router → Dynamic Pages",
        "Styling → Tailwind CSS + Shadcn UI → Design System",
        "Integration → MCP Demos + Live Projects → Interactive Features",
      ],
    },
    screenshots: [
      { title: "Landing Page", description: "Hero section with animated background and CTAs" },
      { title: "Project Showcase", description: "Grid of project cards with detailed case studies" },
      { title: "MCP Demos", description: "Interactive tool calling demonstrations" },
      { title: "Navigation", description: "Sticky header with smooth scroll and dropdown menu" },
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Shadcn UI", "MCP Integration", "Vercel"],
    features: [
      "Responsive design with Tailwind CSS",
      "Sticky navigation with active section tracking",
      "5 dedicated project pages",
      "MCP tool calling demonstrations",
      "Interactive project demos",
      "Professional branding system",
      "Performance optimized (Lighthouse >90)",
      "SEO optimized",
    ],
    challenges: [
      {
        issue: "Integrating multiple projects cohesively",
        solution: "Designed consistent navigation and branding across all pages",
      },
      {
        issue: "MCP tool integration in portfolio",
        solution: "Created dedicated page demonstrating live MCP functionality",
      },
      {
        issue: "Performance optimization",
        solution: "Implemented lazy loading, image optimization, and code splitting",
      },
    ],
    results: [
      "Professional, recruiter-ready portfolio",
      "All projects integrated seamlessly",
      "MCP functionality demonstrated",
      "High performance metrics",
    ],
    github: "https://github.com/shammirasadika/shammi_parussella_v0",
    demo: "https://v0-animated-hero-section-teal.vercel.app/",
    lessonsLearned: [
      "Importance of consistent design system",
      "Value of performance optimization",
      "User experience in portfolio presentation",
    ],
  },
]

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  
  const selectedCase = selectedProject ? caseStudies.find(p => p.id === selectedProject) : null

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <section className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-flex items-center">
            ← Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore technical case studies demonstrating advanced problem-solving and engineering skills across AI, full-stack, and cloud projects.
          </p>
        </div>
      </section>

      {/* Project Cards Grid */}
      {!selectedCase && (
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {caseStudies.map((project) => (
              <Card 
                key={project.id} 
                className="border-border/40 hover:border-cyan-500/50 transition-all cursor-pointer group overflow-hidden"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Thumbnail */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-8xl opacity-20 absolute">{project.thumbnail}</div>
                  <div className="text-6xl z-10 group-hover:scale-110 transition-transform">{project.thumbnail}</div>
                  {/* Removed week badge for recruiter-friendly view */}
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm mb-3">
                    {project.subtitle}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>
                </CardHeader>
                
                <CardContent>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 group">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
      {/* Detailed Case Study View */}
      {selectedCase && (
        <section className="container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedProject(null)}
            className="mb-6"
          >
            ← Back to Projects
          </Button>

          <Card className="border-border/40 overflow-hidden">
            {/* Project Header */}
            <div className={`bg-gradient-to-r ${selectedCase.color} p-12 text-center relative overflow-hidden`}>
              <div className="text-9xl opacity-10 absolute inset-0 flex items-center justify-center">{selectedCase.thumbnail}</div>
              <div className="relative z-10">
                <Badge variant="outline" className="bg-black/50 backdrop-blur text-white border-white/30 mb-4">
                  {selectedCase.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{selectedCase.title}</h1>
                <p className="text-xl text-white/90 mb-6">{selectedCase.subtitle}</p>
                <div className="flex items-center justify-center gap-3">
                  <Button asChild variant="secondary" size="lg">
                    <a href={selectedCase.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {selectedCase.demo !== "#" && (
                    <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                      <a href={selectedCase.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <CardContent className="pt-8">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-7 h-7 text-cyan-400" />
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{selectedCase.overview}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-red-400">❌ Problem Statement</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedCase.problem}</p>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-green-400">✅ Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedCase.solution}</p>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-7 h-7 text-cyan-400" />
                  Architecture
                </h2>
                <div className="bg-muted/30 border border-border/40 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">
                    {selectedCase.architecture.description}
                  </h3>
                  <div className="space-y-4">
                    {selectedCase.architecture.components.map((component, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1 bg-background/50 rounded p-3 font-mono text-sm">
                          {component}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  <Code2 className="w-7 h-7 text-cyan-400" />
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {selectedCase.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
                      <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshots Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Screenshots & Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedCase.screenshots.map((screenshot, idx) => (
                    <div key={idx} className="bg-muted/30 border border-border/40 rounded-lg overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-6xl">
                        📸
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-foreground mb-2">{screenshot.title}</h4>
                        <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenges */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Technical Challenges & Solutions</h2>
                <div className="space-y-4">
                  {selectedCase.challenges.map((challenge, idx) => (
                    <div key={idx} className="bg-muted/30 border-l-4 border-cyan-500 p-6 rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground mb-2 text-lg">
                            🔴 Challenge: {challenge.issue}
                          </p>
                          <p className="text-muted-foreground">
                            🟢 Solution: {challenge.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results & Impact */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCase.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                      <span className="text-green-400 text-xl mt-0.5">●</span>
                      <span className="text-sm text-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lessons Learned */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Lessons Learned</h2>
                <div className="space-y-3">
                  {selectedCase.lessonsLearned.map((lesson, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
                      <span className="text-purple-400 text-xl mt-0.5">→</span>
                      <span className="text-sm text-foreground">{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-6 border-t border-border/40">
                <Button asChild size="lg" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  <a href={selectedCase.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                {selectedCase.demo !== "#" && (
                  <Button asChild size="lg" variant="outline" className="flex-1">
                    <a href={selectedCase.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </section>
      )}
    </main>
  )
}
