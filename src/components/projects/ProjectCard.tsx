"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, Layers } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  theme?: "dark" | "light";
}

export function ProjectCard({ project, featured, theme = "dark" }: ProjectCardProps) {
  const isLight = theme === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn(
        "group relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500",
        isLight
          ? "bg-ivory border border-sage/40 text-midnight shadow-[0_12px_35px_rgba(16,28,41,0.08)] hover:shadow-[0_20px_50px_rgba(16,28,41,0.16)] hover:border-gold"
          : "bg-charcoal/90 border border-white/10 text-ivory shadow-[0_15px_40px_rgba(0,0,0,0.45)] hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(214,183,122,0.12)]",
        featured ? "lg:col-span-2" : ""
      )}
    >
      {/* Top Image Presentation Banner */}
      <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-midnight">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-midnight to-teal-deep flex items-center justify-center">
            <span className="font-mono text-xs text-gold">Project Visual Preview</span>
          </div>
        )}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Index & Category Floating Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-midnight/80 backdrop-blur-md border border-white/10 text-xs font-mono">
            <span className="font-bold text-gold">{project.index}</span>
            <span className="text-white/30">|</span>
            <span className="text-ivory/80 uppercase tracking-wider text-[10px]">
              {project.category}
            </span>
          </div>

          {project.featured && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-midnight bg-gold shadow-[0_0_15px_rgba(214,183,122,0.4)]">
              <Sparkles className="w-3 h-3" />
              <span>Featured</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
        <div className="space-y-4">
          <h3
            className={cn(
              "text-2xl sm:text-3xl font-heading font-extrabold tracking-tight group-hover:text-gold transition-colors leading-snug",
              isLight ? "text-midnight" : "text-ivory"
            )}
          >
            {project.title}
          </h3>

          <p
            className={cn(
              "text-sm sm:text-base font-sans leading-relaxed line-clamp-3",
              isLight ? "text-charcoal/85" : "text-sage"
            )}
          >
            {project.summary}
          </p>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans">
            <div
              className={cn(
                "p-3.5 rounded-2xl border",
                isLight
                  ? "bg-white/80 border-sage/30 text-charcoal"
                  : "bg-midnight/70 border-white/5 text-ivory/90"
              )}
            >
              <span className="block font-mono text-[10px] uppercase tracking-wider text-terracotta font-semibold mb-1">
                Thách thức nghiệp vụ
              </span>
              <span className="line-clamp-2">{project.problem}</span>
            </div>
            <div
              className={cn(
                "p-3.5 rounded-2xl border",
                isLight
                  ? "bg-white/80 border-gold/40 text-charcoal"
                  : "bg-midnight/70 border-gold/20 text-ivory/90"
              )}
            >
              <span className="block font-mono text-[10px] uppercase tracking-wider text-gold font-semibold mb-1">
                Giải pháp kiến trúc
              </span>
              <span className="line-clamp-2">{project.solution}</span>
            </div>
          </div>

          <div
            className={cn(
              "flex items-center gap-2 text-xs font-mono",
              isLight ? "text-charcoal/70" : "text-sage/80"
            )}
          >
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>{project.role}</span>
          </div>
        </div>

        {/* Card Footer: Neutral Tags & Links */}
        <div
          className={cn(
            "pt-5 border-t flex flex-wrap items-center justify-between gap-4",
            isLight ? "border-midnight/10" : "border-white/10"
          )}
        >
          {/* Tech Stack Chips in neutral / subtle gold */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={cn(
                  "px-2.5 py-1 rounded-lg text-[11px] font-mono border transition-colors",
                  isLight
                    ? "bg-white text-midnight/80 border-sage/30 hover:border-gold"
                    : "bg-midnight/60 text-sage border-white/5 hover:border-gold/30 hover:text-gold"
                )}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2.5 ml-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2.5 rounded-xl border transition-all duration-300",
                  isLight
                    ? "bg-white text-midnight border-sage/40 hover:border-gold hover:text-gold"
                    : "bg-midnight/80 text-ivory border-white/10 hover:border-gold hover:text-gold hover:bg-midnight"
                )}
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-gold text-midnight hover:bg-gold-hover shadow-[0_0_15px_rgba(214,183,122,0.3)] transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
