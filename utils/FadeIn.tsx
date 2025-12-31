"use client"

import { useState, useEffect, useRef } from "react"

export default function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'animate-fade-up' : 'opacity-0'} ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  )
}