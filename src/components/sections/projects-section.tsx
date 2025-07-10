
"use client";

import type { Project } from "@/lib/portfolio-data";
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import React, { useState, useEffect } from "react";

const CUBE_FACE_WIDTH = 384; // Corresponds to w-96
const CUBE_TRANSLATE_Z = CUBE_FACE_WIDTH / 2;

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-sm h-full bg-card/80 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-card-foreground">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        {project.description.map((desc, idx) => (
          <p key={idx} className="text-base text-card-foreground/90 leading-relaxed">
            {desc}
          </p>
        ))}
        <div className="pt-2">
          <h4 className="text-sm font-medium text-secondary-foreground mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 flex-wrap gap-2">
        <div className="flex w-full items-center justify-start space-x-3">
          {project.githubLink && (
            <Button variant="secondary" size="sm" asChild>
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
          {project.liveLink && (
            <Button variant="default" size="sm" asChild>
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export function ProjectsSection() {
  const [rotation, setRotation] = useState(0);
  const [currentFace, setCurrentFace] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = portfolioData.projects;
  const totalFaces = projects.length + 1; // +1 for the initial face

  const rotateCube = (direction: 'next' | 'prev') => {
    const newRotation = direction === 'next' ? rotation - 90 : rotation + 90;
    setRotation(newRotation);

    if (direction === 'next') {
      setCurrentFace((prev) => (prev + 1) % totalFaces);
    } else {
      setCurrentFace((prev) => (prev - 1 + totalFaces) % totalFaces);
    }
  };

  const faceTransforms = [
    `rotateY(0deg) translateZ(${CUBE_TRANSLATE_Z}px)`, // Front
    `rotateY(90deg) translateZ(${CUBE_TRANSLATE_Z}px)`, // Right
    `rotateY(180deg) translateZ(${CUBE_TRANSLATE_Z}px)`, // Back
    `rotateY(-90deg) translateZ(${CUBE_TRANSLATE_Z}px)`, // Left
  ];

  if (!isClient) {
    return (
      <section id="projects" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.projects.map((project, index) => (
               <div key={project.id} className="animate-pulse bg-muted rounded-lg h-96 w-full"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="section-title animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            Projects
          </h2>
          <p
            className="section-subtitle animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            Rotate the cube to see some of the key projects I've worked on.
          </p>
        </div>

        <div className="scene w-full h-[500px] flex flex-col items-center justify-center">
          <div className="relative w-96 h-96">
            <div
              className="cube w-full h-full"
              style={{ transform: `rotateY(${rotation}deg)` }}
            >
              {/* Intro Face */}
              <div
                className="cube__face absolute w-full h-full"
                style={{ transform: faceTransforms[0] }}
              >
                <div className="flex items-center justify-center h-full bg-card/80 backdrop-blur-sm rounded-lg border-border/50 p-6">
                  <div className="text-center text-card-foreground">
                    <h3 className="text-2xl font-bold">My Projects</h3>
                    <p className="mt-4 text-muted-foreground">
                      Use the buttons below to navigate through my work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Faces */}
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="cube__face absolute w-full h-full"
                  style={{ transform: faceTransforms[index + 1] }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-12 space-x-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => rotateCube('prev')}
            aria-label="Previous Project"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Previous
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => rotateCube('next')}
            aria-label="Next Project"
          >
            Next <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
