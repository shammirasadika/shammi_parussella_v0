import { GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "Master of Science",
    field: "Data Analytics and Artificial Intelligence",
    institution: "University of Tasmania",
    location: "Australia",
    status: "In Progress",
    color: "primary",
  },
  {
    degree: "Bachelor of Science",
    field: "Information Technology",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Sri Lanka",
    status: "Completed - January 2020",
    color: "accent",
  },
  {
    degree: "Diploma",
    field: "Spoken English",
    institution: "ICBT Campus",
    location: "Sri Lanka",
    status: "Completed",
    color: "chart-3",
  },
]

export default function Education() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-[#3a3a3a] border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white/10">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-xl text-white/90">{edu.degree}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        <span className="font-semibold text-white">
                          {edu.field}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm text-white/80">
                    <p className="font-medium text-white/90">{edu.institution}</p>
                    <p>{edu.location}</p>
                    <p className="text-white/70">{edu.status}</p>
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
