"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href={'/'}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            {"<FlutterDev />"}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </button>

            <div className="flex items-center gap-4">
              <Button onClick={() => scrollToSection("contact")} className="cursor-pointer shadow-lg shadow-primary/20">
                Get in Touch
              </Button>
              <ModeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />

            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full">
              Get in Touch
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}