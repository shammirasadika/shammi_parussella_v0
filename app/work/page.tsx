import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

// Dummy testimonials data
const testimonials = [
  {
    name: "John Doe",
    role: "Tech Lead, Acme Corp",
    quote: "Shammi consistently delivers high-quality solutions and is a pleasure to work with."
  },
  {
    name: "Jane Smith",
    role: "Project Manager, InnovateX",
    quote: "Professional, reliable, and always goes the extra mile. Highly recommended!"
  }
];

export default function WorkPage() {
  return (
    <section className="container mx-auto py-16 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Experience & Resume</h1>

      {/* Experience Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <ul className="space-y-6">
          <li>
            <div className="font-bold">Full Stack Developer & .NET Consultant</div>
            <div className="text-muted-foreground">Freelance / Contract | 2021 - Present</div>
            <div>Consulting, training, and solution development for .NET and web projects.</div>
          </li>
          <li>
            <div className="font-bold">Software Engineer</div>
            <div className="text-muted-foreground">Acme Corp | 2019 - 2021</div>
            <div>Developed scalable web applications and contributed to team success.</div>
          </li>
          {/* Add more experience items as needed */}
        </ul>
      </div>

      {/* Download Resume Button */}
      <div className="mb-10 text-center">
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <a href="/Shammi_Parussella_Resume.pdf" download>
            <Download className="w-5 h-5 mr-2 inline" />
            Download Resume
          </a>
        </Button>
      </div>

      {/* Testimonials Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Testimonials</h2>
        <div className="space-y-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border rounded-lg p-4 shadow-sm bg-background">
              <blockquote className="italic mb-2">“{t.quote}”</blockquote>
              <div className="font-bold">{t.name}</div>
              <div className="text-muted-foreground text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
