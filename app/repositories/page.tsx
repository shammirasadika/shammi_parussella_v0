import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, GitFork, Code2, Calendar } from "lucide-react"
import Link from "next/link"

const repositories = [
  {
    name: "shammi_parussella_v0",
    description: "Professional portfolio with Next.js 15, React 19, and MCP integration. Features sticky navigation, interactive demos, and comprehensive project showcase.",
    url: "https://github.com/shammirasadika/shammi_parussella_v0",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    topics: ["nextjs", "react", "typescript", "portfolio", "mcp"],
    lastUpdated: "2025-11-15",
    status: "active",
  },
  {
    name: "digital-twin-shammi",
    description: "AI-powered Digital Twin using RAG architecture with vector embeddings, conversation memory, and STAR-formatted professional profile. 24/7 production deployment.",
    url: "https://github.com/shammirasadika/digital-twin-shammi",
    demo: "https://digital-twin-vert-nu.vercel.app/",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    topics: ["rag", "ai", "vector-db", "ollama", "embeddings", "digital-twin"],
    lastUpdated: "2025-11-10",
    status: "production",
  },
  {
    name: "person-app-shammi",
    description: "Full-stack CRUD application with Prisma ORM, Neon Postgres, and Auth.js OAuth authentication. Role-based access control and protected routes.",
    url: "https://github.com/shammirasadika/person-app-shammi",
    demo: "https://person-search-neon.vercel.app/auth/signin?callbackUrl=%2F",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    topics: ["nextjs", "prisma", "postgresql", "authjs", "oauth", "crud"],
    lastUpdated: "2025-11-05",
    status: "production",
  },
  {
    name: "mcp-server-shammi",
    description: "Custom Model Context Protocol server enabling AI agents to perform CRUD operations. Integrates with Claude Desktop and VS Code.",
    url: "https://github.com/shammirasadika/mcp-server-shammi",
    demo: "https://rolldice-mcpserver-theta.vercel.app/",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    topics: ["mcp", "ai-agents", "claude", "typescript", "jsonrpc"],
    lastUpdated: "2025-11-03",
    status: "stable",
  },
  {
    name: "ai-agent-dev-setup-shammi",
    description: "Development environment setup repository with MCP server configurations (Rolldice, Bootcamp AI Agent, Calendar, GitHub) and workshop documentation.",
    url: "https://github.com/shammirasadika/ai-agent-dev-setup-shammi",
    stars: 0,
    forks: 0,
    language: "Markdown",
    topics: ["mcp", "development-environment", "claude-desktop", "vscode"],
    lastUpdated: "2025-10-28",
    status: "complete",
  },
]

const stats = {
  totalRepos: 5,
  totalCommits: 250,
  activeProjects: 2,
  productionDeployments: 2,
}

const technologies = [
  { name: "TypeScript", count: 4, color: "bg-blue-500" },
  { name: "Next.js", count: 3, color: "bg-cyan-500" },
  { name: "React", count: 3, color: "bg-blue-400" },
  { name: "Prisma", count: 1, color: "bg-indigo-500" },
  { name: "MCP Protocol", count: 3, color: "bg-purple-500" },
  { name: "AI/ML", count: 2, color: "bg-green-500" },
]

export default function GitHubPage() {
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
              GitHub Profile
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            AI Agent Developer Workshop Repositories & Contributions
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900">
            <a href="https://github.com/shammirasadika" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub Profile
            </a>
          </Button>
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-cyan-500/20 bg-cyan-500/5">
            <CardHeader>
              <CardTitle className="text-4xl text-cyan-400">{stats.totalRepos}</CardTitle>
              <CardDescription>Workshop Repositories</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-blue-500/20 bg-blue-500/5">
            <CardHeader>
              <CardTitle className="text-4xl text-blue-400">{stats.totalCommits}+</CardTitle>
              <CardDescription>Total Commits</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-green-500/20 bg-green-500/5">
            <CardHeader>
              <CardTitle className="text-4xl text-green-400">{stats.activeProjects}</CardTitle>
              <CardDescription>Active Projects</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-500/20 bg-purple-500/5">
            <CardHeader>
              <CardTitle className="text-4xl text-purple-400">{stats.productionDeployments}</CardTitle>
              <CardDescription>Live Deployments</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Technology Distribution */}
        <Card className="mb-12 border-border/40">
          <CardHeader>
            <CardTitle className="text-2xl">Technology Distribution</CardTitle>
            <CardDescription>Primary technologies across repositories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {technologies.map((tech) => (
                <div key={tech.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{tech.name}</span>
                    <span className="text-xs text-muted-foreground">{tech.count} projects</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className={`${tech.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${(tech.count / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Repositories */}
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Workshop Repositories</h2>
        <div className="space-y-6">
          {repositories.map((repo) => (
            <Card key={repo.name} className="border-border/40 hover:border-cyan-500/50 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-400 transition-colors"
                        >
                          {repo.name}
                        </a>
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          repo.status === "production"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : repo.status === "active"
                            ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                        }`}
                      >
                        {repo.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base mb-3">{repo.description}</CardDescription>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {repo.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Code2 className="w-4 h-4" />
                        <span>{repo.language}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Updated {new Date(repo.lastUpdated).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {repo.demo && (
                      <Button asChild size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                        <a href={repo.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Contribution Activity */}
        <Card className="mt-12 border-border/40">
          <CardHeader>
            <CardTitle className="text-2xl">Contribution Activity</CardTitle>
            <CardDescription>Workshop development timeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-muted-foreground">Week 1-2</div>
                <div className="flex-1 h-2 bg-cyan-500/30 rounded-full" />
                <span className="text-xs text-muted-foreground">Environment Setup & CV</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-muted-foreground">Week 3-4</div>
                <div className="flex-1 h-2 bg-cyan-500/50 rounded-full" />
                <span className="text-xs text-muted-foreground">Person App & MCP Server</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-muted-foreground">Week 5</div>
                <div className="flex-1 h-2 bg-cyan-500/40 rounded-full" />
                <span className="text-xs text-muted-foreground">Authentication & Security</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-muted-foreground">Week 6-8</div>
                <div className="flex-1 h-2 bg-cyan-500/70 rounded-full" />
                <span className="text-xs text-muted-foreground">Digital Twin RAG System</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-muted-foreground">Week 9</div>
                <div className="flex-1 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">Portfolio Integration (Active)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
