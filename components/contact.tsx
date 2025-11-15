"use client"

import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" })
          setSubmitStatus("idle")
        }, 3000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <section id="get-in-touch" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Get In Touch
          </h2>

          <Card className="bg-transparent backdrop-blur border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Send className="w-5 h-5 text-blue-400" />
                    <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-muted/30 border border-border/40 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-muted/30 border border-border/40 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 bg-muted/30 border border-border/40 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                      size="default"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <p className="text-xs text-green-400 text-center">
                        ✓ Message sent successfully! I'll get back to you soon.
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-xs text-red-400 text-center">
                        ✗ Failed to send message. Please try again.
                      </p>
                    )}
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>

                  <div className="space-y-4">
                    <a
                      href="mailto:shammirasadika123@gmail.com"
                      className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <span>shammirasadika123@gmail.com</span>
                    </a>

                    <a
                      href="tel:+61459497554"
                      className="flex items-center gap-3 text-sm text-foreground/80 hover:text-accent transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-4 h-4 text-accent" />
                      </div>
                      <span>+61 459497554</span>
                    </a>

                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="p-2 rounded-lg bg-chart-3/10">
                        <MapPin className="w-4 h-4 text-chart-3" />
                      </div>
                      <span>Melbourne, Australia</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Connect With Me</h4>

                    <div className="space-y-2">
                      <Button asChild className="w-full justify-start bg-primary hover:bg-primary/90" size="default">
                        <a href="https://github.com/shammirasadika" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub Profile
                        </a>
                      </Button>

                      <Button asChild variant="outline" className="w-full justify-start bg-transparent" size="default">
                        <a
                          href="https://www.linkedin.com/in/shammi-parussella-301603197"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn Profile
                        </a>
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                      vision.
                    </p>
                  </div>
                </div>
              </div>

              {/* Resend Integration Section */}
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
