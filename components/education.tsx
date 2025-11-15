import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "Master of Science",
    field: "Data Analytics and Artificial Intelligence",
    institution: "University of Tasmania",
    location: "Australia",
    status: "In Progress",
    color: "primary",
    type: "education",
  },
  {
    degree: "Bachelor of Science",
    field: "Information Technology",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Sri Lanka",
    status: "Completed - January 2020",
    color: "accent",
    type: "education",
  },
  {
    degree: "Diploma",
    field: "Spoken English",
    institution: "ICBT Campus",
    location: "Sri Lanka",
    status: "Completed",
    color: "chart-3",
    type: "education",
  },
  {
    degree: "Microsoft Certified",
    field: "Azure Developer Associate (AZ-204)",
    institution: "Microsoft",
    location: "Online",
    status: "Certified",
    color: "chart-4",
    type: "certification",
  },
]

export default function Education() {
  const educationItems = education.filter(item => item.type === "education")
  const certifications = education.filter(item => item.type === "certification")

  return (
    <section id="education" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-400">
            Education & Certifications
          </h2>
          
          {/* Education Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white/90 flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="space-y-3">
              {educationItems.map((edu, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#3a3a3a] border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="text-base font-semibold text-cyan-400">{edu.degree}</h4>
                      <span className="text-sm text-cyan-400/60">|</span>
                      <p className="text-sm font-medium text-cyan-300">{edu.field}</p>
                    </div>
                    <p className="text-sm text-white/70 mt-1">
                      {edu.institution}, {edu.location} • {edu.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-xl font-semibold text-white/90 flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-accent" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#3a3a3a] border border-border/50 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="text-base font-semibold text-cyan-400">{cert.degree}</h4>
                      <span className="text-sm text-cyan-400/60">|</span>
                      <p className="text-sm font-medium text-cyan-300">{cert.field}</p>
                    </div>
                    <p className="text-sm text-white/70 mt-1">
                      {cert.institution}, {cert.location} • {cert.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
