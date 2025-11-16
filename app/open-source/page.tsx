import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Github, Star, GitPullRequest, Code, BookOpen, Target, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function OpenSourcePage() {
  const contributionPlan = {
    phases: [
      {
        phase: "Phase 1: Foundation",
        timeline: "Months 1-2",
        goals: [
          "Familiarize with open-source contribution workflows",
          "Make first 5 contributions (documentation, bug fixes)",
          "Build relationships with project maintainers",
          "Understand code review processes",
        ],
      },
      {
        phase: "Phase 2: Regular Contributions",
        timeline: "Months 3-6",
        goals: [
          "Contribute code features to 3+ projects",
          "Participate in issue discussions and help others",
          "Review pull requests from other contributors",
          "Build reputation in selected communities",
        ],
      },
      {
        phase: "Phase 3: Leadership",
        timeline: "Months 6-12",
        goals: [
          "Become maintainer or core contributor in 1-2 projects",
          "Mentor new contributors",
          "Lead feature implementations",
          "Present at project meetings or conferences",
        ],
      },
    ],
  }

  const targetProjects = [
    {
      category: "AI & Machine Learning",
      projects: [
        {
          name: "LangChain",
          description: "Building applications with LLMs through composability",
          reason: "Aligns with RAG and AI agent development experience",
          firstSteps: ["Documentation improvements", "Example applications", "Integration guides"],
        },
        {
          name: "Ollama",
          description: "Get up and running with large language models locally",
          reason: "Used in Digital Twin project, familiar with the ecosystem",
          firstSteps: ["Model documentation", "Usage examples", "Community support"],
        },
      ],
    },
    {
      category: "Web Development",
      projects: [
        {
          name: "Next.js",
          description: "React framework for production",
          reason: "Core technology in portfolio, deep understanding of the framework",
          firstSteps: ["Documentation updates", "Bug fixes", "Example applications"],
        },
        {
          name: "Vercel AI SDK",
          description: "Build AI-powered applications with React and Next.js",
          reason: "Integrates with AI work, relevant to career goals",
          firstSteps: ["Examples and tutorials", "Integration guides", "Bug reports"],
        },
      ],
    },
    {
      category: "Developer Tools",
      projects: [
        {
          name: "Model Context Protocol (MCP)",
          description: "Protocol for AI model context sharing",
          reason: "Developed custom MCP server, understand the protocol deeply",
          firstSteps: ["Server examples", "Documentation", "Community tools"],
        },
        {
          name: "Prisma",
          description: "Next-generation ORM for Node.js and TypeScript",
          reason: "Used extensively in Person App, familiar with ORM patterns",
          firstSteps: ["Documentation", "Adapter contributions", "Bug fixes"],
        },
      ],
    },
  ]

  const contributionTypes = [
    {
      type: "Documentation",
      icon: BookOpen,
      color: "text-cyan-400",
      description: "Improve READMEs, guides, and API documentation",
      examples: ["Fix typos and clarify instructions", "Add missing examples", "Create tutorials"],
    },
    {
      type: "Bug Fixes",
      icon: Code,
      color: "text-blue-400",
      description: "Fix issues and improve code quality",
      examples: ["Resolve GitHub issues", "Fix edge cases", "Improve error handling"],
    },
    {
      type: "Features",
      icon: Star,
      color: "text-purple-400",
      description: "Implement new functionality and enhancements",
      examples: ["Add requested features", "Optimize performance", "Extend capabilities"],
    },
    {
      type: "Community Support",
      icon: GitPullRequest,
      color: "text-green-400",
      description: "Help other contributors and users",
      examples: ["Answer questions", "Review PRs", "Triage issues"],
    },
  ]

  const initialContributions = [
    {
      project: "First-Timers-Only Projects",
      status: "planned",
      contribution: "Start with beginner-friendly issues labeled 'good first issue' or 'help wanted'",
      timeline: "Week 1-2",
    },
    {
      project: "Documentation Improvements",
      status: "planned",
      contribution: "Fix typos, improve clarity, add examples in projects I've used",
      timeline: "Week 2-4",
    },
    {
      project: "Bug Fixes in MCP Ecosystem",
      status: "planned",
      contribution: "Address issues in MCP server implementations or documentation",
      timeline: "Month 2",
    },
    {
      project: "Next.js Examples",
      status: "planned",
      contribution: "Create example applications showcasing AI integration patterns",
      timeline: "Month 3",
    },
  ]

  const openSourceValues = [
    "Give back to the community that helped me learn and grow",
    "Learn from experienced developers through code reviews",
    "Build a reputation in the developer community",
    "Improve my coding skills through diverse projects",
    "Network with talented developers worldwide",
    "Make technology more accessible and better documented",
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "in-progress":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      case "planned":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <section className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-flex items-center">
            ← Back to Portfolio
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Open Source Contributions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-2">Giving back to the developer community</p>
              <p className="text-sm text-muted-foreground">Strategic plan for meaningful open-source engagement</p>
            </div>
            <Button asChild variant="outline">
              <a href="https://github.com/shammirasadika" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Why Open Source */}
        <Card className="mb-12 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="w-6 h-6 text-cyan-400" />
              Why Open Source Matters to Me
            </CardTitle>
            <CardDescription>My motivation for contributing to open-source projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {openSourceValues.map((value, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-cyan-400 text-lg mt-0.5">✓</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Contribution Plan */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              12-Month Contribution Plan
            </span>
          </h2>
          <div className="space-y-6">
            {contributionPlan.phases.map((phase, idx) => (
              <Card key={idx} className="border-border/40">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{phase.phase}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {phase.timeline}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.goals.map((goal, goalIdx) => (
                      <li key={goalIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Target Projects */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Target Projects
            </span>
          </h2>
          <div className="space-y-8">
            {targetProjects.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-cyan-400" />
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.projects.map((project, projectIdx) => (
                    <Card key={projectIdx} className="border-border/40">
                      <CardHeader>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-semibold mb-2 text-cyan-400">Why This Project:</p>
                            <p className="text-sm text-muted-foreground">{project.reason}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-2">First Steps:</p>
                            <ul className="space-y-1">
                              {project.firstSteps.map((step, stepIdx) => (
                                <li key={stepIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-cyan-400 mt-1">•</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contribution Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contribution Types
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributionTypes.map((type, idx) => {
              const Icon = type.icon
              return (
                <Card key={idx} className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${type.color}`} />
                      {type.type}
                    </CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5">
                      {type.examples.map((example, exampleIdx) => (
                        <li key={exampleIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className={`${type.color} mt-0.5`}>•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Initial Contributions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Initial Contributions Roadmap
            </span>
          </h2>
          <div className="space-y-4">
            {initialContributions.map((contribution, idx) => (
              <Card key={idx} className="border-border/40">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg">{contribution.project}</CardTitle>
                        <Badge variant="outline" className={`text-xs ${getStatusColor(contribution.status)}`}>
                          {contribution.status.toUpperCase()}
                        </Badge>
                      </div>
                      <CardDescription>{contribution.contribution}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs ml-4">
                      {contribution.timeline}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <Card className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
          <CardHeader>
            <CardTitle className="text-2xl">Open Source Commitment</CardTitle>
            <CardDescription>My pledge to the developer community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  I commit to being an active and positive member of the open-source community. I will contribute my
                  time, skills, and energy to projects that align with my values and expertise, with the goal of making
                  software better for everyone.
                </p>
                <p className="mt-4">
                  <strong className="text-foreground">Specific Commitments:</strong>
                </p>
                <ul className="space-y-2 mt-2">
                  <li>Make at least 1 meaningful contribution per week (code, documentation, or support)</li>
                  <li>Follow project guidelines and community codes of conduct</li>
                  <li>Respond constructively to feedback and iterate on contributions</li>
                  <li>Help newcomers and create a welcoming environment</li>
                  <li>Prioritize quality over quantity in all contributions</li>
                  <li>Share learnings and insights with the broader community</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-border/40">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold mb-1">Signed by:</p>
                    <p className="text-lg font-bold text-cyan-400">Shammi Parussella</p>
                    <p className="text-xs text-muted-foreground">AI Agent Developer</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Date:</p>
                    <p className="text-sm font-semibold">November 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
