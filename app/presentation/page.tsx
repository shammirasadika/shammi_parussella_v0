import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, FileText, Clock, Calendar, Download, ExternalLink, Play } from "lucide-react"
import Link from "next/link"

export default function PresentationPage() {
  const presentationDetails = {
    title: "AI Digital Twin: 10-Week Journey Showcase",
    date: "Week 10 - Final Showcase",
    duration: "20 minutes",
    audience: "Technical Recruiters, Hiring Managers, Industry Professionals",
    videoUrl: "", // Add your video URL here
    slidesUrl: "", // Add your slides URL here
  }

  const agenda = [
    {
      time: "0:00 - 2:00",
      section: "Introduction",
      topics: [
        "What is your AI Digital Twin?",
        "What inspired you to create it?",
        "What problem or opportunity does it address?",
      ],
    },
    {
      time: "2:00 - 6:00",
      section: "Technology Stack",
      topics: [
        "Core technologies: Next.js, React, TypeScript, Prisma",
        "AI integration: RAG system, Vector DB, LLM (Groq/Ollama)",
        "Data architecture and system structure",
        "MCP protocol implementation",
      ],
    },
    {
      time: "6:00 - 10:00",
      section: "Testing & Peer Feedback",
      topics: [
        "Testing methodology and validation approach",
        "Peer and mentor feedback collection",
        "Key insights from user interactions",
        "Technical refinements based on feedback",
      ],
    },
    {
      time: "10:00 - 13:00",
      section: "Improvements Made",
      topics: [
        "Changes implemented based on feedback",
        "Enhanced user experience features",
        "Performance optimizations",
        "UI/UX refinements",
      ],
    },
    {
      time: "13:00 - 16:00",
      section: "Challenges Faced",
      topics: [
        "Technical challenges (RAG, vector DB, deployment)",
        "Non-technical challenges (time management, learning curve)",
        "Problem-solving through research and teamwork",
        "Lessons learned throughout development",
      ],
    },
    {
      time: "16:00 - 20:00",
      section: "Conclusion & Future",
      topics: [
        "Key learnings about AI and digital twins",
        "Teamwork and collaboration insights",
        "Future improvements and enhancements",
        "How the project enhances employability",
        "Q&A Session",
      ],
    },
  ]

  const keyTakeaways = [
    "Built AI-powered Digital Twin with RAG system from scratch",
    "Implemented comprehensive portfolio with 10+ pages",
    "Developed custom MCP server for AI agent integration",
    "Mastered Next.js 15, React 19, TypeScript, and modern AI tooling",
    "Deployed production applications with 24/7 availability on Vercel",
    "Integrated vector databases, LLMs, and advanced AI features",
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
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Industry Presentation
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{presentationDetails.title}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{presentationDetails.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>{presentationDetails.duration}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {presentationDetails.slidesUrl && (
                <Button asChild variant="outline">
                  <a href={presentationDetails.slidesUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download Slides
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Video Section */}
        <Card className="mb-12 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Video className="w-6 h-6 text-cyan-400" />
              Presentation Recording
            </CardTitle>
            <CardDescription>20-minute technical showcase of the 10-week AI Agent Developer journey</CardDescription>
          </CardHeader>
          <CardContent>
            {presentationDetails.videoUrl ? (
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  src={presentationDetails.videoUrl}
                  title="Industry Presentation"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                <div className="text-center">
                  <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-2">Presentation Recording Coming Soon</p>
                  <p className="text-sm text-muted-foreground">
                    The video will be available after the Week 10 final showcase
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Presentation Agenda */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan-400" />
              Presentation Agenda
            </CardTitle>
            <CardDescription>Structured 20-minute overview of the complete workshop journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {agenda.map((item, idx) => (
                <div key={idx} className="border-l-2 border-cyan-500/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full" />
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.section}</h3>
                    <Badge variant="outline" className="text-xs">
                      {item.time}
                    </Badge>
                  </div>
                  <ul className="space-y-1.5">
                    {item.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-xl">Key Takeaways</CardTitle>
              <CardDescription>Major accomplishments from the 10-week program</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-xl">Target Audience</CardTitle>
              <CardDescription>Designed for technical and non-technical professionals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-cyan-400">Technical Recruiters</h4>
                  <p className="text-sm text-muted-foreground">
                    Clear demonstration of full-stack development skills, AI integration capabilities, and production deployment experience
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-blue-400">Hiring Managers</h4>
                  <p className="text-sm text-muted-foreground">
                    Evidence of project completion, problem-solving abilities, and readiness for professional development roles
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-purple-400">Industry Professionals</h4>
                  <p className="text-sm text-muted-foreground">
                    Insight into modern AI agent development, MCP protocol usage, and current best practices
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Supporting Materials */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Supporting Materials</CardTitle>
            <CardDescription>Additional resources and documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button asChild variant="outline" className="h-auto py-4 justify-start">
                <Link href="/journey">
                  <FileText className="w-5 h-5 mr-3 text-cyan-400" />
                  <div className="text-left">
                    <div className="font-semibold">Weekly Journey</div>
                    <div className="text-xs text-muted-foreground">All 10 weeks with deliverables</div>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4 justify-start">
                <Link href="/projects">
                  <ExternalLink className="w-5 h-5 mr-3 text-blue-400" />
                  <div className="text-left">
                    <div className="font-semibold">Projects Showcase</div>
                    <div className="text-xs text-muted-foreground">Live demos and repositories</div>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4 justify-start">
                <Link href="/mcp">
                  <ExternalLink className="w-5 h-5 mr-3 text-purple-400" />
                  <div className="text-left">
                    <div className="font-semibold">MCP Integration</div>
                    <div className="text-xs text-muted-foreground">Tool calling demonstrations</div>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4 justify-start">
                <Link href="/career-plan">
                  <ExternalLink className="w-5 h-5 mr-3 text-green-400" />
                  <div className="text-left">
                    <div className="font-semibold">Career Development Plan</div>
                    <div className="text-xs text-muted-foreground">Professional roadmap</div>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
