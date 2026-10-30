"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Mail, Github, Send, CheckCircle2, MessageSquare, MapPin, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 750);
  };

  return (
    <div className="relative min-h-[90vh] pb-24 overflow-hidden">
      {/* Cinematic Golden Sunset Background */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <Image
          src="/images/contact/golden-horizon.png"
          alt="Golden dusk horizon background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-gold bg-charcoal/80 border border-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE CONNECTION POINT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-ivory tracking-tight leading-tight">
            HAVE A PROJECT IN MIND?
          </h1>
          <p className="text-base sm:text-xl text-sage font-sans leading-relaxed">
            Tôi luôn sẵn sàng lắng nghe về các ý tưởng sáng tạo, dự án phát triển phần mềm và những cơ hội cùng nhau kiến tạo sản phẩm số đột phá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Connection Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-charcoal/85 border border-gold/25 p-8 sm:p-10 space-y-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-2">
                <span className="font-mono text-xs text-gold uppercase tracking-widest">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-ivory">
                  Liên hệ Trực tiếp
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-midnight/80 border border-white/10 hover:border-gold transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-charcoal border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 group-hover:bg-gold group-hover:text-midnight transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-sage uppercase tracking-wider">
                      Hộp thư Điện tử
                    </span>
                    <span className="text-sm font-mono font-semibold text-ivory group-hover:text-gold transition-colors">
                      {profileData.email}
                    </span>
                  </div>
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-midnight/80 border border-white/10 hover:border-gold transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-charcoal border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 group-hover:bg-gold group-hover:text-midnight transition-all">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-sage uppercase tracking-wider">
                      Mã nguồn Mở
                    </span>
                    <span className="text-sm font-mono font-semibold text-ivory group-hover:text-gold transition-colors">
                      github.com/nhan100306
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-midnight/80 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-charcoal border border-sage/30 flex items-center justify-center text-sage">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-sage uppercase tracking-wider">
                      Khu vực Làm việc
                    </span>
                    <span className="text-sm font-mono text-ivory">
                      Việt Nam (Open to Remote / Onsite Worldwide)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-charcoal/85 border border-gold/25 p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              {submitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center mx-auto text-gold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-ivory">
                    Tin nhắn đã được gửi thành công!
                  </h3>
                  <p className="text-sm text-sage font-sans max-w-md mx-auto leading-relaxed">
                    Cảm ơn bạn đã kết nối. Tôi đã nhận được thông tin và sẽ phản hồi đến bạn trong thời gian sớm nhất.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-midnight text-ivory border border-gold/40 hover:border-gold transition-colors cursor-pointer"
                    >
                      Gửi tin nhắn khác
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                    <MessageSquare className="w-5 h-5 text-gold" />
                    <h3 className="text-xl font-heading font-extrabold text-ivory">
                      Gửi Lời Nhắn Nhanh
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-sage">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3.5 rounded-2xl bg-midnight border border-white/10 text-sm text-ivory placeholder:text-sage/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-sage">
                        Địa chỉ Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-midnight border border-white/10 text-sm text-ivory placeholder:text-sage/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-sage">
                      Chủ đề Thảo luận
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ý tưởng dự án / Đề xuất hợp tác tuyển dụng..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-midnight border border-white/10 text-sm text-ivory placeholder:text-sage/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-sage">
                      Nội dung Thông điệp *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mô tả tóm tắt về mục tiêu hoặc dự án bạn muốn triển khai..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-midnight border border-white/10 text-sm text-ivory placeholder:text-sage/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-gold text-midnight hover:bg-gold-hover shadow-[0_0_25px_rgba(214,183,122,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>ĐANG TRUYỀN TẢI THÔNG ĐIỆP...</span>
                    ) : (
                      <>
                        <span>GỬI YÊU CẦU KẾT NỐI</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
