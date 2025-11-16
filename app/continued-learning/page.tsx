import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, GraduationCap, Target, TrendingUp, CheckCircle2, Clock, Award, Brain, Code2, Cloud } from "lucide-react"
import Link from "next/link"

export default function ContinuedLearningPage() {
  const learningCommitment = {
    dailyHours: "2-3 hours",
    weeklyHours: "15-20 hours",
    focus: "Continuous skill development and staying current with technology",
    approach: "Balanced mix of structured courses, hands-on projects, and community engagement",
  }

  const learningGoals = [
    {
      category: "Advanced TypeScript & JavaScript",
      icon: Code2,
      color: "cyan",
      topics: [
        "Advanced type system features and patterns",
        "Performance optimization techniques",
        "Design patterns and architectural principles",
        "Testing strategies and test-driven development",
      ],
      resources: [
        "TypeScript Deep Dive by Basarat",
        "JavaScript: The Good Parts",
        "Advanced patterns on TypeScript docs",
      ],
      timeline: "Months 1-3",
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "purple",
      topics: [
        "Deep learning fundamentals and neural networks",
        "Advanced RAG architectures and optimization",
        "LLM fine-tuning and prompt engineering",
        "Vector databases and embeddings at scale",
      ],
      resources: [
        "DeepLearning.AI courses (Andrew Ng)",
        "Fast.ai Practical Deep Learning",
        "LangChain documentation and tutorials",
      ],
      timeline: "Months 2-6",
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "blue",
      topics: [
        "AWS services (Lambda, S3, DynamoDB, etc.)",
        "Containerization with Docker and Kubernetes",
        "CI/CD pipelines and automation",
        "Infrastructure as Code (Terraform)",
      ],
      resources: [
        "AWS Certified Developer - Associate",
        "Docker & Kubernetes: The Practical Guide",
        "GitHub Actions documentation",
      ],
      timeline: "Months 3-6",
    },
    {
      category: "System Design & Architecture",
      icon: Target,
      color: "green",
      topics: [
        "Scalable system design patterns",
        "Microservices architecture",
        "Database design and optimization",
        "API design and best practices",
      ],
      resources: [
        "System Design Interview by Alex Xu",
        "Designing Data-Intensive Applications",
        "Architecture patterns documentation",
      ],
      timeline: "Months 4-12",
    },
  ]

  const certificationGoals = [
    {
      name: "AWS Certified Developer - Associate",
      provider: "Amazon Web Services",
      priority: "High",
      timeline: "Q1 2026",
      reason: "Essential for cloud-native application development",
      status: "planned",
    },
    {
      name: "Professional Scrum Master I (PSM I)",
      provider: "Scrum.org",
      priority: "Medium",
      timeline: "Q2 2026",
      reason: "Understanding agile methodologies for team collaboration",
      status: "planned",
    },
    {
      name: "TensorFlow Developer Certificate",
      provider: "Google",
      priority: "High",
      timeline: "Q3 2026",
      reason: "Formal validation of ML skills",
      status: "planned",
    },
  ]

  const learningResources = [
    {
      type: "Online Platforms",
      resources: [
        { name: "Coursera", usage: "Structured courses from universities" },
        { name: "Udemy", usage: "Practical, project-based learning" },
        { name: "Frontend Masters", usage: "Advanced web development" },
        { name: "DeepLearning.AI", usage: "AI and ML specializations" },
      ],
    },
    {
      type: "Technical Reading",
      resources: [
        { name: "dev.to", usage: "Developer articles and tutorials" },
        { name: "Medium", usage: "In-depth technical writeups" },
        { name: "Official Docs", usage: "Framework and library documentation" },
        { name: "Technical Books", usage: "Deep dives into specific topics" },
      ],
    },
    {
      type: "Hands-On Practice",
      resources: [
        { name: "LeetCode", usage: "Algorithm and data structure practice" },
        { name: "GitHub Projects", usage: "Real-world coding experience" },
        { name: "CodeWars", usage: "Coding challenges and katas" },
        { name: "Personal Projects", usage: "Apply new skills in context" },
      ],
    },
    {
      type: "Community Learning",
      resources: [
        { name: "Tech Meetups", usage: "Local developer communities" },
        { name: "Discord/Slack", usage: "Real-time discussions and help" },
        { name: "Stack Overflow", usage: "Q&A and problem-solving" },
        { name: "Twitter/X", usage: "Following experts and trends" },
      ],
    },
  ]

  const weeklySchedule = [
    {
      day: "Monday-Friday",
      morning: "1 hour - Reading technical articles and documentation",
      evening: "2 hours - Structured courses or hands-on projects",
    },
    {
      day: "Saturday",
      morning: "3 hours - Deep dive into new technology or framework",
      afternoon: "2 hours - Open source contributions",
    },
    {
      day: "Sunday",
      morning: "2 hours - Review week's learning and plan next week",
      afternoon: "Rest and reflection",
    },
  ]

  const learningPrinciples = [
    "Learn by building - Apply concepts immediately in projects",
    "Teach to learn - Write blog posts and share knowledge",
    "Stay curious - Explore new technologies and paradigms",
    "Focus on fundamentals - Deep understanding over surface knowledge",
    "Practice consistently - Small daily progress beats irregular intensity",
    "Seek feedback - Learn from code reviews and mentorship",
    "Embrace failure - Mistakes are learning opportunities",
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      case "planned":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getIconColor = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: "text-cyan-400",
      purple: "text-purple-400",
      blue: "text-blue-400",
      green: "text-green-400",
    }
    return colors[color] || "text-gray-400"
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <section className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-flex items-center">
            ← Back to Portfolio
          </Link>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Continued Learning Plan
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">Lifelong learning commitment and growth strategy</p>
            <p className="text-sm text-muted-foreground">
              Dedicated {learningCommitment.weeklyHours} per week to continuous skill development
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Learning Commitment */}
        <Card className="mb-12 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              Learning Commitment
            </CardTitle>
            <CardDescription>My dedication to continuous professional development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-cyan-400">Time Investment</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Daily Learning</span>
                    <Badge variant="outline">{learningCommitment.dailyHours}</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Weekly Learning</span>
                    <Badge variant="outline">{learningCommitment.weeklyHours}</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-400">Approach</h4>
                <p className="text-sm text-muted-foreground mb-3">{learningCommitment.approach}</p>
                <p className="text-sm text-muted-foreground">{learningCommitment.focus}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Goals */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Learning Goals by Category
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {learningGoals.map((goal, idx) => {
              const Icon = goal.icon
              return (
                <Card key={idx} className={`border-${goal.color}-500/20`}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${getIconColor(goal.color)}`} />
                      {goal.category}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit text-xs">
                      {goal.timeline}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold mb-2">Topics:</h5>
                        <ul className="space-y-1">
                          {goal.topics.map((topic, topicIdx) => (
                            <li key={topicIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className={`${getIconColor(goal.color)} mt-1`}>•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold mb-2">Resources:</h5>
                        <div className="flex flex-wrap gap-2">
                          {goal.resources.map((resource, resIdx) => (
                            <Badge key={resIdx} variant="secondary" className="text-xs">
                              {resource}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Certification Goals */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certification Roadmap
            </span>
          </h2>
          <div className="space-y-4">
            {certificationGoals.map((cert, idx) => (
              <Card key={idx} className="border-border/40">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-cyan-400" />
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                        <Badge variant="outline" className={getStatusColor(cert.status)}>
                          {cert.status.toUpperCase()}
                        </Badge>
                      </div>
                      <CardDescription>{cert.provider}</CardDescription>
                    </div>
                    <div className="text-right ml-4">
                      <Badge
                        variant="outline"
                        className={cert.priority === "High" ? "border-cyan-500/50" : "border-border"}
                      >
                        {cert.priority} Priority
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{cert.timeline}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Learning Resources & Platforms
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {learningResources.map((section, idx) => (
              <Card key={idx} className="border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">{section.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.resources.map((resource, resIdx) => (
                      <div key={resIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">{resource.name}</p>
                          <p className="text-xs text-muted-foreground">{resource.usage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Weekly Learning Schedule
            </span>
          </h2>
          <div className="space-y-4">
            {weeklySchedule.map((schedule, idx) => (
              <Card key={idx} className="border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    {schedule.day}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {schedule.morning && (
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-xs">
                          Morning
                        </Badge>
                        <p className="text-sm text-muted-foreground">{schedule.morning}</p>
                      </div>
                    )}
                    {schedule.evening && (
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-xs">
                          Evening
                        </Badge>
                        <p className="text-sm text-muted-foreground">{schedule.evening}</p>
                      </div>
                    )}
                    {schedule.afternoon && (
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-xs">
                          Afternoon
                        </Badge>
                        <p className="text-sm text-muted-foreground">{schedule.afternoon}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Principles */}
        <Card className="mb-12 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              Learning Principles
            </CardTitle>
            <CardDescription>Core principles guiding my learning approach</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {learningPrinciples.map((principle, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-cyan-400 text-lg mt-0.5">•</span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Signed Commitment */}
        <Card className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
          <CardHeader>
            <CardTitle className="text-2xl">Lifelong Learning Commitment</CardTitle>
            <CardDescription>My personal pledge to continuous growth</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  I, <strong className="text-foreground">Shammi Parussella</strong>, commit to lifelong learning and
                  continuous professional development. Technology evolves rapidly, and I pledge to stay current,
                  relevant, and skilled in my field.
                </p>
                <p className="mt-4">
                  <strong className="text-foreground">My Commitments:</strong>
                </p>
                <ul className="space-y-2 mt-2">
                  <li>
                    Dedicate at least <strong className="text-cyan-400">{learningCommitment.weeklyHours}</strong> per
                    week to learning and skill development
                  </li>
                  <li>Complete at least 2 professional certifications within the next 12 months</li>
                  <li>Read and implement learnings from at least 1 technical book per quarter</li>
                  <li>Build at least 1 new project monthly to apply new skills</li>
                  <li>Share knowledge through blog posts, talks, or mentorship</li>
                  <li>Stay curious and embrace new technologies and paradigms</li>
                  <li>Measure progress and adjust learning strategies regularly</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-border/40">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold mb-1">Signed by:</p>
                    <p className="text-2xl font-bold text-cyan-400">Shammi Parussella</p>
                    <p className="text-xs text-muted-foreground">AI Agent Developer</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Date:</p>
                    <p className="text-lg font-semibold">November 16, 2025</p>
                    <div className="mt-2">
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Commitment Active
                      </Badge>
                    </div>
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
