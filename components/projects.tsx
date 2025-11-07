"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Enterprise Resource Planning (ERP) System",
    description:
      "Comprehensive ERP solution integrating finance, HR, inventory, and operations modules. Streamlines business processes with real-time data synchronization, automated workflows, and advanced reporting for enterprise-wide efficiency.",
    technologies: ["C#", "ASP.NET Web Forms", "MS SQL", "ADO.NET", "Crystal Reports"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Payroll Management System",
    description:
      "Automated payroll processing system handling salary calculations, tax deductions, benefits management, and compliance reporting. Features employee self-service portal, direct deposit integration, and comprehensive audit trails.",
    technologies: [".NET Core", "ASP.NET", "MS SQL", "Azure", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Pest Control Management System",
    description:
      "Comprehensive pest control management solution for scheduling treatments, tracking customer service history, and managing field operations. Features automated scheduling, mobile access for technicians, and customer portal.",
    technologies: ["ASP.NET MVC", ".NET Web API", "LINQ", "MS SQL", "Azure", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "InventroLink - Inventory Management System",
    description:
      "Advanced modular inventory management solution featuring three integrated modules: User Module for staff operations, Admin Module for system management and reporting, and Azure Integration Module leveraging Azure Functions and Logic Apps for automated workflows and real-time data synchronization.",
    technologies: [".NET Core", "Azure Functions", "Azure Logic Apps", "MS SQL", "React", "jQuery", "Azure DB", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cutting Edge Property Management System",
    description:
      "Modern property management platform for landlords and tenants featuring lease management, maintenance tracking, payment processing, and automated communications. Streamlines property operations and tenant relations.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Event Management System",
    description:
      "Complete event management solution for planning, coordinating, and executing events. Includes attendee registration, venue booking, resource allocation, ticketing, and real-time event tracking capabilities.",
    technologies: ["ASP.NET Core", "React", "MS SQL", "Azure"],
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
