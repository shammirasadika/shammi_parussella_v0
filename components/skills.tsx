"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Backend Development",
    color: "primary",
    skills: [".NET Framework", ".NET Core", "C#", "ASP.NET MVC", "ASP.NET Core", "Entity Framework", "RESTful APIs"],
  },
  {
    title: "Frontend Development",
    color: "accent",
    skills: ["React", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript", "React Native"],
  },
  {
    title: "Database & Cloud",
    color: "chart-3",
    skills: ["MS SQL Server", "MySQL", "T-SQL", "Azure DB", "Azure Functions", "Azure Logic Apps", "Microsoft Azure"],
  },
  {
    title: "Tools & Practices",
    color: "chart-4",
    skills: ["Visual Studio", "Git", "Azure DevOps", "Unit Testing", "TDD", "NUnit", "xUnit"],
  },
  {
    title: "Other Technologies",
    color: "chart-5",
    skills: ["PHP", "Windows Service", "Azure Storage", "Azure Event Grid", "List & Label"],
  },
]

export default function Skills() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full bg-${category.color}`}
                      style={{
                        backgroundColor: `var(--color-${category.color})`,
                      }}
                    />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-muted/50 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
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
