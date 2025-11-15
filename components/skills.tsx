"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Backend Development",
    color: "primary",
    skills: [".NET Framework", ".NET Core", "C#", "ASP.NET MVC", "ASP.NET Core", "Entity Framework", "LINQ", "RESTful APIs", "Python", "Laravel", "PHP"],
  },
  {
    title: "Frontend Development",
    color: "accent",
    skills: ["React", "Next.js", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript", "jQuery", "React Native"],
  },
  {
    title: "Database & Cloud",
    color: "chart-3",
    skills: ["MS SQL Server", "MySQL", "PostgreSQL", "MongoDB", "T-SQL", "Azure DB", "Neon DB", "Azure Functions", "Azure Logic Apps", "Microsoft Azure", "Google Cloud", "Vercel"],
  },
  {
    title: "Tools & Practices",
    color: "chart-4",
    skills: ["Visual Studio", "Git", "Azure DevOps", "Unit Testing", "TDD", "NUnit", "xUnit"],
  },
  {
    title: "AI & ML Technologies",
    color: "chart-5",
    skills: ["OpenAI", "Groq", "RAG (Retrieval-Augmented Generation)", "LLM Integration", "Natural Language Processing (NLP)"],
  },
  {
    title: "Other Technologies",
    color: "chart-2",
    skills: ["Windows Service", "Azure Storage", "Azure Event Grid", "List & Label"],
  },
  {
    title: "Soft Skills",
    color: "chart-1",
    skills: ["Problem Solving", "Team Collaboration", "Technical Leadership", "Communication", "Mentoring", "Agile Methodology", "Critical Thinking", "Time Management"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
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
                  <CardTitle className="text-lg flex items-center gap-2 text-cyan-400">
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
