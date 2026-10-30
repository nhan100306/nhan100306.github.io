import type { Metadata } from "next";
import "./globals.css";
import { AmbientBackground } from "@/components/background/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

export const metadata: Metadata = {
  title: "Nguyen Thanh Nhan | Luxury Nature × Cinematic Editorial Portfolio",
  description: "A commercial-grade portfolio for an international Creative Developer exploring the intersection of technology, cinematic landscapes, and luxury editorial design.",
  keywords: ["Nguyen Thanh Nhan", "Creative Developer", "Fullstack Engineer", "Next.js", "Cinematic Portfolio", "Editorial Design"],
  authors: [{ name: "Nguyen Thanh Nhan" }],
  openGraph: {
    title: "Nguyen Thanh Nhan | Luxury Nature × Cinematic Editorial Portfolio",
    description: "Building digital experiences in harmony with nature.",
    type: "website",
    locale: "vi_VN",
    url: "https://nhan100306.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark scroll-smooth">
      <body className="bg-midnight text-ivory antialiased selection:bg-gold/30 selection:text-white">
        {/* Luxury Golden Scroll/Reading Progress Bar */}
        <ScrollProgress />

        {/* Cinematic Multi-tier Ambient Glow & Dust Motes Stack */}
        <AmbientBackground />

        {/* Precision Desktop Follower Cursor */}
        <CustomCursor />

        {/* Global Page Shell */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
