import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Github, ExternalLink, Calendar, Target, BookOpen } from "lucide-react"
import Link from "next/link"

export default function JourneyPage() {
  const journey = [
    {
      week: 1,
      title: "Development Environment Setup",
      status: "completed",
      description: "MCP server integration with Claude Desktop, VS Code setup, GitHub Copilot configuration",
      repository: "ai-agent-dev-setup-shammi",
      dueDate: "End of Week 1",
      keyAchievements: [
        "Connected 4 MCP servers (Rolldice, Bootcamp AI Agent, Calendar, GitHub)",
        "Configured development environment",
        "500-word reflection on AI Agent Developer mindset",
      ],
    },
    {
      week: 2,
      title: "Next.js CV Website",
      status: "completed",
      description: "AI-generated portfolio website using Next.js 15, React 19, and v0.dev",
      repository: "shammi_parussella_v0",
      liveUrl: "https://v0-animated-hero-section-teal.vercel.app/",
      dueDate: "End of Week 2",
      keyAchievements: [
        "Deployed responsive CV website on Vercel",
        "Implemented modern design with Tailwind CSS",
        "Created Hero, About, Experience, Skills, Projects, Education, Contact sections",
      ],
    },
    {
      week: 3,
      title: "Full-Stack Person App",
      status: "completed",
      description: "Production-ready CRUD application with Prisma ORM and Vercel Neon Postgres",
      repository: "person-app-shammi",
      dueDate: "End of Week 3",
      keyAchievements: [
        "Implemented full CRUD operations",
        "Integrated Prisma ORM with PostgreSQL",
        "Built API routes and database schema",
      ],
    },
    {
      week: 4,
      title: "Custom MCP Server",
      status: "completed",
      description: "MCP server development enabling AI agents to perform CRUD operations",
      repository: "mcp-server-shammi",
      dueDate: "End of Week 4",
      keyAchievements: [
        "Developed custom MCP server with TypeScript",
        "Exposed 4 CRUD tools/functions",
        "Integrated with Claude Desktop and VS Code",
      ],
    },
    {
      week: 5,
      title: "Authentication & Security",
      status: "completed",
      description: "Auth.js OAuth implementation with enterprise-grade session management",
      repository: "person-app-shammi",
      dueDate: "End of Week 5",
      keyAchievements: [
        "Implemented OAuth with Google and GitHub",
        "Added protected routes and middleware",
        "Secured API endpoints with role-based access",
      ],
    },
    {
      week: 6,
      title: "Digital Twin RAG Foundation",
      status: "completed",
      description: "RAG system foundation with vector embeddings and STAR-formatted profile",
      repository: "digital-twin-shammi",
      dueDate: "End of Week 6",
      keyAchievements: [
        "Set up vector database and embeddings",
        "Created STAR-formatted professional profile",
        "Implemented document processing pipeline",
      ],
    },
    {
      week: 7,
      title: "Digital Twin Advanced Features",
      status: "completed",
      description: "Enhanced RAG with conversation memory and advanced query processing",
      repository: "digital-twin-shammi",
      dueDate: "End of Week 7",
      keyAchievements: [
        "Added conversation context and memory",
        "Implemented advanced retrieval strategies",
        "Built chat interface with citations",
      ],
    },
    {
      week: 8,
      title: "Digital Twin Production Deployment",
      status: "completed",
      description: "24/7 enterprise deployment with monitoring and optimization",
      repository: "digital-twin-shammi",
      liveUrl: "https://digital-twin-vert-nu.vercel.app",
      dueDate: "End of Week 8",
      keyAchievements: [
        "Deployed to production with 24/7 availability",
        "Implemented monitoring and error tracking",
        "Optimized for recruiter interactions",
      ],
    },
    {
      week: 9,
      title: "Portfolio Integration & MCP Enhancement",
      status: "in-progress",
      description: "Comprehensive integrated portfolio with MCP tool calling across all projects",
      repository: "shammi_parussella_v0",
      dueDate: "End of Week 9",
      keyAchievements: [
        "Create 5 required pages (/projects, /mcp-integration, /github, /demo, /professional)",
        "Integrate MCP tool calling functionality",
        "Develop 3+ technical case studies",
        "Implement professional branding system",
      ],
      requirements: [
        "/projects - Projects showcase with filtering",
        "/mcp-integration - MCP tool demonstrations",
        "/github - Repository analysis",
        "/demo - Interactive demos",
        "/professional - Branding & design system",
      ],
    },
    {
      week: 10,
      title: "Final Showcase & Professional Launch",
      status: "upcoming",
      description: "20-minute industry presentation and career development plan",
      dueDate: "End of Week 10",
      keyAchievements: [
        "Prepare 20-minute technical presentation",
        "Update LinkedIn and GitHub profiles",
        "Create career development plan",
        "Establish professional network presence",
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "in-progress":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      case "upcoming":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-400" />
      case "in-progress":
        return <Target className="w-5 h-5 text-cyan-400 animate-pulse" />
      default:
        return <Circle className="w-5 h-5 text-gray-400" />
    }
  }

  const completedCount = journey.filter((d) => d.status === "completed").length
  const totalCount = journey.length

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <section className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-flex items-center">
                ← Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Weekly Journey
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                AI Agent Developer Workshop - 10 Week Program
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <a href="/WEEKLY_DELIVERABLES.md" download>
                <BookOpen className="w-5 h-5 mr-2" />
                Download Full Spec
              </a>
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedCount} / {totalCount} Completed
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-cyan-500/20 bg-cyan-500/5">
            <CardHeader>
              <CardTitle className="text-cyan-400">Cycle 1: Weeks 1-4</CardTitle>
              <CardDescription>Development Foundations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Environment setup, Next.js mastery, full-stack Person App, and MCP server development
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-blue-500/5">
            <CardHeader>
              <CardTitle className="text-blue-400">Cycle 2: Weeks 5-8</CardTitle>
              <CardDescription>Advanced AI Integration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Authentication, security, and advanced Digital Twin RAG system with production deployment
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-500/20 bg-purple-500/5">
            <CardHeader>
              <CardTitle className="text-purple-400">Cycle 3: Weeks 9-10</CardTitle>
              <CardDescription>Portfolio Excellence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Portfolio integration, MCP tool enhancement, and professional showcase presentation
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Journey List */}
        <div className="space-y-6">
          {journey.map((item) => (
            <Card
              key={item.week}
              className={`border-2 transition-all hover:shadow-lg ${
                item.status === "in-progress" ? "border-cyan-500/50 bg-cyan-500/5" : "border-border/40"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusIcon(item.status)}
                      <Badge variant="outline" className="text-xs">
                        Week {item.week}
                      </Badge>
                      <Badge variant="outline" className={`text-xs ${getStatusColor(item.status)}`}>
                        {item.status.replace("-", " ").toUpperCase()}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {item.repository && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={`https://github.com/shammirasadika/${item.repository}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {item.liveUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Due: {item.dueDate}</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-1.5">
                      {item.keyAchievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.requirements && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-cyan-400">Week 9 Requirements:</h4>
                      <ul className="space-y-1.5">
                        {item.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">→</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <Card className="mt-12 border-border/40">
          <CardHeader>
            <CardTitle className="text-2xl">Technology Stack</CardTitle>
            <CardDescription>Core technologies used throughout the program</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-cyan-400">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js 15</Badge>
                  <Badge variant="secondary">React 19</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-400">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">API Routes</Badge>
                  <Badge variant="secondary">Prisma ORM</Badge>
                  <Badge variant="secondary">Auth.js</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-400">Database & AI</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Neon Postgres</Badge>
                  <Badge variant="secondary">Upstash Vector</Badge>
                  <Badge variant="secondary">RAG Systems</Badge>
                  <Badge variant="secondary">Groq LLM</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-400">Tools & Deployment</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MCP Protocol</Badge>
                  <Badge variant="secondary">Claude Desktop</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">GitHub Copilot</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
