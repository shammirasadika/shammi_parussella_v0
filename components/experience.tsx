"use client"

import { Briefcase, Calendar, ExternalLink } from "lucide-react"
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
  return (
    <div>
      <Card className="group relative bg-[#3a3a3a] border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="space-y-2 flex-1">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-white/10 text-white">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="space-y-1.5">
                  <CardTitle className="text-lg font-semibold text-white">
                    {experience.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-base font-semibold hover:underline transition-colors flex items-center gap-1.5"
                    >
                      <span>{experience.company}</span>
                      {experience.companyUrl !== "#" && (
                        <ExternalLink className="w-3.5 h-3.5" />
                      )}
                    </a>
                  </CardDescription>
                </div>
              </div>
            </div>
            <Badge 
              variant="outline" 
              className="text-xs font-medium whitespace-nowrap bg-white/10 text-white border-white/30 flex items-center gap-1.5"
            >
              <Calendar className="w-3 h-3" />
              {experience.period}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2.5 text-white/80">
            {experience.description.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                <span className="text-white font-semibold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {experience.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-[#4a5568] text-white/90 border-white/20 hover:bg-[#5a6578] transition-colors text-xs font-medium"
              >
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 hover:scale-105 transition-transform duration-300">
              Experience
            </h2>
            <p className="text-white/70 text-base max-w-2xl mx-auto">
              4+ years of professional software development experience
            </p>
          </div>
          
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
