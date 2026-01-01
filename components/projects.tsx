/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

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
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-projects-bg transition-colors duration-300">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent Flutter applications, demonstrating expertise in mobile development and UI/UX design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-projects-card border-none overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground/80 mt-2 line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-projects-bg py-1 px-2 text-foreground hover:bg-background/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2 pb-6 px-6">

                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center justify-center gap-2 bg-primary cursor-pointer text-primary-foreground font-semibold py-2 px-5 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-300 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Demo</span>
                </Link>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center border-white/10 justify-center gap-2 bg-secondary cursor-pointer border text-primary font-medium py-2 px-5 rounded-full transition-all duration-300 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </Link>

              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;