import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export interface PostItem {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  cover?: string;
  published?: boolean;
  readingTime?: string;
  content?: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string): PostItem | null {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || "Untitled Post",
    description: data.description || "",
    date: data.date || "",
    category: data.category || "General",
    tags: Array.isArray(data.tags) ? data.tags : [],
    cover: data.cover || "/images/posts/default.webp",
    published: data.published !== false,
    readingTime: data.readingTime || "4 min read",
    content,
  };
}

export function getAllPosts(): PostItem[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is PostItem => post !== null && post.published !== false)
    .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1));
  return posts;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
