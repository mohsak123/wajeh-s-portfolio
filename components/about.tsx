/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card"
import FadeIn from "@/utils/FadeIn"
import { Code2, Smartphone, Zap, Users } from "lucide-react"


const skills = [
  {
    icon: Code2,
    title: "Flutter Development",
    description: "Expert in building cross-platform apps with Flutter, Dart, and modern state management solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile UI/UX",
    description: "Creating intuitive and beautiful user interfaces that follow platform design guidelines.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing app performance, reducing load times, and ensuring smooth 60fps animations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams, communicating clearly, and delivering projects on time.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">

        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate Flutter developer with 5+ years of experience building mobile applications. I specialize in
            creating elegant, performant apps that users love.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="p-6 hover:shadow-md transition-shadow h-full">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.2}>
          <Card className="p-8 bg-linear-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started my journey as a mobile developer in 2018, working with native Android development. When I
                  discovered Flutter in 2019, I was amazed by its ability to create beautiful, performant apps for
                  multiple platforms with a single codebase.
                </p>
                <p>
                  Since then, I've worked on numerous projects ranging from e-commerce platforms to social media apps,
                  always focusing on delivering exceptional user experiences and clean, maintainable code.
                </p>
                <p>
                  I'm constantly learning new technologies and best practices to stay at the forefront of mobile
                  development. When I'm not coding, you can find me contributing to open-source projects or writing
                  technical articles to help other developers.
                </p>
              </div>
            </div>
          </Card>
        </FadeIn>

      </div>
    </section>
  )
}