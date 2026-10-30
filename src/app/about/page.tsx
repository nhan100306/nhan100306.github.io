import React from "react";
import Image from "next/image";
import { Sparkles, Terminal, Target, Calendar, Award, Code2, Server, Database } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata = {
  title: "About | Nguyen Thanh Nhan - Luxury Nature × Cinematic Editorial",
  description: "Khám phá câu chuyện phát triển, tư duy kiến trúc phần mềm, ma trận kỹ năng thực tế và định hướng tương lai của Nguyễn Thanh Nhàn.",
};

export default function AboutPage() {
  const getBadgeStyle = (level: string, groupCategory: string) => {
    if (level === "Working with") {
      if (groupCategory.includes("Frontend")) return "bg-gold/15 text-gold border-gold/40";
      if (groupCategory.includes("Backend")) return "bg-teal-light/20 text-ivory border-teal-light/40";
      return "bg-terracotta/20 text-terracotta border-terracotta/40";
    }
    if (level === "Practiced in projects") {
      return "bg-white/10 text-ivory/80 border-white/15";
    }
    return "bg-sage/10 text-sage border-sage/20";
  };

  return (
    <div className="pb-24 space-y-24">
      {/* ===================== HERO SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-gold bg-charcoal/70 border border-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL PROFILE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-ivory tracking-tight leading-tight">
            The Person Behind The Code.
          </h1>
          <p className="text-base sm:text-xl text-sage font-sans leading-relaxed">
            Hành trình khám phá sự giao thoa giữa kỹ thuật phần mềm chuẩn mực và trải nghiệm thị giác điện ảnh.
          </p>
        </div>
      </section>

      {/* ===================== EDITORIAL STORY & LARGE PORTRAIT ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Large Editorial Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[520px] sm:h-[600px] rounded-3xl overflow-hidden border border-gold/30 shadow-2xl">
              <Image
                src="/images/about/portrait-nature.png"
                alt="Nguyen Thanh Nhan - Creative Developer in an architectural nature setting"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent" />

              {/* In-photo Editorial Signature Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-midnight/80 backdrop-blur-md border border-white/10 font-mono text-xs space-y-1">
                <span className="text-gold font-bold block">{profileData.name}</span>
                <span className="text-sage text-[11px] block">{profileData.role}</span>
                <span className="text-ivory/60 text-[10px] block">📍 {profileData.location}</span>
              </div>
            </div>
          </div>

          {/* Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="BIOGRAPHY & MINDSET"
              title="Tư duy phát triển sản phẩm độc bản"
              subtitle="Tập trung vào tính thực chất, độ tin cậy của mã nguồn và tính thẩm mỹ quốc tế."
              theme="dark"
              className="mb-4"
            />

            <div className="space-y-4 text-sm sm:text-base text-sage leading-relaxed font-sans">
              {profileData.aboutBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-charcoal/80 border border-gold/25 space-y-2">
                <span className="font-mono text-xs text-gold uppercase tracking-wider block">
                  01. Minh bạch Năng lực
                </span>
                <h4 className="font-heading font-bold text-ivory text-base">Code Thực - Sản Phẩm Thật</h4>
                <p className="text-xs text-sage leading-relaxed font-sans">
                  Chỉ đưa vào portfolio những công nghệ đã triển khai thực tế trên các dự án, giải quyết vấn đề cụ thể của người dùng.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-charcoal/80 border border-teal-light/30 space-y-2">
                <span className="font-mono text-xs text-teal-light uppercase tracking-wider block">
                  02. Kiến trúc Bền vững
                </span>
                <h4 className="font-heading font-bold text-ivory text-base">Chuẩn mực từ Nền móng</h4>
                <p className="text-xs text-sage leading-relaxed font-sans">
                  Một website thương mại cao cấp phải nhanh, bảo mật, tối ưu dữ liệu và dễ bảo trì mở rộng lâu dài.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SKILL MATRIX WITH DISTINCT GROUP COLORS (LIGHT EDITORIAL SECTION) ===================== */}
      <section className="bg-ivory text-midnight py-24 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TECHNICAL ARSENAL"
            title="Bản đồ Kỹ thuật & Mức độ Ứng dụng"
            subtitle="Được phân loại minh bạch theo nhóm chuyên môn với bảng màu nhận diện riêng biệt cho từng khối kỹ năng."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profileData.skillGroups.map((group, idx) => {
              const isFrontend = group.category.includes("Frontend");
              const isBackend = group.category.includes("Backend");

              return (
                <div
                  key={group.category}
                  className="rounded-3xl p-8 bg-white border border-sage/40 shadow-xl flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-charcoal/60 uppercase tracking-wider">
                        Phân nhóm 0{idx + 1}
                      </span>
                      {isFrontend ? (
                        <Code2 className="w-5 h-5 text-gold-dark" />
                      ) : isBackend ? (
                        <Server className="w-5 h-5 text-teal" />
                      ) : (
                        <Database className="w-5 h-5 text-terracotta" />
                      )}
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-midnight">
                      {group.category}
                    </h3>
                    <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-ivory/60 border border-sage/30 flex items-center justify-between text-xs font-mono"
                      >
                        <span className="text-midnight font-semibold">{skill.name}</span>
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] border ${
                            skill.level === "Working with"
                              ? isFrontend
                                ? "bg-gold/20 text-charcoal font-bold border-gold"
                                : isBackend
                                ? "bg-teal/20 text-charcoal font-bold border-teal"
                                : "bg-terracotta/20 text-charcoal font-bold border-terracotta"
                              : "bg-white text-charcoal/70 border-sage/40"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== TIMELINE (REFINED DELICATE LINES) ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="MILESTONES & JOURNEY"
          title="Hành trình Học tập & Phát triển Dự án"
          subtitle="Các mốc thời gian ghi dấu sự trưởng thành về tư duy kiến trúc và kỹ năng triển khai thực tế."
          theme="dark"
        />

        <div className="relative pl-6 sm:pl-10 border-l border-gold/30 space-y-12 ml-2 sm:ml-4">
          {profileData.timeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Delicate Golden Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-midnight border border-gold flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>

              <div className="rounded-3xl bg-charcoal/80 border border-white/10 p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-xs font-mono text-sage/70">
                    {item.organization}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-ivory">
                  {item.role}
                </h3>

                <p className="text-sm text-sage leading-relaxed font-sans">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-midnight text-ivory/80 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FUTURE ROADMAP ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-midnight via-teal-deep to-charcoal border border-gold/30 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-gold bg-midnight/80 border border-gold/30">
              <Target className="w-3.5 h-3.5" />
              <span>TẦM NHÌN PHÁT TRIỂN</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-ivory">
              Vươn tới chuẩn mực Creative Developer quốc tế
            </h2>
            <p className="text-sm sm:text-base text-sage font-sans leading-relaxed">
              Mục tiêu của tôi là tiếp tục hoàn thiện kỹ năng thiết kế trải nghiệm 3D/WebGL tương tác cao, kết hợp kiến trúc microservices và cloud-native để tạo ra các sản phẩm số mang dấu ấn toàn cầu.
            </p>
            <div className="pt-4">
              <MagneticButton href="/contact" variant="primary">
                KẾT NỐI HỢP TÁC
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
