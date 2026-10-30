import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { getPostBySlug, getPostSlugs, markdownToHtml } from "@/lib/posts";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Nguyen Thanh Nhan`,
    description: post.description,
  };
}

export default async function PostDetailPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content || "");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Return to Knowledge Forest Navigation */}
      <div>
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sage hover:text-gold transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Quay lại Knowledge Forest</span>
        </Link>
      </div>

      {/* Article Editorial Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 font-bold">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="text-sage flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="text-sage flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-ivory tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-sage font-sans leading-relaxed">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-charcoal text-ivory/80 border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article Cover Banner */}
      {post.cover && (
        <div className="relative w-full h-64 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-midnight my-8">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* Article Markdown Render */}
      <article className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:text-ivory prose-headings:font-extrabold prose-h1:text-3xl prose-h2:text-2xl prose-h2:text-gold prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2 prose-p:text-ivory/90 prose-p:leading-relaxed prose-p:font-sans prose-pre:bg-charcoal prose-pre:border prose-pre:border-gold/30 prose-pre:rounded-2xl prose-code:font-mono prose-code:text-gold prose-a:text-gold prose-a:underline hover:prose-a:text-gold-hover prose-li:text-ivory/90 pt-4">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>

      {/* Author Signature Block */}
      <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-charcoal border border-gold/40 flex items-center justify-center font-heading font-extrabold text-lg text-gold">
            NH
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-ivory">
              Nguyễn Thanh Nhàn
            </h4>
            <p className="text-xs font-mono text-sage">
              Creative Developer · Technology Enthusiast
            </p>
          </div>
        </div>

        <Link
          href="/posts"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-charcoal hover:bg-midnight text-ivory border border-gold/30 hover:border-gold transition-all"
        >
          <span>Xem thêm các bài viết khác</span>
        </Link>
      </div>
    </div>
  );
}
