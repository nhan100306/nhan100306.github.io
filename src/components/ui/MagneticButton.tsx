"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "terracotta" | "light" | "editorial-dark";
  children: React.ReactNode;
  icon?: React.ReactNode;
  external?: boolean;
}

export function MagneticButton({
  href,
  variant = "primary",
  children,
  icon,
  className,
  external,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 relative group overflow-hidden cursor-pointer select-none active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-gold text-midnight shadow-[0_0_20px_rgba(214,183,122,0.35)] hover:shadow-[0_0_30px_rgba(214,183,122,0.55)] hover:bg-gold-hover",
    secondary:
      "bg-midnight/70 text-ivory border border-gold/40 hover:border-gold hover:bg-midnight hover:text-gold backdrop-blur-md",
    terracotta:
      "bg-terracotta text-ivory shadow-[0_0_20px_rgba(169,111,80,0.35)] hover:bg-terracotta-hover",
    light:
      "bg-ivory text-midnight shadow-md hover:bg-white hover:shadow-lg",
    "editorial-dark":
      "bg-midnight text-ivory border border-charcoal hover:border-gold hover:text-gold",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      {/* Light shimmer hover sweep */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform ease-in-out pointer-events-none" />
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseClasses, variantClasses[variant], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(baseClasses, variantClasses[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {content}
    </button>
  );
}
