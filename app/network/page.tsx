import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Linkedin, Github, Mail, MessageSquare, UserPlus, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function NetworkPage() {
  const connections = {
    mentors: [
      {
        name: "Workshop Instructor",
        role: "Senior AI Engineer",
        organization: "AI Agent Developer Workshop",
        relationship: "Primary Mentor",
        focus: ["MCP Development", "RAG Systems", "Career Guidance"],
        contact: "workshop-mentor",
      },
    ],
    peers: [
      {
        name: "Workshop Cohort",
        role: "Fellow AI Agent Developers",
        organization: "10-Week Program Participants",
        relationship: "Peer Learning Group",
        focus: ["Collaborative Learning", "Project Reviews", "Knowledge Sharing"],
        contact: "cohort-group",
      },
    ],
    industry: [
      {
        name: "LinkedIn Connections",
        role: "Developers & Recruiters",
        organization: "Various Tech Companies",
        relationship: "Professional Network",
        focus: ["Industry Insights", "Job Opportunities", "Best Practices"],
        contact: "linkedin",
        count: "Growing Network",
      },
      {
        name: "GitHub Community",
        role: "Open Source Contributors",
        organization: "Various Projects",
        relationship: "Technical Community",
        focus: ["Code Review", "Collaboration", "Learning"],
        contact: "github",
        count: "Active Participation",
      },
    ],
  }

  const networkingActivities = [
    {
      activity: "LinkedIn Engagement",
      frequency: "Daily",
      actions: [
        "Share technical insights and project updates",
        "Comment on industry posts and discussions",
        "Connect with 5+ developers/recruiters weekly",
        "Endorse skills and write recommendations",
      ],
      status: "active",
    },
    {
      activity: "Tech Meetups & Events",
      frequency: "Monthly",
      actions: [
        "Attend local developer meetups",
        "Participate in virtual tech conferences",
        "Join online coding communities (Discord, Slack)",
        "Network with attendees and speakers",
      ],
      status: "active",
    },
    {
      activity: "Open Source Contribution",
      frequency: "Weekly",
      actions: [
        "Contribute to AI/ML projects on GitHub",
        "Engage in code reviews and discussions",
        "Help maintain project documentation",
        "Build relationships with maintainers",
      ],
      status: "active",
    },
    {
      activity: "Technical Writing & Sharing",
      frequency: "Bi-weekly",
      actions: [
        "Publish blog posts on dev.to or Medium",
        "Share code snippets and tutorials",
        "Document learning journey publicly",
        "Engage with readers and fellow writers",
      ],
      status: "active",
    },
  ]

  const mentorshipGoals = [
    {
      type: "Seeking Mentorship",
      goals: [
        "Find 2-3 senior developers for regular guidance",
        "Connect with AI/ML engineers for specialized advice",
        "Seek career mentors in target companies",
        "Join formal mentorship programs (ADPList, MentorCruise)",
      ],
    },
    {
      type: "Offering Mentorship",
      goals: [
        "Help aspiring developers transitioning to tech",
        "Share workshop learnings with peers",
        "Answer questions on Stack Overflow and forums",
        "Create beginner-friendly tutorials and guides",
      ],
    },
  ]

  const networkingStrategy = {
    platforms: [
      {
        name: "LinkedIn",
        icon: Linkedin,
        color: "text-blue-400",
        strategy: "Professional branding, job search, industry connections",
        url: "https://linkedin.com/in/shammi-parussella", // Update with actual URL
      },
      {
        name: "GitHub",
        icon: Github,
        color: "text-purple-400",
        strategy: "Technical portfolio, open-source contributions, code collaboration",
        url: "https://github.com/shammirasadika",
      },
      {
        name: "Twitter/X",
        icon: MessageSquare,
        color: "text-cyan-400",
        strategy: "Tech community engagement, thought leadership, real-time learning",
        url: "", // Add if available
      },
    ],
  }

  const valueProposition = [
    "Fresh perspective with modern tech stack expertise (Next.js 15, React 19, TypeScript)",
    "Demonstrated ability to build production-ready applications independently",
    "Strong foundation in AI integration and MCP protocol development",
    "Self-motivated learner with proven track record of completing complex projects",
    "Eager to contribute, learn from experienced teams, and grow professionally",
  ]

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
                  Professional Network
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                Building meaningful connections in the tech community
              </p>
              <p className="text-sm text-muted-foreground">Mentorship, collaboration, and continuous growth</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Current Network */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Current Network
            </span>
          </h2>

          {/* Mentors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              Mentors & Advisors
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {connections.mentors.map((mentor, idx) => (
                <Card key={idx} className="border-cyan-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
                    <CardDescription>
                      {mentor.role} • {mentor.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {mentor.relationship}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Focus Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {mentor.focus.map((area, areaIdx) => (
                            <Badge key={areaIdx} variant="secondary" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Peers */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              Peer Network
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {connections.peers.map((peer, idx) => (
                <Card key={idx} className="border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">{peer.name}</CardTitle>
                    <CardDescription>
                      {peer.role} • {peer.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {peer.relationship}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Activities:</p>
                        <div className="flex flex-wrap gap-2">
                          {peer.focus.map((area, areaIdx) => (
                            <Badge key={areaIdx} variant="secondary" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry Connections */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              Industry Connections
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {connections.industry.map((connection, idx) => (
                <Card key={idx} className="border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{connection.name}</CardTitle>
                        <CardDescription>
                          {connection.role} • {connection.organization}
                        </CardDescription>
                      </div>
                      {connection.count && (
                        <Badge variant="outline" className="text-xs">
                          {connection.count}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {connection.relationship}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Engagement:</p>
                        <div className="flex flex-wrap gap-2">
                          {connection.focus.map((area, areaIdx) => (
                            <Badge key={areaIdx} variant="secondary" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Networking Strategy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Networking Strategy & Platforms
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {networkingStrategy.platforms.map((platform, idx) => {
              const Icon = platform.icon
              return (
                <Card key={idx} className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${platform.color}`} />
                      {platform.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{platform.strategy}</p>
                    {platform.url && (
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={platform.url} target="_blank" rel="noopener noreferrer">
                          View Profile
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Networking Activities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Active Networking Activities
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {networkingActivities.map((item, idx) => (
              <Card key={idx} className="border-border/40">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{item.activity}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {item.frequency}
                    </Badge>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 w-fit">{item.status}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.actions.map((action, actionIdx) => (
                      <li key={actionIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentorship Goals */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mentorship Goals
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mentorshipGoals.map((section, idx) => (
              <Card key={idx} className="border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <UserPlus className="w-5 h-5 text-cyan-400" />
                    {section.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.goals.map((goal, goalIdx) => (
                      <li key={goalIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">→</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <Card className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
          <CardHeader>
            <CardTitle className="text-2xl">My Value Proposition</CardTitle>
            <CardDescription>What I bring to teams and the tech community</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {valueProposition.map((value, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-cyan-400 text-lg mt-0.5">✓</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border/40">
              <h4 className="font-semibold mb-4">Let's Connect</h4>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href="https://linkedin.com/in/shammi-parussella" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/shammirasadika" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:shammirasadika123@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
