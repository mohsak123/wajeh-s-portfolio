'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none opacity-80" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center z-10">
        <div className="space-y-6">

          <div className="animate-zoom-in" style={{ animationDelay: '0s' }}>
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4 shadow-sm shadow-primary/10">
              Flutter Developer
            </div>
          </div>

          <div
            className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20 mb-8 animate-zoom-in"
            style={{ animationDelay: '0.2s' }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Building Beautiful
            <span className="block text-primary mt-2 drop-shadow-sm">Cross-Platform Apps</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            Crafting seamless mobile experiences with Flutter. Specialized in creating high-performance, pixel-perfect
            applications for iOS and Android.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Button size="lg" onClick={() => scrollToSection("projects")} className="min-w-35 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="min-w-35">
              Contact Me
            </Button>
          </div>

          <div
            className="flex items-center justify-center gap-4 pt-8 animate-fade-up"
            style={{ animationDelay: '1s' }}
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}