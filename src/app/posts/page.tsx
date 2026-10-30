import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, BookOpen, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/posts/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Knowledge Forest | Tech Magazine & Engineering Notes",
  description: "Tạp chí công nghệ & ghi chép kỹ thuật: REST API, Git workflow, kiến trúc phần mềm và hành trình sáng tạo của Nguyễn Thanh Nhàn.",
};

export default function PostsPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const catalogPosts = posts;

  return (
    <div className="pb-24 space-y-20">
      {/* ===================== HERO & FEATURED ARTICLE ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-gold bg-charcoal/70 border border-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOWLEDGE FOREST & MAGAZINE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-ivory tracking-tight leading-tight">
            THOUGHTS, NOTES & DISCOVERIES
          </h1>
          <p className="text-base sm:text-lg text-sage font-sans leading-relaxed">
            Khu rừng tri thức công nghệ — nơi lưu giữ những góc nhìn sâu sắc về kiến trúc hệ thống, quy trình phát triển và trải nghiệm số. Toàn bộ nội dung được viết bằng Markdown và quản lý trực tiếp qua Git.
          </p>
        </div>

        {/* Large Featured Article Magazine Cover */}
        {featuredPost && (
          <div className="relative rounded-3xl overflow-hidden bg-charcoal border border-gold/30 shadow-2xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Featured Cover Image */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] overflow-hidden bg-midnight">
                <Image
                  src={featuredPost.cover || "/images/hero/forest-lake-dusk.png"}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-charcoal/90" />
              </div>

              {/* Featured Post Story */}
              <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-gold text-midnight font-bold">
                    FEATURED STORY
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-ivory border border-white/10">
                    {featuredPost.category}
                  </span>
                  <span className="text-sage flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredPost.readingTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-ivory group-hover:text-gold transition-colors leading-snug">
                  <Link href={`/posts/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-sage font-sans leading-relaxed">
                  {featuredPost.description}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/posts/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-midnight font-mono text-xs font-bold uppercase tracking-wider hover:bg-gold-hover transition-all shadow-lg"
                  >
                    <span>ĐỌC BÀI VIẾT NÀY</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ===================== ARTICLE CATALOG (WARM IVORY LIGHT EDITORIAL SECTION) ===================== */}
      <section className="bg-ivory text-midnight py-24 border-t border-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="MAGAZINE INDEX"
            title="Tuyển tập Các Bài viết & Nghiên cứu"
            subtitle="Danh mục toàn bộ các bài viết kỹ thuật được tổ chức theo tiêu chuẩn tạp chí chuyên ngành."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogPosts.map((post) => (
              <PostCard key={post.slug} post={post} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Git Publishing Architecture Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-charcoal/70 border border-gold/20 p-6 font-mono text-xs space-y-3">
          <div className="flex items-center gap-2 text-gold">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-bold">Git-Powered Publishing Engine</span>
          </div>
          <p className="text-sage font-sans">
            Mỗi bài viết mới chỉ cần thêm file Markdown vào thư mục <code className="text-gold">content/posts/</code> và push Git lên nhánh production. Hệ thống Next.js sẽ tự động phân tích cú pháp và xuất bản tức thì.
          </p>
        </div>
      </section>
    </div>
  );
}
