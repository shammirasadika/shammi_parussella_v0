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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-[#3a3a3a] border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-white">
                    <span
                      className="w-2 h-2 rounded-full"
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
                        className="bg-[#4a5568] text-white/90 border-white/20 hover:bg-[#5a6578] transition-colors text-xs"
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
