import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light" | "teal";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = theme === "light";
  const isTeal = theme === "teal";

  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-[11px] font-mono tracking-widest uppercase",
            isLight
              ? "bg-midnight/5 border border-midnight/15 text-terracotta"
              : isTeal
              ? "bg-charcoal/60 border border-gold/30 text-gold"
              : "bg-charcoal/60 border border-gold/25 text-gold",
            align === "center" ? "justify-center" : ""
          )}
        >
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full animate-pulse",
              isLight ? "bg-terracotta" : "bg-gold"
            )}
          />
          {eyebrow}
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight",
          isLight ? "text-midnight" : "text-ivory"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-sans",
            isLight ? "text-charcoal/80" : "text-sage"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
