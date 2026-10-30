"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Filter, Code2 } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

type FilterCategory = "ALL" | "WEB" | "BACKEND" | "DATABASE";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("ALL");
  const filterOptions: FilterCategory[] = ["ALL", "WEB", "BACKEND", "DATABASE"];

  const filteredProjects =
    selectedFilter === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Editorial Page Header */}
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-gold bg-charcoal/70 border border-gold/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTFOLIO EXHIBITION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-ivory tracking-tight leading-tight">
          SELECTED WORK
        </h1>
        <p className="text-base sm:text-lg text-sage font-sans leading-relaxed">
          Tổng hợp các dự án thực chiến đại diện cho năng lực giải quyết bài toán nghiệp vụ, kiến trúc dữ liệu và nghệ thuật thiết kế giao diện điện ảnh.
        </p>
      </div>

      {/* Filter Tabs in Neutral / Golden Luxury Style */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gold" />
          <span className="text-xs font-mono text-sage uppercase tracking-wider">
            Lọc theo phân loại:
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gold text-midnight font-bold shadow-[0_0_15px_rgba(214,183,122,0.35)]"
                    : "bg-charcoal/60 text-sage hover:text-ivory hover:bg-charcoal border border-white/5"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid: Alternating Dark and Light cards for visual depth */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured && selectedFilter === "ALL" && idx === 0}
              theme={idx % 2 === 1 ? "light" : "dark"}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center rounded-3xl bg-charcoal/40 border border-white/10 space-y-4">
          <Code2 className="w-10 h-10 text-gold mx-auto opacity-60" />
          <p className="text-ivory font-heading text-lg">Chưa có dự án nào trong danh mục này</p>
          <p className="text-xs text-sage font-sans">Vui lòng chọn danh mục khác để xem thêm.</p>
        </div>
      )}
    </div>
  );
}
