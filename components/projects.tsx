"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Career Assistant AI",
    description:
      "AI-powered career guidance system using RAG (Retrieval-Augmented Generation) and LLM technologies. Provides personalized career recommendations, job matching, and professional development guidance through intelligent conversation.",
    technologies: ["Python", "RAG", "LLM", "OpenAI", "Next.js", "NLP"],
    period: "",
    company: "University of Tasmania",
    category: "University",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Adventure Event Management System",
    description:
      "Comprehensive event booking and management platform for adventure activities. Features user registration, event scheduling, booking management, and participant tracking with modern web technologies.",
    technologies: ["PHP", "Laravel", "React", "Redux", "jQuery", "MySQL"],
    period: "",
    company: "University of Tasmania",
    category: "University",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "MediHelp Research - Health Prediction System",
    description:
      "Android-based health prediction application using Natural Language Processing to analyze symptoms and predict potential health issues. Provides intelligent health suggestions and recommendations to patients through NLP-driven diagnosis.",
    technologies: ["Android", "NLP", "Python", "Machine Learning", "Java"],
    period: "",
    company: "Sri Lanka Institute of Information Technology",
    category: "University",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "MAS NOYON SIS/GIS SYSTEM",
    description:
      "Spatial Information System (SIS) and Geographic Information System (GIS) solution for MAS Noyon. Advanced mapping and spatial data management system for operational excellence and decision-making support.",
    technologies: ["ASP.NET", "MS SQL", "GIS Technologies", ".NET Core"],
    period: "Jul 2022 - Oct 2022",
    company: "Acentura Inc",
    category: "Professional",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Routing Flexibility System",
    description:
      "Dynamic routing solution providing flexible path optimization and management capabilities. Enables efficient route planning and real-time adjustments for improved operational workflows.",
    technologies: ["ASP.NET", "MS SQL", ".NET Core", "REST API"],
    period: "Apr 2022 - Jul 2022",
    company: "Acentura Inc",
    category: "Professional",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Warehouse Management System",
    description:
      "Comprehensive warehouse operations system for inventory tracking, order fulfillment, and logistics management. Features real-time stock monitoring, barcode integration, and automated workflows.",
    technologies: [".NET Core", "MS SQL", "REST API", "JavaScript"],
    period: "Jan 2020 - Jul 2020",
    company: "Flexiv Micro System",
    category: "Professional",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Pest Control Management System",
    description:
      "Complete pest control management solution for scheduling treatments, tracking customer service history, and managing field operations. Includes RDLC reporting, REST API integration, and Windows Service components.",
    technologies: [".NET Core", "ASP.NET MVC", ".NET Web API", "LINQ", "MS SQL", "RDLC Reports", "Visual Studio 2019", "Windows Service"],
    period: "",
    company: "DMS Software Engineering",
    category: "Professional",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Report Module System",
    description:
      "Advanced reporting module with Crystal Reports integration for generating comprehensive business reports. Features customizable templates, data visualization, and export capabilities.",
    technologies: ["ASP.NET", "MS SQL 2015", "Bootstrap", "Crystal Reports"],
    period: "",
    company: "DMS Software Engineering",
    category: "Professional",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "InventroLink - Inventory Management System",
    description:
      "Advanced modular inventory management solution featuring three integrated modules: User Module for staff operations, Admin Module for system management and reporting, and Azure Integration Module leveraging Azure Functions and Logic Apps for automated workflows and real-time data synchronization.",
    technologies: [".NET Core", "Azure Functions", "Azure Logic Apps", "MS SQL", "React", "jQuery", "Azure DB", "REST API"],
    period: "",
    company: "CONIFS Global",
    category: "Professional",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Enterprise Resource Planning (ERP) System",
    description:
      "Comprehensive ERP solution integrating finance, HR, inventory, and operations modules. Streamlines business processes with real-time data synchronization, automated workflows, and advanced reporting for enterprise-wide efficiency.",
    technologies: ["C#", "ASP.NET Web Forms", "MS SQL", "ADO.NET", "Crystal Reports"],
    period: "",
    company: "Flexiv Micro System",
    category: "Professional",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Payroll Management System",
    description:
      "Automated payroll processing system handling salary calculations, tax deductions, benefits management, and compliance reporting. Features employee self-service portal, direct deposit integration, and comprehensive audit trails.",
    technologies: [".NET Core", "ASP.NET", "MS SQL", "Azure", "REST API"],
    period: "",
    company: "DMS Software Engineering",
    category: "Professional",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Property Management System",
    description:
      "Modern property management platform for landlords and tenants featuring lease management, maintenance tracking, payment processing, and automated communications. Streamlines property operations and tenant relations.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    period: "",
    company: "Flexiv",
    category: "Professional",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Event Management System",
    description:
      "Complete event management solution for planning, coordinating, and executing events. Includes attendee registration, venue booking, resource allocation, ticketing, and real-time event tracking capabilities.",
    technologies: [".NET Core", "React", "MS SQL", "Azure"],
    period: "",
    company: "CONIFS Global",
    category: "Professional",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const universityProjects = projects.filter(p => p.category === "University")
  const professionalProjects = projects.filter(p => p.category === "Professional")

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

          {/* Professional Projects */}
          {professionalProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Professional Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {professionalProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="group bg-[#3a3a3a] border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg md:text-xl text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            {project.title}
                          </CardTitle>
                          {(project.period || project.company) && (
                            <div className="flex flex-wrap gap-2 mt-2 text-xs text-white/60">
                              {project.period && <span>{project.period}</span>}
                              {project.period && project.company && <span>•</span>}
                              {project.company && <span>{project.company}</span>}
                            </div>
                          )}
                        </div>
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
          )}

          {/* University Projects */}
          {universityProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                University Projects
              </h3>
              <div className="space-y-3">
                {universityProjects.map((project, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-[#3a3a3a] border border-border/50 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h4 className="text-base font-semibold text-cyan-400">{project.title}</h4>
                        <span className="text-sm text-cyan-400/60">|</span>
                        <p className="text-sm text-white/80">{project.company}</p>
                      </div>
                      <p className="text-sm text-white/70 mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
