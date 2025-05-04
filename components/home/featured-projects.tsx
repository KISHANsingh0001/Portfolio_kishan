"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";
import Link from "next/link";


export function FeaturedProjects() {

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-2 transition-all hover:border-primary">
                  {project.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                        width={600}
                        height={400}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    {/* <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline">+{project.technologies.length - 4}</Badge>
                      )}
                    </div> */}
                    {/* <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="mr-2 h-4 w-4 text-primary mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul> */}
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild variant="default" size="sm">
                      <Link href={`/projects/${project.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <div className="flex-1"></div>
                    {project.github && (
                      <Button asChild variant="ghost" size="icon">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild variant="ghost" size="icon">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* <Button asChild variant="outline" className="mt-8">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button> */}
        </div>
      </div>
    </section>
  );
}