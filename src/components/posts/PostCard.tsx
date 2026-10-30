"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { PostItem } from "@/lib/posts";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: PostItem;
  theme?: "dark" | "light";
}

export function PostCard({ post, theme = "light" }: PostCardProps) {
  const isLight = theme === "light";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45 }}
      className={cn(
        "group relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-400 border",
        isLight
          ? "bg-white border-sage/30 text-midnight shadow-[0_8px_25px_rgba(16,28,41,0.06)] hover:shadow-[0_16px_35px_rgba(16,28,41,0.14)] hover:border-gold"
          : "bg-charcoal/80 border-white/10 text-ivory hover:border-gold/40 shadow-xl"
      )}
    >
      <div>
        {/* Post Thumbnail Banner */}
        {post.cover && (
          <div className="relative w-full h-48 overflow-hidden bg-midnight">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        <div className="p-6 sm:p-7">
          {/* Meta Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full font-medium text-[11px]",
                  isLight
                    ? "bg-midnight/5 text-terracotta border border-midnight/10"
                    : "bg-gold/15 text-gold border border-gold/30"
                )}
              >
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span
                className={cn(
                  "flex items-center gap-1 text-[11px]",
                  isLight ? "text-charcoal/60" : "text-sage/70"
                )}
              >
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
            </div>

            <div
              className={cn(
                "flex items-center gap-1 text-[11px] font-mono",
                isLight ? "text-charcoal/60" : "text-sage/60"
              )}
            >
              <Clock className="w-3 h-3" />
              <span>{post.readingTime || "4 min"}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "text-xl sm:text-2xl font-heading font-extrabold tracking-tight group-hover:text-gold transition-colors mb-3 leading-snug",
              isLight ? "text-midnight" : "text-ivory"
            )}
          >
            <Link href={`/posts/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>

          {/* Description */}
          <p
            className={cn(
              "text-sm font-sans line-clamp-3 leading-relaxed mb-4",
              isLight ? "text-charcoal/80" : "text-sage"
            )}
          >
            {post.description}
          </p>
        </div>
      </div>

      {/* Footer / Read More Link */}
      <div
        className={cn(
          "px-6 sm:px-7 pb-6 pt-4 border-t flex items-center justify-between",
          isLight ? "border-sage/20" : "border-white/5"
        )}
      >
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={cn(
                "text-[11px] font-mono",
                isLight ? "text-charcoal/60" : "text-sage/60"
              )}
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link
          href={`/posts/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-gold hover:text-gold-hover group-hover:translate-x-1 transition-all"
        >
          <span>Đọc bài</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}
