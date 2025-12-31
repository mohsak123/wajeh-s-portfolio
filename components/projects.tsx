import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "@/utils/FadeIn"


const projects = [
  {
    title: "E-Commerce App",
    description: "Full-featured shopping app with cart, payments, and order tracking. Built with Flutter and Firebase.",
    image: "/images/modern-mobile-shopping-app-interface.jpg",
    tags: ["Flutter", "Firebase", "Stripe", "Provider"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Fitness Tracker",
    description: "Track workouts, monitor progress, and achieve fitness goals. Features custom animations and charts.",
    image: "/images/fitness-tracking-mobile-app-dashboard.jpg",
    tags: ["Flutter", "SQLite", "Charts", "GetX"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Social Media App",
    description: "Connect with friends, share moments, and discover content. Real-time messaging and notifications.",
    image: "/images/social-media-mobile-app-feed.jpg",
    tags: ["Flutter", "Node.js", "Socket.io", "Bloc"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather App",
    description: "Beautiful weather forecasts with detailed metrics and location-based alerts. Clean UI design.",
    image: "/images/weather-forecast-mobile-app-interface.jpg",
    tags: ["Flutter", "REST API", "Animations", "Riverpod"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Manager",
    description: "Organize tasks, set priorities, and boost productivity. Features drag-and-drop and reminders.",
    image: "/images/task-management-app.png",
    tags: ["Flutter", "Hive", "Notifications", "BLoC"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Recipe App",
    description: "Discover delicious recipes, save favorites, and create shopping lists. Beautiful food photography.",
    image: "/images/recipe-cooking-mobile-app.jpg",
    tags: ["Flutter", "GraphQL", "Caching", "Provider"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl">

        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent Flutter applications, demonstrating expertise in mobile development and UI/UX
            design.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    width={1000}
                    height={1000}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-6">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="hover:bg-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}