import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, Award, Users, Briefcase, Code, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CareerPlanPage() {
  const careerGoals = {
    shortTerm: [
      {
        title: "Junior Full-Stack Developer",
        timeline: "0-6 months",
        skills: ["Next.js", "React", "TypeScript", "Node.js", "API Development"],
        description: "Secure position focusing on modern web development with AI integration capabilities",
      },
      {
        title: "Expand Technical Portfolio",
        timeline: "0-3 months",
        skills: ["Open Source Contributions", "Technical Writing", "Community Engagement"],
        description: "Contribute to 5+ open-source projects and publish technical articles",
      },
    ],
    mediumTerm: [
      {
        title: "AI/ML Engineer",
        timeline: "6-18 months",
        skills: ["Machine Learning", "RAG Systems", "Vector Databases", "LLM Fine-tuning"],
        description: "Transition into specialized AI engineering role focusing on practical applications",
      },
      {
        title: "Technical Leadership",
        timeline: "12-24 months",
        skills: ["Mentorship", "Code Review", "Architecture Design", "Team Collaboration"],
        description: "Take on senior developer responsibilities and mentor junior team members",
      },
    ],
    longTerm: [
      {
        title: "Senior AI Engineer / Tech Lead",
        timeline: "2-4 years",
        skills: ["System Architecture", "Team Leadership", "Strategic Planning", "Innovation"],
        description: "Lead AI projects, architect scalable solutions, and drive technical innovation",
      },
      {
        title: "Thought Leader in AI Development",
        timeline: "3-5 years",
        skills: ["Public Speaking", "Conference Presentations", "Technical Publications", "Industry Influence"],
        description: "Establish reputation as expert in AI agent development and modern web technologies",
      },
    ],
  }

  const developmentAreas = [
    {
      category: "Technical Skills",
      icon: Code,
      color: "cyan",
      areas: [
        "Advanced TypeScript patterns and best practices",
        "Microservices architecture and distributed systems",
        "Machine learning model deployment and optimization",
        "DevOps practices, CI/CD, and infrastructure as code",
        "Advanced database optimization and query performance",
      ],
    },
    {
      category: "Professional Skills",
      icon: Briefcase,
      color: "blue",
      areas: [
        "Agile/Scrum methodologies and project management",
        "Technical communication and documentation",
        "Stakeholder management and requirements gathering",
        "Code review best practices and quality assurance",
        "Time management and productivity optimization",
      ],
    },
    {
      category: "Leadership & Collaboration",
      icon: Users,
      color: "purple",
      areas: [
        "Mentoring junior developers and knowledge sharing",
        "Cross-functional team collaboration",
        "Conflict resolution and team dynamics",
        "Technical decision-making and architecture reviews",
        "Building and maintaining engineering culture",
      ],
    },
  ]

  const milestones = [
    {
      date: "Q1 2025",
      title: "Portfolio Launch & Job Search",
      objectives: [
        "Complete integrated portfolio with all Week 10 deliverables",
        "Apply to 50+ junior developer positions",
        "Network with 20+ industry professionals on LinkedIn",
        "Attend 3+ tech meetups or conferences",
      ],
      status: "in-progress",
    },
    {
      date: "Q2 2025",
      title: "First Role & Foundation Building",
      objectives: [
        "Secure first professional developer position",
        "Complete onboarding and first 3 months successfully",
        "Contribute to 3+ production features or bug fixes",
        "Build relationships with team members and mentors",
      ],
      status: "upcoming",
    },
    {
      date: "Q3-Q4 2025",
      title: "Skill Expansion & Recognition",
      objectives: [
        "Lead 1-2 small projects or features independently",
        "Contribute to architectural decisions and code reviews",
        "Complete advanced certifications (AWS, AI/ML)",
        "Publish 5+ technical blog posts or tutorials",
      ],
      status: "upcoming",
    },
    {
      date: "2026",
      title: "Specialization & Growth",
      objectives: [
        "Transition to AI/ML focused role or projects",
        "Mentor 2+ junior developers",
        "Speak at local tech meetup or conference",
        "Contribute significantly to open-source AI projects",
      ],
      status: "upcoming",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      case "upcoming":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getIconColor = (color: string) => {
    switch (color) {
      case "cyan":
        return "text-cyan-400"
      case "blue":
        return "text-blue-400"
      case "purple":
        return "text-purple-400"
      default:
        return "text-gray-400"
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
                  Career Development Plan
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                Professional Roadmap: Junior Developer to AI Engineering Leader
              </p>
              <p className="text-sm text-muted-foreground">
                A strategic 5-year plan for continuous growth and career advancement
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Career Vision */}
        <Card className="mb-12 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="w-6 h-6 text-cyan-400" />
              Career Vision
            </CardTitle>
            <CardDescription>My ultimate professional goal and purpose</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                To become a recognized expert in AI agent development and modern web technologies, building innovative
                solutions that bridge the gap between artificial intelligence and practical business applications. I aim
                to lead teams, mentor emerging developers, and contribute meaningfully to the evolution of AI-powered
                software development.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Excellence</h4>
                    <p className="text-xs text-muted-foreground">
                      Continuous improvement and mastery of craft
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Impact</h4>
                    <p className="text-xs text-muted-foreground">Building solutions that matter and helping others grow</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Innovation</h4>
                    <p className="text-xs text-muted-foreground">
                      Staying at forefront of AI and web technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Career Goals */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Career Goals & Timeline
            </span>
          </h2>

          {/* Short Term */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Short Term (0-6 months)</Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {careerGoals.shortTerm.map((goal, idx) => (
                <Card key={idx} className="border-cyan-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{goal.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {goal.timeline}
                      </Badge>
                    </div>
                    <CardDescription>{goal.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {goal.skills.map((skill, skillIdx) => (
                        <Badge key={skillIdx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Medium Term */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Medium Term (6-24 months)</Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {careerGoals.mediumTerm.map((goal, idx) => (
                <Card key={idx} className="border-blue-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{goal.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {goal.timeline}
                      </Badge>
                    </div>
                    <CardDescription>{goal.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {goal.skills.map((skill, skillIdx) => (
                        <Badge key={skillIdx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Long Term */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Long Term (2-5 years)</Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {careerGoals.longTerm.map((goal, idx) => (
                <Card key={idx} className="border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{goal.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {goal.timeline}
                      </Badge>
                    </div>
                    <CardDescription>{goal.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {goal.skills.map((skill, skillIdx) => (
                        <Badge key={skillIdx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Development Areas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Key Development Areas
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {developmentAreas.map((area, idx) => {
              const Icon = area.icon
              return (
                <Card key={idx} className={`border-${area.color}-500/20`}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${getIconColor(area.color)}`} />
                      {area.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.areas.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className={`${getIconColor(area.color)} mt-1`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Key Milestones
            </span>
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <Card
                key={idx}
                className={`${
                  milestone.status === "in-progress" ? "border-cyan-500/50 bg-cyan-500/5" : "border-border/40"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {milestone.date}
                        </Badge>
                        <Badge variant="outline" className={`text-xs ${getStatusColor(milestone.status)}`}>
                          {milestone.status.toUpperCase().replace("-", " ")}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    </div>
                    {milestone.status === "in-progress" && (
                      <ArrowRight className="w-6 h-6 text-cyan-400 animate-pulse" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {milestone.objectives.map((objective, objIdx) => (
                      <li key={objIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Steps */}
        <Card className="border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-2xl">Immediate Action Steps</CardTitle>
            <CardDescription>Concrete actions to execute in the next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-cyan-400">Job Search Strategy</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <span>Apply to 10+ positions weekly on LinkedIn, Indeed, AngelList</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <span>Tailor resume and cover letter for each application</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <span>Follow up with applications after 1 week</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <span>Practice technical interview questions daily</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-400">Networking & Visibility</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span>Connect with 5+ developers/recruiters daily on LinkedIn</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span>Publish 1 technical blog post every 2 weeks</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span>Attend 1-2 local tech meetups or virtual events monthly</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span>Contribute to open-source projects weekly</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
