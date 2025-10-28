import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get In Touch</span>
          </h2>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>

                  <div className="space-y-4">
                    <a
                      href="mailto:shammirasadika123@gmail.com"
                      className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span>shammirasadika123@gmail.com</span>
                    </a>

                    <a
                      href="tel:+61459497554"
                      className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <span>+61 459497554</span>
                    </a>

                    <div className="flex items-center gap-3 text-foreground/80">
                      <div className="p-2 rounded-lg bg-chart-3/10">
                        <MapPin className="w-5 h-5 text-chart-3" />
                      </div>
                      <span>Melbourne, Australia</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Connect With Me</h3>

                  <div className="space-y-3">
                    <Button asChild className="w-full justify-start bg-primary hover:bg-primary/90" size="lg">
                      <a href="https://github.com/shammirasadika" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-3" />
                        GitHub Profile
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="w-full justify-start bg-transparent" size="lg">
                      <a
                        href="https://www.linkedin.com/in/shammi-parussella-301603197"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 mr-3" />
                        LinkedIn Profile
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                    vision.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>© 2025 Shammi Parussella. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
