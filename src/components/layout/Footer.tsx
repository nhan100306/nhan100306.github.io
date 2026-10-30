"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Mail, Globe, Code2, Sparkles } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-gold/15 bg-midnight text-ivory pt-16 pb-12 overflow-hidden z-10">
      {/* Top subtle golden hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-charcoal border border-gold/40 flex items-center justify-center font-heading font-extrabold text-gold text-xs">
                NH
              </div>
              <span className="font-heading font-extrabold text-lg text-ivory tracking-tight">
                NGUYEN THANH NHAN
              </span>
            </div>
            <p className="text-xs font-mono text-gold tracking-widest uppercase">
              LUXURY NATURE × CINEMATIC EDITORIAL
            </p>
            <p className="text-sm text-sage max-w-md leading-relaxed font-sans">
              Một portfolio cá nhân tôn vinh vẻ đẹp điện ảnh của thiên nhiên kết hợp với tư duy kiến trúc phần mềm cao cấp. Đạt tiêu chuẩn sản phẩm thương mại quốc tế.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold/80">
              Chỉ mục
            </h4>
            <ul className="space-y-2 text-sm text-sage">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  01. Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  02. About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold transition-colors">
                  03. Selected Work
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:text-gold transition-colors">
                  04. Knowledge Forest
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  05. Let&apos;s Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Back to Top */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold/80">
                Kết nối
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/nhan100306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-charcoal border border-white/10 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-all duration-300 hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:nhan100306@gmail.com"
                  className="w-10 h-10 rounded-xl bg-charcoal border border-white/10 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-all duration-300 hover:scale-105"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://nhan100306.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-charcoal border border-white/10 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-all duration-300 hover:scale-105"
                  aria-label="Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-sage hover:text-gold transition-colors self-start cursor-pointer group"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sage/70 font-mono gap-4">
          <p>© {new Date().getFullYear()} NGUYEN THANH NHAN. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Crafted with</span>
            <span className="text-gold font-semibold">Next.js & Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
