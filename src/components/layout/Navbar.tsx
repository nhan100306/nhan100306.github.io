"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Posts", href: "/posts" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "py-3 bg-midnight/85 backdrop-blur-xl border-b border-gold/15 shadow-[0_12px_36px_rgba(0,0,0,0.55)]"
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Editorial Title */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-midnight border border-gold/40 flex items-center justify-center shadow-[0_0_15px_rgba(214,183,122,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:border-gold">
                <span className="font-heading font-extrabold text-sm tracking-wider text-gold">
                  NH
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm sm:text-base text-ivory tracking-tight group-hover:text-gold transition-colors">
                  NGUYEN THANH NHAN
                </span>
                <span className="font-mono text-[9.5px] text-sage/80 tracking-widest uppercase">
                  Creative Developer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-charcoal/60 backdrop-blur-md border border-white/10 shadow-lg">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200",
                      isActive
                        ? "text-midnight font-bold"
                        : "text-ivory/80 hover:text-ivory"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLuxury"
                        className="absolute inset-0 bg-gold rounded-full shadow-[0_0_15px_rgba(214,183,122,0.5)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA: Let's Connect */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-sage">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Available Worldwide
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gold/15 hover:bg-gold text-gold hover:text-midnight border border-gold/30 hover:border-gold transition-all duration-300 shadow-[0_0_15px_rgba(214,183,122,0.15)] hover:scale-105"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg bg-charcoal/70 border border-gold/30 text-ivory hover:text-gold transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-30 p-4 md:hidden"
          >
            <div className="p-6 rounded-2xl bg-midnight/95 backdrop-blur-2xl border border-gold/25 shadow-2xl flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between",
                      isActive
                        ? "bg-gold text-midnight font-bold shadow-[0_0_15px_rgba(214,183,122,0.35)]"
                        : "text-ivory hover:bg-white/5"
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-midnight" />}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gold text-midnight shadow-[0_0_15px_rgba(214,183,122,0.3)]"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
