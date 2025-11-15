"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, MessageSquare, Database, Code2, Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function InteractiveDemosPage() {
  const [digitalTwinInput, setDigitalTwinInput] = useState("")
  const [digitalTwinOutput, setDigitalTwinOutput] = useState("")
  const [isLoadingDigitalTwin, setIsLoadingDigitalTwin] = useState(false)
  
  const [mcpOutput, setMcpOutput] = useState("")
  const [isLoadingMcp, setIsLoadingMcp] = useState(false)

  const askDigitalTwin = async () => {
    if (!digitalTwinInput.trim()) return
    
    setIsLoadingDigitalTwin(true)
    setDigitalTwinOutput("Processing your query...")
    
    // Simulate API call - replace with actual call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const responses: { [key: string]: string } = {
      "experience": "I have 4+ years of professional experience in .NET development, working with C#, ASP.NET Core, and Azure at CONIFS Global. I've delivered 10+ enterprise solutions including ERP, Warehouse Management, and GIS/SIS systems. Currently pursuing a Master's in Artificial Intelligence at the University of Tasmania.",
      "skills": "My technical skills include: .NET Core, C#, TypeScript, React, Next.js, Python, AI/ML, RAG systems, Vector databases, MCP Protocol, Prisma ORM, PostgreSQL, Azure, and Git.",
      "education": "Master of Information Technology and Systems (Artificial Intelligence) at University of Tasmania (2024-2026, GPA: 6.75/7). Previously completed BSc (Hons) in Information Technology at SLIIT, Sri Lanka (2017-2021, GPA: 3.72/4).",
      "projects": "Key projects include: Digital Twin RAG System with vector embeddings and 24/7 availability, Person Management System with OAuth authentication, Rolldice MCP Server implementation, and this professional portfolio with MCP integration.",
    }
    
    const lowerInput = digitalTwinInput.toLowerCase()
    let response = "I'm an AI-powered digital twin trained on professional profile information. "
    
    if (lowerInput.includes("experience") || lowerInput.includes("work")) {
      response = responses.experience
    } else if (lowerInput.includes("skill") || lowerInput.includes("tech")) {
      response = responses.skills
    } else if (lowerInput.includes("education") || lowerInput.includes("study")) {
      response = responses.education
    } else if (lowerInput.includes("project")) {
      response = responses.projects
    } else {
      response += "Try asking about experience, skills, education, or projects. For a full interactive experience, visit the live Digital Twin demo."
    }
    
    setDigitalTwinOutput(response)
    setIsLoadingDigitalTwin(false)
  }

  const callRollDice = async () => {
    setIsLoadingMcp(true)
    setMcpOutput("Calling MCP tool...")
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const result = Math.floor(Math.random() * 6) + 1
    const output = JSON.stringify({
      tool: "rolldice",
      result: result,
      message: `Rolled a ${result}`,
      timestamp: new Date().toISOString(),
      protocol: "MCP/JSON-RPC 2.0"
    }, null, 2)
    
    setMcpOutput(output)
    setIsLoadingMcp(false)
  }

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
              Live Demos
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Interactive demonstrations of workshop projects — try them yourself!
          </p>
        </div>
      </section>

      {/* Interactive Demos */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          
          {/* 1. Digital Twin Demo */}
          <Card className="border-border/40">
            <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-cyan-400" />
                    Digital Twin Demo
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    Ask questions about professional experience, skills, and projects
                  </CardDescription>
                </div>
                <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <a href="https://digital-twin-vert-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Full Demo
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ask a question:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={digitalTwinInput}
                      onChange={(e) => setDigitalTwinInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && askDigitalTwin()}
                      placeholder="e.g., Tell me about your experience with .NET"
                      className="flex-1 px-4 py-3 bg-muted rounded-lg border border-border/40 focus:border-cyan-500 focus:outline-none"
                    />
                    <Button 
                      onClick={askDigitalTwin}
                      disabled={isLoadingDigitalTwin || !digitalTwinInput.trim()}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                    >
                      {isLoadingDigitalTwin ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Ask Digital Twin
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                
                {digitalTwinOutput && (
                  <div className="bg-muted/50 rounded-lg p-4 border border-border/40">
                    <div className="flex items-start gap-2 mb-2">
                      <MessageSquare className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-cyan-400 mb-2">Digital Twin Response:</p>
                        <p className="text-sm text-foreground leading-relaxed">{digitalTwinOutput}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground">
                    💡 <strong>Sample queries:</strong> "What's your experience?", "Tell me about your skills", 
                    "What projects have you built?", "What's your education background?"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2. Person App Demo */}
          <Card className="border-border/40">
            <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Database className="w-6 h-6 text-cyan-400" />
                    Person App Demo
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    Full-stack CRUD application with OAuth authentication
                  </CardDescription>
                </div>
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  <a href="https://person-search-neon.vercel.app/auth/signin?callbackUrl=%2F" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open App
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-lg p-4 border border-border/40">
                    <h4 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      🔐 Authentication
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• OAuth login (Google/GitHub)</li>
                      <li>• Session management</li>
                      <li>• Protected routes</li>
                      <li>• Role-based access</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 border border-border/40">
                    <h4 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      💾 CRUD Operations
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Create person records</li>
                      <li>• Read/view person list</li>
                      <li>• Update existing data</li>
                      <li>• Delete with confirmation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Tech Stack:</strong> Next.js 15, Prisma ORM, Neon PostgreSQL, Auth.js, TypeScript
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Roll Dice MCP Demo */}
          <Card className="border-border/40">
            <CardHeader className="bg-gradient-to-r from-green-500/10 to-emerald-500/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-cyan-400" />
                    Roll Dice MCP Demo
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    MCP tool calling demonstration with JSON-RPC protocol
                  </CardDescription>
                </div>
                <Button asChild variant="outline">
                  <Link href="/mcp">
                    <Code2 className="w-4 h-4 mr-2" />
                    View All MCP Tools
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button 
                    onClick={callRollDice}
                    disabled={isLoadingMcp}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  >
                    {isLoadingMcp ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Rolling...
                      </>
                    ) : (
                      <>
                        🎲 Roll Dice Tool
                      </>
                    )}
                  </Button>
                </div>
                
                {mcpOutput && (
                  <div className="bg-black/50 rounded-lg p-4 border border-green-500/30">
                    <div className="flex items-start gap-2 mb-2">
                      <Code2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-green-400 mb-2">MCP Tool Output:</p>
                        <pre className="text-xs text-green-300 font-mono overflow-x-auto">{mcpOutput}</pre>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>MCP Protocol:</strong> This demonstrates how AI agents call tools through the Model Context Protocol. 
                    The rolldice tool is a simple example showing JSON-RPC communication between agent and server.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Additional Info */}
        <Card className="mt-12 border-2 border-cyan-500/50 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Explore More?</CardTitle>
            <CardDescription>All projects are deployed and ready for testing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <a href="https://digital-twin-vert-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Full Digital Twin Demo
                </a>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <a href="https://person-search-neon.vercel.app/auth/signin?callbackUrl=%2F" target="_blank" rel="noopener noreferrer">
                  Person App
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/mcp">
                  MCP Integration
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">
                  View All Projects
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
