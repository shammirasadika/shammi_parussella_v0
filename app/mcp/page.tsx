"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Zap, Database, MessageSquare, CheckCircle2, Code2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const mcpServers = [
  {
    name: "Rolldice MCP Server",
    description: "Simple random number generation demonstrating MCP pattern",
    tools: ["rolldice"],
    status: "connected",
    url: "https://rolldice-mcpserver-theta.vercel.app/api/mcp",
    type: "http",
  },
  {
    name: "Person App MCP Server",
    description: "CRUD operations for person management",
    tools: ["create_person", "read_person", "update_person", "delete_person"],
    status: "connected",
    url: "https://person-search-neon.vercel.app/api/mcp",
    type: "http",
  },
  {
    name: "Digital Twin MCP Server",
    description: "RAG-powered AI assistant for interview preparation",
    tools: ["query_profile", "get_experience", "search_knowledge", "conversation_context"],
    status: "connected",
    url: "https://digital-twin-vert-nu.vercel.app/api/mcp",
    type: "http",
  },
]

export default function MCPIntegrationPage() {
  const [selectedServer, setSelectedServer] = useState(0)
  const [toolOutput, setToolOutput] = useState<string>("")
  const [isExecuting, setIsExecuting] = useState(false)

  const simulateToolCall = async (tool: string) => {
    setIsExecuting(true)
    setToolOutput("Executing...")
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const outputs: { [key: string]: string } = {
      "rolldice": JSON.stringify({
        result: Math.floor(Math.random() * 6) + 1,
        message: "Rolled a dice",
        timestamp: new Date().toISOString()
      }, null, 2),
      "create_person": JSON.stringify({
        id: "123e4567-e89b-12d3-a456-426614174000",
        name: "John Doe",
        email: "john@example.com",
        createdAt: new Date().toISOString()
      }, null, 2),
      "query_profile": JSON.stringify({
        response: "I have 4+ years of experience in .NET development, with expertise in C#, ASP.NET Core, and Azure. Currently pursuing a Master's in AI at the University of Tasmania.",
        sources: ["experience.md", "profile.md"],
        confidence: 0.95
      }, null, 2),
    }
    
    setToolOutput(outputs[tool] || JSON.stringify({ result: "Tool executed successfully" }, null, 2))
    setIsExecuting(false)
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
              MCP Integration
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Model Context Protocol tool calling demonstrations and integrations
          </p>
        </div>
      </section>

      {/* MCP Overview */}
      <section className="container mx-auto px-4 py-12">
        <Card className="mb-12 border-border/40 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Zap className="w-6 h-6 text-cyan-400" />
              What is MCP?
            </CardTitle>
            <CardDescription className="text-base">
              Model Context Protocol enables AI agents to interact with applications and services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Standardized Communication</h4>
                <p className="text-sm text-muted-foreground">
                  JSON-RPC protocol for AI agents to call tools and access resources
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Tool Calling</h4>
                <p className="text-sm text-muted-foreground">
                  Expose functions that AI can invoke with proper parameters and validation
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Context Awareness</h4>
                <p className="text-sm text-muted-foreground">
                  Provide AI with real-time data and capabilities beyond text generation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connected MCP Servers */}
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Connected MCP Servers</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mcpServers.map((server, index) => (
            <Card
              key={server.name}
              className={`border-2 cursor-pointer transition-all ${
                selectedServer === index
                  ? "border-cyan-500 bg-cyan-500/10"
                  : "border-border/40 hover:border-cyan-500/50"
              }`}
              onClick={() => setSelectedServer(index)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg">{server.name}</CardTitle>
                  <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {server.status}
                  </Badge>
                </div>
                <CardDescription>{server.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">
                    {server.tools.length} tools available
                  </div>
                  {server.url && (
                    <>
                      <div className="text-xs">
                        <span className="text-muted-foreground">Type: </span>
                        <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                          {server.type}
                        </Badge>
                      </div>
                      <div className="text-xs">
                        <span className="text-muted-foreground">Endpoint: </span>
                        <code className="text-cyan-400 bg-black/30 px-1 py-0.5 rounded text-[10px]">
                          {server.url}
                        </code>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Tool Calling Demo */}
        <Card className="border-border/40">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              Interactive Tool Calling Demo
            </CardTitle>
            <CardDescription>
              Test MCP tools from {mcpServers[selectedServer].name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Tools List */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Available Tools:</h4>
                <div className="space-y-2">
                  {mcpServers[selectedServer].tools.map((tool) => (
                    <Button
                      key={tool}
                      onClick={() => simulateToolCall(tool)}
                      disabled={isExecuting}
                      variant="outline"
                      className="w-full justify-start text-left"
                    >
                      <Code2 className="w-4 h-4 mr-2" />
                      {tool}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Output */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Tool Output:</h4>
                <div className="bg-black/50 rounded-lg p-4 min-h-[300px] font-mono text-xs">
                  {toolOutput ? (
                    <pre className="text-green-400">{toolOutput}</pre>
                  ) : (
                    <div className="text-muted-foreground">
                      Select a tool to see output...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* HTTP Server Configuration */}
        <Card className="mt-12 border-border/40">
          <CardHeader>
            <CardTitle className="text-2xl">HTTP MCP Server Configuration</CardTitle>
            <CardDescription>Connect to remote MCP servers via HTTP protocol</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Rolldice MCP Server</h4>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-xs">
                  <pre className="text-green-400">{`{
  "mcpServers": {
    "rolldice": {
      "url": "https://rolldice-mcpserver-theta.vercel.app/api/mcp",
      "type": "http",
      "timeout": 30000,
      "description": "Simple random number generation demonstrating MCP pattern"
    }
  }
}`}</pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Digital Twin MCP Server</h4>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-xs">
                  <pre className="text-green-400">{`{
  "mcpServers": {
    "digital-twin": {
      "url": "https://digital-twin-vert-nu.vercel.app/api/mcp",
      "type": "http",
      "timeout": 30000,
      "description": "RAG-powered AI assistant for interview preparation"
    }
  }
}`}</pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Person App MCP Server</h4>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-xs">
                  <pre className="text-green-400">{`{
  "mcpServers": {
    "person-search": {
      "url": "https://person-search-neon.vercel.app/api/mcp",
      "type": "http",
      "timeout": 30000,
      "description": "CRUD operations for person management"
    }
  }
}`}</pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Connection Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">🌐 Remote Access</p>
                    <p className="text-xs text-muted-foreground">
                      Connect to MCP servers hosted anywhere via HTTPS endpoints
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">🔒 Secure Communication</p>
                    <p className="text-xs text-muted-foreground">
                      All communication encrypted with TLS/SSL certificates
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">⚡ Low Latency</p>
                    <p className="text-xs text-muted-foreground">
                      Deployed on Vercel edge network for global performance
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">📊 JSON-RPC 2.0</p>
                    <p className="text-xs text-muted-foreground">
                      Standardized protocol for tool calling and responses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture Diagram */}
        <Card className="mt-12 border-border/40">
          <CardHeader>
            <CardTitle className="text-2xl">MCP Architecture</CardTitle>
            <CardDescription>How HTTP MCP servers communicate with AI agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="grid md:grid-cols-5 gap-4 items-center">
                <div className="text-center">
                  <div className="bg-cyan-500/20 border-2 border-cyan-500 rounded-lg p-4 mb-2">
                    <MessageSquare className="w-8 h-8 mx-auto text-cyan-400" />
                  </div>
                  <p className="text-sm font-medium">AI Agent</p>
                  <p className="text-xs text-muted-foreground">Claude, GPT</p>
                </div>

                <div className="flex justify-center flex-col items-center">
                  <div className="text-2xl text-cyan-400">→</div>
                  <p className="text-[10px] text-muted-foreground mt-1">HTTPS</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-500/20 border-2 border-blue-500 rounded-lg p-4 mb-2">
                    <Zap className="w-8 h-8 mx-auto text-blue-400" />
                  </div>
                  <p className="text-sm font-medium">MCP Server</p>
                  <p className="text-xs text-muted-foreground">HTTP Endpoint</p>
                </div>

                <div className="flex justify-center flex-col items-center">
                  <div className="text-2xl text-cyan-400">→</div>
                  <p className="text-[10px] text-muted-foreground mt-1">API</p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-500/20 border-2 border-purple-500 rounded-lg p-4 mb-2">
                    <Database className="w-8 h-8 mx-auto text-purple-400" />
                  </div>
                  <p className="text-sm font-medium">Data Layer</p>
                  <p className="text-xs text-muted-foreground">Database/RAG</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border/40">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">Protocol Flow:</strong> AI Agent sends JSON-RPC request → MCP Server processes → 
                  Returns structured response → AI integrates result into conversation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Examples */}
        <Card className="mt-12 border-border/40">
          <CardHeader>
            <CardTitle className="text-2xl">Implementation Examples</CardTitle>
            <CardDescription>Real-world MCP integrations in this portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">1. Rolldice MCP Server (HTTP)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Simple dice rolling demonstrating HTTP MCP pattern with remote tool calling
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-green-400">
                  {`// HTTP Request to MCP Server
POST https://rolldice-mcpserver-theta.vercel.app/api/mcp

// JSON-RPC 2.0 Request
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "rolldice",
    "arguments": {}
  },
  "id": 1
}

// Response
{
  "jsonrpc": "2.0",
  "result": {
    "content": [{
      "type": "text",
      "text": "Rolled: 4"
    }]
  },
  "id": 1
}`}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">2. Person App CRUD Operations</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Manage person records through natural language commands
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-green-400">
                  {`// AI Agent prompt
"Create a new person named Sarah with email sarah@example.com"

// MCP Tool Call
{
  "tool": "create_person",
  "arguments": {
    "name": "Sarah",
    "email": "sarah@example.com",
    "age": 28
  }
}`}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">3. Digital Twin RAG Queries (HTTP)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  RAG-powered queries to professional profile via HTTP MCP server
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-green-400">
                  {`// HTTP Request
POST https://digital-twin-vert-nu.vercel.app/api/mcp

// JSON-RPC Request
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "query_profile",
    "arguments": {
      "query": "Tell me about .NET experience"
    }
  },
  "id": 1
}

// RAG-Enhanced Response
{
  "jsonrpc": "2.0",
  "result": {
    "content": [{
      "type": "text",
      "text": "I have 4+ years of .NET development experience..."
    }],
    "metadata": {
      "sources": ["experience.md", "skills.md"],
      "confidence": 0.95
    }
  },
  "id": 1
}`}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mt-12 border-border/40">
          <CardHeader>
            <CardTitle className="text-2xl">Benefits of MCP Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">For Users</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Natural language interaction with applications</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>AI-powered automation and workflows</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Intelligent data access and manipulation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">For Developers</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Standardized protocol for AI integration</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Reusable tool definitions across platforms</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Enhanced AI capabilities beyond LLM knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
