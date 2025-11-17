
import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import ChatSection from "@/components/chat-section"
import Contact from "@/components/contact"
import ChatWidget from "@/components/chat-widget"

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      if (window.location.hash) {
        window.location.hash = "";
      }
      window.scrollTo(0, 0);
    }, 0);
  }, [])
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ChatSection />
      <Contact />
      <ChatWidget />
    </main>
  )
}
