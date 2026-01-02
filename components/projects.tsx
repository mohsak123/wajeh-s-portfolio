/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { projects } from '../utils/data';

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
              className="bg-projects-card border-none py-0 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={`/projects/${project.id}`} className="block h-48 overflow-hidden relative cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </Link>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    <Link href={`/projects/${project.id}`}>
                      {project.title}
                    </Link>
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

              <CardFooter className="flex items-center justify-between pt-2 pb-6 px-6">

                <div className="flex gap-3">
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center shadow-lg shadow-primary/20 justify-center gap-2 bg-primary cursor-pointer text-primary-foreground font-semibold py-2 px-4 rounded-full hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Demo</span>
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center border-white/10 justify-center gap-2 bg-secondary border text-primary font-medium py-2 px-4 rounded-full transition-all duration-300 text-xs sm:text-sm hover:bg-secondary/80"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Code</span>
                  </Link>
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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