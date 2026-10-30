import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-xl w-full text-center space-y-8 rounded-3xl bg-charcoal/80 border border-gold/30 p-8 sm:p-14 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-gold bg-midnight/80 border border-gold/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>404 · PAGE NOT FOUND</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl font-heading font-extrabold text-ivory tracking-tight">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-gold">
            Lối mòn chưa được khai phá
          </h2>
          <p className="text-sm text-sage font-sans max-w-md mx-auto leading-relaxed">
            Trang bạn đang tìm kiếm có thể đã được chuyển đổi hoặc không tồn tại trong khu rừng kỹ thuật số này.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/" variant="primary" icon={<ArrowLeft className="w-4 h-4" />}>
            VỀ TRANG CHỦ
          </MagneticButton>
          <MagneticButton href="/projects" variant="secondary">
            XEM DỰ ÁN
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
