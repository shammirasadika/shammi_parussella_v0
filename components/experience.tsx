"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Technical Consultant/Software Engineer",
    company: "CONIFS Global (Pvt) Ltd",
    companyUrl: "https://www.conifs.com",
    period: "May 2023 - April 2024",
    description: [
      "Designed and maintained database structures including tables, relationships, and data types",
      "Created advanced T-SQL queries and optimized performance for data operations",
      "Coordinated with internal teams to develop solutions for technical needs",
      "Conducted training sessions for software, hardware, and systems",
    ],
    technologies: [".NET Core", "Azure DB", "ASP.NET", "Azure Functions", "React Native", "MS SQL", "Azure DevOps"],
  },
  {
    title: "Software Engineer",
    company: "Acentura (Pvt) Ltd",
    companyUrl: "https://www.acentura.com",
    period: "April 2022 - May 2023",
    description: [
      "Collaborated with teams to improve existing software and design new applications",
      "Developed standard operating procedures and investigated new technologies",
      "Drafted data models and visual diagrams for database structures",
    ],
    technologies: [".NET Core", "REST API", "MS SQL", "ASP.NET"],
  },
  {
    title: "Associate Software Engineer",
    company: "DMS Software Engineering (Pvt) Ltd",
    companyUrl: "https://www.dms.lk",
    period: "February 2021 - April 2022",
    description: [
      "Developed new software products from the ground up",
      "Created advanced T-SQL queries and stored procedures",
      "Investigated and troubleshooted database issues",
    ],
    technologies: [".NET Core", "REST API", "MS SQL", "Windows Service", "ASP.NET"],
  },
  {
    title: "Trainee Software Engineer",
    company: "Flexiv Micro System (Pvt)",
    companyUrl: "#",
    period: "December 2019 - February 2021",
    description: ["Wrote code for program components", "Created stored procedures and SQL functions"],
    technologies: [".NET", "SQL Server", "C#"],
  },
]

function ExperienceCard({ experience, index }: { experience: (typeof experiences)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <CardTitle className="text-xl text-foreground">{experience.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 text-base">
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-semibold"
                >
                  {experience.company}
                  {experience.companyUrl !== "#" && <ExternalLink className="w-3 h-3" />}
                </a>
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-xs whitespace-nowrap bg-muted/50">
              {experience.period}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-foreground/70">
            {experience.description.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed">
                <span className="text-accent mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
