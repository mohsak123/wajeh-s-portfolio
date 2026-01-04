/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Calendar, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/utils/data";
import FadeIn from "@/utils/FadeIn";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  gallery?: string[];
  longDescription?: string;
  date?: string;
  category?: string;
}

const ProjectDetails = () => {
  const params = useParams();
  const projectId = params?.id ? Number(params.id) : null;
  const project = projects.find((p) => p.id === projectId) as Project | undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/#projects">
          <Button>Back to Projects</Button>
        </Link>
      </div>
    );
  }

  const gallery = project.gallery || [project.image, project.image, project.image, project.image];
  const longDescription = project.longDescription || project.description;
  const date = project.date || "2024";
  const category = project.category || "Application";

  return (
    <div className="min-h-screen bg-background text-foreground pb-12 pt-20 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">

        <FadeIn delay={0.1}>
          <Link
            href="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {date}
                </span>
                <span className="flex items-center gap-1">
                  <Layers className="w-4 h-4" /> {category}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button asChild variant="outline" className="rounded-full gap-2">
                <Link href={project.github} target="_blank">
                  <Github className="w-4 h-4" /> Code
                </Link>
              </Button>
              <Button asChild className="rounded-full gap-2 shadow-lg shadow-primary/20">
                <Link href={project.demo} target="_blank">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="relative w-full aspect-video md:aspect-21/9 rounded-xl overflow-hidden mb-12 border bg-muted shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold">About Project</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              {longDescription !== project.description && (
                <p className="text-base leading-relaxed text-muted-foreground/80">
                  {longDescription}
                </p>
              )}
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section className="space-y-4 md:space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">App Gallery</h2>
              <div className="h-px bg-border flex-1 ml-6"></div>
            </div>

            <div className="flex justify-center px-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-4xl"
              >
                <CarouselContent className="-ml-4">
                  {gallery.map((img: string, index: number) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="bg-projects-card pt-0 border-none overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative">
                          <CardContent className="flex aspect-9/16 items-center justify-center p-0 relative bg-muted">
                            <Image
                              src={img}
                              width={1000}
                              height={1000}
                              alt={`${project.title} Screenshot ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex cursor-pointer" />
                <CarouselNext className="hidden md:flex cursor-pointer" />
              </Carousel>
            </div>
          </section>
        </FadeIn>

      </div>
    </div>
  );
};

export default ProjectDetails;