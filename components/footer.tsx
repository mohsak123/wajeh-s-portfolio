/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import FadeIn from "@/utils/FadeIn"
import { Facebook, Linkedin, Mail } from "lucide-react"
import Link from "next/link" // تأكد أنك مستورد Link
import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa6";

export function Footer() {

  // ملاحظة: المتغير isScrolled موجود بس مو مستخدم بالـ Return تحت
  // خليته في حال كنت ناوي تستخدمه لتغيير ستايل الـ Footer
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // تم حذف دالة scrollToSection لأننا سنستخدم الروابط المباشرة

  return (
    <footer className="border-t border-border bg-card overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 md:justify-items-center gap-8 mb-8">

          <FadeIn delay={0}>
            <h3 className="text-xl font-bold mb-4 text-primary">{"<FlutterDev />"}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building exceptional mobile experiences with Flutter.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 lg:gap-8">
              <li>
                {/* استخدمنا a بدلاً من Link عشان يجبر المتصفح يعمل Scroll كل مرة */}
                <a 
                  href={"/#projects"} 
                  className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href={"/#about"} 
                  className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href={"/#contact"} 
                  className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {/* قمت بتحديث روابط السوشال ميديا لتستخدم <a> للروابط الخارجية كما اتفقنا للأداء الأفضل */}
              <a
                href="https://www.linkedin.com/in/wajih-hawari-a432a123b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/wajeh.hware/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://wa.me/+963996972054"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>

              <a
                href="mailto:wajihhoware@gmail.com"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
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