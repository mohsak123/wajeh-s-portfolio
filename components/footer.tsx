/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import FadeIn from "@/utils/FadeIn"
import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa6";

export function Footer() {

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
    <footer className="border-t border-border bg-card overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <FadeIn delay={0}>
            <h3 className="text-xl font-bold mb-4 text-primary">{"<FlutterDev />"}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building exceptional mobile experiences with Flutter. Let's create something amazing together.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 lg:gap-8">
              <li>
                <button onClick={() => scrollToSection("projects")} className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>

              <Link
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                
                <FaWhatsapp className="h-5 w-5" />
              </Link>

              <Link
                href="mailto:hello@example.com"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Flutter Developer Portfolio. All rights reserved.</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}