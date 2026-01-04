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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href={"/#projects"}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href={"/#about"}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href={"/#contact"}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </a>

            <div className="flex items-center gap-4">
              <a href={"/#contact"}>
                <Button className="cursor-pointer shadow-lg shadow-primary/20">
                  Get in Touch
                </Button>
              </a>
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />

            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)} // نسكر القائمة لما نكبس
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors text-left"
            >
              Contact
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full">
              <Button className="w-full">
                Get in Touch
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}