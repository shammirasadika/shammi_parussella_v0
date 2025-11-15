"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Type, Layout, Code, Sparkles, Target } from "lucide-react"

export default function ProfessionalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <section className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-flex items-center">
            ← Back to Portfolio
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Design System
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Brand identity, design principles, and development philosophy
          </p>
        </div>
      </section>

      {/* Color Palette */}
      <section className="container mx-auto px-4 py-12">
        <Card className="border-border/40 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Palette className="w-6 h-6 text-cyan-400" />
              Color Palette
            </CardTitle>
            <CardDescription>Core brand colors and their applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Primary Colors */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Primary Colors</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <div className="w-full h-24 rounded-lg bg-cyan-400 mb-2"></div>
                    <p className="text-sm font-mono text-cyan-400">#22D3EE</p>
                    <p className="text-xs text-muted-foreground">Cyan 400</p>
                    <p className="text-xs text-muted-foreground mt-1">Primary accent, links</p>
                  </div>
                  <div>
                    <div className="w-full h-24 rounded-lg bg-cyan-500 mb-2"></div>
                    <p className="text-sm font-mono text-cyan-500">#06B6D4</p>
                    <p className="text-xs text-muted-foreground">Cyan 500</p>
                    <p className="text-xs text-muted-foreground mt-1">Buttons, highlights</p>
                  </div>
                  <div>
                    <div className="w-full h-24 rounded-lg bg-blue-500 mb-2"></div>
                    <p className="text-sm font-mono text-blue-500">#3B82F6</p>
                    <p className="text-xs text-muted-foreground">Blue 500</p>
                    <p className="text-xs text-muted-foreground mt-1">Gradient end, CTAs</p>
                  </div>
                  <div>
                    <div className="w-full h-24 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 mb-2"></div>
                    <p className="text-sm font-mono">Gradient</p>
                    <p className="text-xs text-muted-foreground">Cyan → Blue</p>
                    <p className="text-xs text-muted-foreground mt-1">Headings, CTAs</p>
                  </div>
                </div>
              </div>

              {/* Secondary Colors */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Secondary & Accent Colors</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <div className="w-full h-24 rounded-lg bg-emerald-500 mb-2"></div>
                    <p className="text-sm font-mono text-emerald-500">#10B981</p>
                    <p className="text-xs text-muted-foreground">Emerald 500</p>
                    <p className="text-xs text-muted-foreground mt-1">Success states</p>
                  </div>
                  <div>
                    <div className="w-full h-24 rounded-lg bg-yellow-500 mb-2"></div>
                    <p className="text-sm font-mono text-yellow-500">#EAB308</p>
                    <p className="text-xs text-muted-foreground">Yellow 500</p>
                    <p className="text-xs text-muted-foreground mt-1">In-progress, warnings</p>
                  </div>
                  <div>
                    <div className="w-full h-24 rounded-lg bg-gray-500 mb-2"></div>
                    <p className="text-sm font-mono text-gray-500">#6B7280</p>
                    <p className="text-xs text-muted-foreground">Gray 500</p>
                    <p className="text-xs text-muted-foreground mt-1">Upcoming, disabled</p>
                  </div>
                  <div>
                    <div className="w-full h-24 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 mb-2"></div>
                    <p className="text-sm font-mono">Gradient</p>
                    <p className="text-xs text-muted-foreground">Emerald → Teal</p>
                    <p className="text-xs text-muted-foreground mt-1">Special actions</p>
                  </div>
                </div>
              </div>

              {/* Background & Text */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Background & Text Colors</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <div className="w-full h-24 rounded-lg bg-background border border-border mb-2"></div>
                    <p className="text-sm font-mono">HSL(0 0% 3.9%)</p>
                    <p className="text-xs text-muted-foreground">Background</p>
                    <p className="text-xs text-muted-foreground mt-1">Main page background</p>
                  </div>
                  <div>
                    <div className="w-full h-24 rounded-lg bg-foreground mb-2"></div>
                    <p className="text-sm font-mono">HSL(0 0% 98%)</p>
                    <p className="text-xs text-muted-foreground">Foreground</p>
                    <p className="text-xs text-muted-foreground mt-1">Primary text</p>
                  </div>
                  <div>
                    <div className="w-full h-24 rounded-lg bg-muted mb-2"></div>
                    <p className="text-sm font-mono text-muted-foreground">Muted</p>
                    <p className="text-xs text-muted-foreground">Secondary BG</p>
                    <p className="text-xs text-muted-foreground mt-1">Cards, inputs</p>
                  </div>
                  <div>
                    <div className="w-full h-24 rounded-lg bg-border mb-2"></div>
                    <p className="text-sm font-mono text-muted-foreground">Border</p>
                    <p className="text-xs text-muted-foreground">HSL(240 3.7% 15.9%)</p>
                    <p className="text-xs text-muted-foreground mt-1">Dividers, borders</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card className="border-border/40 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Type className="w-6 h-6 text-cyan-400" />
              Typography System
            </CardTitle>
            <CardDescription>Font hierarchy and usage guidelines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Font Stack */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Font Stack</h4>
                <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                  <div>
                    <p className="text-sm text-cyan-400 mb-1">Primary Font (Geist Sans)</p>
                    <p className="text-xl" style={{ fontFamily: "var(--font-geist-sans)" }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      font-family: var(--font-geist-sans)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-cyan-400 mb-1">Monospace Font (Geist Mono)</p>
                    <p className="text-xl font-mono" style={{ fontFamily: "var(--font-geist-mono)" }}>
                      const greeting = "Hello World";
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      font-family: var(--font-geist-mono)
                    </p>
                  </div>
                </div>
              </div>

              {/* Type Scale */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Type Scale</h4>
                <div className="space-y-4">
                  <div className="border-b border-border/40 pb-3">
                    <h1 className="text-5xl font-bold mb-2">Heading 1</h1>
                    <p className="text-xs text-muted-foreground font-mono">text-5xl (48px) • font-bold</p>
                    <p className="text-xs text-muted-foreground">Page titles, hero headings</p>
                  </div>
                  <div className="border-b border-border/40 pb-3">
                    <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
                    <p className="text-xs text-muted-foreground font-mono">text-4xl (36px) • font-bold</p>
                    <p className="text-xs text-muted-foreground">Section headers</p>
                  </div>
                  <div className="border-b border-border/40 pb-3">
                    <h3 className="text-2xl font-bold mb-2">Heading 3</h3>
                    <p className="text-xs text-muted-foreground font-mono">text-2xl (24px) • font-bold</p>
                    <p className="text-xs text-muted-foreground">Card titles, subsections</p>
                  </div>
                  <div className="border-b border-border/40 pb-3">
                    <h4 className="text-xl font-semibold mb-2">Heading 4</h4>
                    <p className="text-xs text-muted-foreground font-mono">text-xl (20px) • font-semibold</p>
                    <p className="text-xs text-muted-foreground">Component headers</p>
                  </div>
                  <div className="border-b border-border/40 pb-3">
                    <p className="text-base mb-2">Body Text (Base)</p>
                    <p className="text-xs text-muted-foreground font-mono">text-base (16px) • font-normal</p>
                    <p className="text-xs text-muted-foreground">Primary content, paragraphs</p>
                  </div>
                  <div className="border-b border-border/40 pb-3">
                    <p className="text-sm mb-2">Body Text (Small)</p>
                    <p className="text-xs text-muted-foreground font-mono">text-sm (14px) • font-normal</p>
                    <p className="text-xs text-muted-foreground">Supporting text, descriptions</p>
                  </div>
                  <div className="pb-3">
                    <p className="text-xs mb-2">Caption Text</p>
                    <p className="text-xs text-muted-foreground font-mono">text-xs (12px) • font-normal</p>
                    <p className="text-xs text-muted-foreground">Labels, metadata, timestamps</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Library */}
        <Card className="border-border/40 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Layout className="w-6 h-6 text-cyan-400" />
              Component Library
            </CardTitle>
            <CardDescription>Reusable UI components and patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Core Components</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-cyan-400 mb-2">Cards</h5>
                    <p className="text-xs text-muted-foreground mb-3">
                      Shadcn UI Card component with custom border styling
                    </p>
                    <div className="text-xs font-mono bg-black/50 rounded p-2 text-green-400">
                      border-border/40<br />
                      hover:border-cyan-500/50
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-cyan-400 mb-2">Buttons</h5>
                    <p className="text-xs text-muted-foreground mb-3">
                      Gradient primary buttons with hover effects
                    </p>
                    <div className="text-xs font-mono bg-black/50 rounded p-2 text-green-400">
                      bg-gradient-to-r<br />
                      from-cyan-500 to-blue-500
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-cyan-400 mb-2">Badges</h5>
                    <p className="text-xs text-muted-foreground mb-3">
                      Technology tags and status indicators
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                        Custom
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-cyan-400 mb-2">Navigation</h5>
                    <p className="text-xs text-muted-foreground mb-3">
                      Sticky header with smooth scroll and active state
                    </p>
                    <div className="text-xs font-mono bg-black/50 rounded p-2 text-green-400">
                      backdrop-blur-lg<br />
                      transition-all duration-300
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Design Patterns</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h5 className="text-sm font-semibold mb-2">Gradient Text</h5>
                    <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Example Text
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 font-mono">
                      bg-gradient-to-r bg-clip-text
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h5 className="text-sm font-semibold mb-2">Glass Effect</h5>
                    <div className="bg-background/60 backdrop-blur-lg border border-border/40 rounded p-3">
                      <p className="text-xs">Content</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 font-mono">
                      backdrop-blur-lg bg/60
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h5 className="text-sm font-semibold mb-2">Hover Transitions</h5>
                    <div className="bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-300 rounded p-3 cursor-pointer">
                      <p className="text-xs">Hover me</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 font-mono">
                      transition-all duration-300
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Philosophy */}
        <Card className="border-border/40 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Code className="w-6 h-6 text-cyan-400" />
              Development Philosophy
            </CardTitle>
            <CardDescription>Principles guiding technical decisions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Code Quality</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>TypeScript First:</strong> Strong typing for reliability and maintainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Component-Driven:</strong> Reusable, modular UI components with clear interfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Clean Architecture:</strong> Separation of concerns, organized folder structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>DRY Principles:</strong> Avoid repetition through abstraction and composition</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">User Experience</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Mobile-First:</strong> Responsive design that works on all screen sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Accessibility:</strong> Semantic HTML, ARIA labels, keyboard navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Performance:</strong> Optimized loading, lazy loading, efficient rendering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Smooth Interactions:</strong> Transitions, animations, loading states</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">AI Integration</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>MCP Protocol:</strong> Standardized tool calling for AI agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>RAG Architecture:</strong> Context-aware AI with knowledge retrieval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Tool-First Design:</strong> Functions that AI agents can discover and use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Human-Centered:</strong> AI augments, not replaces, human decision-making</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Deployment & DevOps</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Continuous Deployment:</strong> Automated builds and deployments via Vercel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Version Control:</strong> Git-based workflow with clear commit history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Environment Management:</strong> Separate dev/staging/production configs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Documentation:</strong> Clear README files, code comments, API docs</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Brand Values */}
        <Card className="border-border/40 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              Brand Values
            </CardTitle>
            <CardDescription>Core principles reflected in every project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-semibold text-cyan-400 mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Embracing cutting-edge technologies like AI agents, MCP protocol, and RAG systems to build
                  solutions that push boundaries
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-cyan-400 mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Commitment to high-quality code, comprehensive testing, and attention to detail in every aspect
                  of development
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold text-cyan-400 mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Open-source mindset, clear documentation, and tools designed for team workflows and AI agent
                  integration
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card className="border-2 border-cyan-500/50 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="w-6 h-6 text-cyan-400" />
              Technology Stack
            </CardTitle>
            <CardDescription>Modern tools powering the portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Next.js 15</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">React 19</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">TypeScript</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Tailwind CSS</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Shadcn UI</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Backend & AI</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">MCP Protocol</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">RAG</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Ollama</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Prisma</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Auth.js</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Deployment</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Vercel</Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Git</Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">CI/CD</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">VS Code</Badge>
                  <Badge variant="secondary">ESLint</Badge>
                  <Badge variant="secondary">Prettier</Badge>
                  <Badge variant="secondary">pnpm</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
