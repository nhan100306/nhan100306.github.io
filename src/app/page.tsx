import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code2, Server, Cpu, Globe } from "lucide-react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { getAllPosts } from "@/lib/posts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PostCard } from "@/components/posts/PostCard";

export default function HomePage() {
  const selectedProjects = projectsData.slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);

  const focusIcons = {
    layout: Code2,
    server: Server,
    cpu: Cpu,
  };

  return (
    <div className="pb-0 overflow-hidden">
      {/* ===================== 1. HERO SECTION (CINEMATIC IMAGE BACKGROUND) ===================== */}
      <section className="relative min-h-[95vh] flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto overflow-hidden">
        {/* Real Photographic Background: forest-lake-dusk.png */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl my-3">
          <Image
            src="/images/hero/forest-lake-dusk.png"
            alt="Cinematic mountain forest lake at dusk with golden sunlight"
            fill
            priority
            quality={95}
            className="object-cover object-right md:object-center animate-slow-zoom will-change-transform"
            sizes="100vw"
          />

          {/* Left-side Dark Navy / Charcoal Gradient Overlay: preserves text contrast while keeping golden right side luminous */}
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent sm:via-midnight/70 sm:w-3/4 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40 z-10" />

          {/* Subtle Fog Movement on Hero */}
          <div className="absolute inset-0 opacity-25 animate-fog-flow bg-[radial-gradient(ellipse_at_30%_50%,rgba(16,28,41,0.8),transparent_70%)] z-10 pointer-events-none" />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-20 max-w-4xl py-20 sm:py-28 space-y-8 pl-2 sm:pl-6">
          {/* Label: DIGITAL CREATOR / DEVELOPER PORTFOLIO */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-midnight/80 border border-gold/30 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-gold font-bold">
              DIGITAL CREATOR / DEVELOPER PORTFOLIO
            </span>
          </div>

          {/* Main Hero Title: Ivory combined with Golden Sand */}
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-sage">
              HELLO, I&apos;M
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold text-ivory tracking-tight leading-[1.05]">
              NGUYEN THANH NHAN.
            </h1>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold via-sand to-ivory tracking-tight leading-[1.1]">
              BUILDING DIGITAL EXPERIENCES.
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-base sm:text-xl text-ivory/90 font-sans leading-relaxed">
            &ldquo;Exploring the intersection of technology, creativity and nature.&rdquo;
          </p>

          {/* Dual CTAs: EXPLORE MY WORK & LET'S CONNECT */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <MagneticButton href="/projects" variant="primary" icon={<ArrowUpRight className="w-4 h-4" />}>
              EXPLORE MY WORK
            </MagneticButton>
            <MagneticButton href="/contact" variant="secondary">
              LET&apos;S CONNECT
            </MagneticButton>
          </div>
        </div>

        {/* Scroll to Explore indicator */}
        <div className="absolute bottom-8 left-6 sm:left-12 z-20 flex items-center gap-3 font-mono text-xs text-sage">
          <div className="w-5 h-9 rounded-full border border-gold/40 flex items-start justify-center p-1 backdrop-blur-sm bg-midnight/40">
            <div className="w-1.5 h-2 rounded-full bg-gold animate-bounce" />
          </div>
          <span className="tracking-widest uppercase text-[10px] text-ivory/80">
            SCROLL TO EXPLORE
          </span>
        </div>
      </section>

      {/* ===================== 2. INTRODUCTION (WARM IVORY LIGHT EDITORIAL SECTION) ===================== */}
      <section className="relative bg-ivory text-midnight py-24 sm:py-32 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story & Philosophy Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-midnight/5 border border-midnight/15 text-terracotta">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                <span>EDITORIAL PHILOSOPHY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-midnight leading-tight tracking-tight">
                Thiên nhiên điện ảnh × Tư duy kỹ thuật chính xác.
              </h2>

              <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed font-sans">
                Lấy cảm hứng từ sự bất biến và chiều sâu của cảnh quan tự nhiên, tôi tiếp cận việc xây dựng sản phẩm số với sự tỉ mỉ của một nghệ nhân và tư duy logic của một kỹ sư hệ thống.
              </p>

              <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed font-sans">
                Không có hiệu ứng thừa thãi. Mọi tương tác, chuyển động và bảng màu đều được tính toán để tôn vinh nội dung, tạo cảm giác sang trọng, thanh lịch và đạt hiệu năng tối ưu trên mọi màn hình.
              </p>

              {/* Statistics Strip */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sage/40 font-mono">
                <div>
                  <span className="text-2xl sm:text-4xl font-heading font-extrabold text-midnight block">
                    05+
                  </span>
                  <span className="text-xs text-charcoal/70 uppercase">Trang Trải Nghiệm</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-4xl font-heading font-extrabold text-gold-dark block">
                    100%
                  </span>
                  <span className="text-xs text-charcoal/70 uppercase">Code Thực Chiến</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-4xl font-heading font-extrabold text-terracotta block">
                    60 FPS
                  </span>
                  <span className="text-xs text-charcoal/70 uppercase">Mượt Mà Chuẩn Mực</span>
                </div>
              </div>

              <div className="pt-4">
                <MagneticButton href="/about" variant="editorial-dark" icon={<ArrowUpRight className="w-4 h-4" />}>
                  ĐỌC CÂU CHUYỆN CỦA TÔI
                </MagneticButton>
              </div>
            </div>

            {/* Editorial Technical Sheet */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-8 border border-sage/40 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-sage/20 text-xs font-mono text-charcoal/70">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-terracotta" />
                    <span className="font-bold text-midnight">engineering_manifesto.md</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-sage">v2026</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-charcoal/80 leading-relaxed">
                  <p>
                    <span className="text-terracotta font-bold"># CRAFTSMANSHIP</span>
                  </p>
                  <p className="text-charcoal/90">
                    &ldquo;Code sạch như dòng suối đầu nguồn. Kiến trúc vững chắc như vách đá ngàn năm.&rdquo;
                  </p>
                  <div className="pt-3 border-t border-sage/20 space-y-1">
                    <p><span className="text-midnight font-bold">Design Language:</span> Luxury Nature Editorial</p>
                    <p><span className="text-midnight font-bold">Primary Runtimes:</span> Next.js 15, React 19, TypeScript</p>
                    <p><span className="text-midnight font-bold">Systems & Data:</span> C# .NET, SQL Server, REST Architecture</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-ivory border border-sage/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-midnight">
                    <Globe className="w-4 h-4 text-terracotta" />
                    <span>Global Creative Standards</span>
                  </div>
                  <span className="text-[10px] font-mono text-terracotta font-bold uppercase">Commercial Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 3. SELECTED PROJECTS (MIDNIGHT NAVY SECTION) ===================== */}
      <section className="bg-midnight py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Dự án Tiêu biểu & Bằng chứng Năng lực"
              subtitle="Khám phá các sản phẩm thực tế được xây dựng với tư duy giải quyết bài toán cốt lõi, hoàn thiện cả về nghiệp vụ lẫn trải nghiệm thị giác."
              theme="dark"
              className="mb-0"
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-gold hover:text-gold-hover whitespace-nowrap self-start sm:self-auto"
            >
              <span>Xem tất cả dự án</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {selectedProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                theme={idx % 2 === 0 ? "dark" : "dark"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 4. ENGINEERING FOCUS (DEEP TEAL & CHARCOAL SECTION) ===================== */}
      <section className="bg-gradient-to-b from-teal-deep to-charcoal py-24 sm:py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ENGINEERING PILLARS"
            title="Trọng tâm Công nghệ & Lĩnh vực Chuyên môn"
            subtitle="Ba trụ cột định hình năng lực kỹ thuật: kiến tạo giao diện mượt mà, kiến trúc dịch vụ chuẩn xác và tinh thần học hỏi không ngừng."
            theme="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profileData.focusAreas.map((area, idx) => {
              const Icon = focusIcons[area.icon as keyof typeof focusIcons] || Code2;
              return (
                <div
                  key={area.title}
                  className="rounded-3xl p-8 bg-charcoal/70 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-gold/40 hover:shadow-[0_15px_40px_rgba(214,183,122,0.1)] transition-all duration-400 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-midnight border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-gold/70 block">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-heading font-extrabold text-ivory group-hover:text-gold transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-sage leading-relaxed font-sans">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-sage/80">
                    <span>Expertise Area</span>
                    <span className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== 5. LATEST POSTS (WARM IVORY EDITORIAL MAGAZINE SECTION) ===================== */}
      <section className="bg-ivory text-midnight py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="TECH MAGAZINE"
              title="Ghi chép Kỹ thuật & Khám phá"
              subtitle="Nơi chia sẻ các bài phân tích kiến trúc, hướng dẫn thực hành Git và tư duy phát triển ứng dụng web hiện đại."
              theme="light"
              className="mb-0"
            />
            <Link
              href="/posts"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-midnight hover:text-terracotta whitespace-nowrap self-start sm:self-auto"
            >
              <span>Xem toàn bộ bài viết</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 6. CLOSING CALL TO ACTION (CINEMATIC GOLDEN HORIZON) ===================== */}
      <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-midnight">
        {/* Background Image: golden-horizon.png */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/contact/golden-horizon.png"
            alt="Cinematic golden sunset horizon over misty mountain peaks"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-gold bg-midnight/80 border border-gold/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET&apos;S CREATE SOMETHING MEANINGFUL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-ivory tracking-tight leading-tight">
            Sẵn sàng cùng bạn hiện thực hóa những sản phẩm số đẳng cấp.
          </h2>

          <p className="text-base sm:text-lg text-sage font-sans max-w-xl mx-auto leading-relaxed">
            Tôi luôn tìm kiếm cơ hội hợp tác và phát triển những giải pháp phần mềm có giá trị thực tiễn cao. Hãy bắt đầu cuộc trò chuyện ngay hôm nay.
          </p>

          <div className="pt-2">
            <MagneticButton href="/contact" variant="primary" icon={<ArrowUpRight className="w-4 h-4" />}>
              BẮT ĐẦU KẾT NỐI
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
