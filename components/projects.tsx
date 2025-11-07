"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Enterprise Resource Planning System",
    description:
      "Comprehensive ERP solution built with .NET Core for managing business operations, inventory, and customer relationships. Integrated with Azure services for cloud scalability.",
    technologies: [".NET Core", "Azure DB", "React", "MS SQL", "Azure Functions"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing business metrics and KPIs in real-time. Built with modern frontend frameworks and RESTful APIs for data aggregation.",
    technologies: ["React", "ASP.NET Core", "SignalR", "Chart.js", "Azure"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Banking Application",
    description:
      "Cross-platform mobile banking app with secure authentication, transaction processing, and account management. Implemented with React Native and secure backend APIs.",
    technologies: ["React Native", ".NET Core", "Azure", "REST API", "SQL Server"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Inventory Management System",
    description:
      "Automated inventory tracking system with barcode scanning, stock alerts, and reporting. Designed for manufacturing and retail operations.",
    technologies: [".NET Framework", "ASP.NET MVC", "MS SQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
              Featured Projects
            </h2>
            <p className="text-white/70 text-base max-w-2xl mx-auto">
              Enterprise solutions and applications showcasing technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-[#3a3a3a] border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg md:text-xl text-white group-hover:text-white/80 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.liveUrl !== "#" && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-white/70 hover:text-primary"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.githubUrl !== "#" && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-white/70 hover:text-primary"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-white/80 leading-relaxed mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-[#4a5568] text-white/90 border-white/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
