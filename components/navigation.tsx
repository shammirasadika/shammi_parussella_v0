"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work / Resume", href: "/work" },
  { name: "Projects", href: "#projects" },
  { name: "AI & MCP", href: "/ai-mcp" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#get-in-touch" },
]

const portfolioPages = [
  { name: "🚀 Journey", href: "/journey" },
  { name: "🚀 Project Showcase", href: "/projects" },
  { name: "📦 Repositories", href: "/repositories" },
  { name: "🎮 Live Demos", href: "/demos" },
]

const week10Pages = [
  { name: "🎤 Presentation", href: "/presentation" },
  { name: "🎯 Career Plan", href: "/career-plan" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => {
          const element = document.querySelector(item.href)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              id: item.href.replace("#", ""),
              top: rect.top,
              bottom: rect.bottom,
            }
          }
          return null
        })
        .filter(Boolean)

      const currentSection = sections.find(
        (section) => section && section.top <= 100 && section.bottom > 100
      )

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        const offset = 80 // Height of sticky nav
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border/40 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Name */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#home")
              }}
              className="text-xl md:text-2xl font-bold hover:text-cyan-400 transition-colors"
            >
              <span className="text-yellow-400">Shammi Parussella</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.href.replace("#", "")
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-accent/50`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Portfolio Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 flex items-center gap-1"
                >
                  Portfolio
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full right-0 mt-2 w-56 bg-background/95 backdrop-blur-lg border border-border/40 rounded-lg shadow-xl transition-all duration-200 ${
                    isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="py-2">
                    <div className="px-4 py-1 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      Portfolio
                    </div>
                    {portfolioPages.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="my-1 border-t border-border/40" />
                    <div className="px-4 py-1 text-xs font-semibold text-purple-400 uppercase tracking-wider">
                      Professional
                    </div>
                    {week10Pages.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[600px] border-b border-border/40" : "max-h-0"
          }`}
        >
          <div className="bg-background/95 backdrop-blur-lg px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-cyan-400 bg-cyan-500/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Portfolio Section */}
            <div className="pt-2 pb-1">
              <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Portfolio
              </div>
              {portfolioPages.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Week 10 Section */}
            <div className="pt-1 pb-1">
              <div className="px-4 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">
                Professional
              </div>
              {week10Pages.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  )
}
