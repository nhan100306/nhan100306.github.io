# PORTFOLIO NGUYỄN THANH NHÀN

## Nature × Futuristic --- Immersive Developer Experience

> **Creative direction:** Một portfolio cá nhân mang cảm giác bước vào
> khu rừng kỹ thuật số --- thiên nhiên sống động, ánh sáng điện ảnh,
> chuyển động mượt và những chi tiết công nghệ tinh tế.
>
> **Brand line:** `ROOTED IN NATURE. BUILT FOR THE FUTURE.`
>
> **Mục tiêu:** Không phải thêm animation cho thật nhiều một cách ngẫu
> nhiên. Mỗi hiệu ứng phải có mục đích, có nhịp điệu và giúp người xem
> cảm nhận được chất lượng sản phẩm.

------------------------------------------------------------------------

# 1. Ý tưởng thiết kế tổng thể

## 1.1. Concept

Portfolio được xây dựng theo phong cách **Nature × Futuristic**, kết hợp
4 yếu tố:

1.  **Cinematic Nature:** Ảnh rừng, sương mù, ánh nắng xuyên qua tán
    cây, mặt nước và địa hình.
2.  **Digital Atmosphere:** Hạt sáng, đường nét phát sáng, lưới kỹ thuật
    số và các điểm kết nối.
3.  **Premium UI:** Typography lớn, khoảng trắng có chủ đích, card trong
    mờ, đường viền tinh tế.
4.  **Motion Experience:** Cuộn trang có chuyển cảnh, parallax, reveal,
    hover và micro-interactions.

Không sử dụng phong cách game hoặc cyberpunk quá rực rỡ. Tổng thể vẫn
phải thanh lịch, dễ đọc và phù hợp với portfolio ứng tuyển việc làm.

## 1.2. Cảm giác cần tạo ra

-   Khi mở trang: ấn tượng như một cảnh phim thiên nhiên.
-   Khi cuộn: nội dung xuất hiện theo từng lớp, có chiều sâu.
-   Khi rê chuột: các thành phần phản hồi nhẹ nhàng.
-   Khi đọc bài viết: tập trung, sạch sẽ, không bị animation làm phiền.
-   Khi xem dự án: cảm giác như đang khám phá một bộ sưu tập sản phẩm
    được đầu tư kỹ lưỡng.

## 1.3. Tên concept và tagline

-   Tên concept: **The Digital Forest**
-   Tên hiển thị: **NGUYEN THANH NHAN**
-   Vai trò: `Developer · Technology Enthusiast`
-   Tagline chính:
    `Building digital experiences in harmony with nature.`
-   Tagline phụ: `Explore. Create. Grow.`

------------------------------------------------------------------------

# 2. Art direction --- Hệ thống hình ảnh và màu sắc

## 2.1. Bảng màu

  Tên màu           HEX                        Vai trò
  ----------------- -------------------------- ---------------------
  Midnight Forest   `#071A16`                  Nền tối chính
  Deep Evergreen    `#0D2921`                  Nền section
  Forest Green      `#174C38`                  Màu thương hiệu
  Emerald Glow      `#49D49A`                  Điểm nhấn phát sáng
  Soft Sage         `#A8C8AE`                  Chữ phụ, chi tiết
  Mist White        `#EAF2E9`                  Chữ chính
  Warm Sand         `#D7C7A2`                  Điểm nhấn ấm
  Glass             `rgba(255,255,255,0.07)`   Bề mặt kính

**Nguyên tắc:** 80% màu tối tự nhiên, 15% màu trung tính và 5% màu phát
sáng. Không để màu neon chiếm toàn bộ giao diện.

## 2.2. Typography

-   Tiêu đề lớn: `Space Grotesk` hoặc `Sora`.
-   Nội dung: `Inter` hoặc `Manrope`.
-   Nhãn kỹ thuật: `JetBrains Mono`.
-   Tiêu đề Hero có thể dùng font weight 500--700, letter spacing hơi
    âm.
-   Dùng chữ in hoa cho nhãn nhỏ như `SELECTED WORK`, `ABOUT ME`,
    `LATEST NOTES`.

## 2.3. Hình ảnh

-   Hero: rừng sâu, sương mù, ánh sáng xuyên qua tán cây.
-   About: ảnh chân dung hoặc ảnh cá nhân được chọn để công khai.
-   Projects: ảnh chụp sản phẩm thật, đặt trong khung thiết bị.
-   Posts: ảnh cover theo từng chủ đề công nghệ.
-   Contact: nền trừu tượng gợi hình ảnh ánh sáng cuối khu rừng.

Ảnh nền nên được tối ưu WebP/AVIF, có lớp phủ gradient để chữ luôn dễ
đọc. Không sử dụng ảnh có bản quyền khi chưa được phép.

------------------------------------------------------------------------

# 3. Motion system --- Hệ thống hiệu ứng

Đây là phần tạo nên cá tính của portfolio. Tất cả hiệu ứng cần có thời
lượng, easing và quy tắc nhất quán.

## 3.1. Hiệu ứng nền toàn website

  -----------------------------------------------------------------------
  Hiệu ứng                Mô tả                   Cách triển khai
  ----------------------- ----------------------- -----------------------
  Ambient glow            Vùng sáng xanh mờ       CSS radial-gradient +
                          chuyển động chậm        keyframes

  Floating particles      Các hạt sáng nhỏ trôi   Canvas hoặc CSS
                          chậm                    

  Fog movement            Lớp sương mờ chuyển     CSS transform + opacity
                          động ngang              

  Grain texture           Hạt nhiễu rất nhẹ tạo   Overlay texture
                          chiều sâu               

  Cursor spotlight        Vùng sáng mờ đi theo    CSS radial-gradient và
                          con trỏ                 pointer coordinates

  Background parallax     Các lớp ảnh chuyển động CSS transform hoặc
                          khác tốc độ             Framer Motion
  -----------------------------------------------------------------------



## 3.2. Hiệu ứng con trỏ

-   Cursor dot nhỏ phát sáng.
-   Vòng tròn ngoài di chuyển trễ nhẹ so với con trỏ.
-   Khi hover link hoặc button, vòng tròn đổi trạng thái.
-   Khi hover project card, có thể hiện nhãn `VIEW PROJECT`.
-   Trên điện thoại và thiết bị cảm ứng, tắt custom cursor.

Không thay đổi con trỏ mặc định theo cách gây khó khăn cho người dùng;
vẫn phải giữ trạng thái focus bàn phím rõ ràng.

## 3.3. Hiệu ứng khi tải trang

Trình tự gợi ý:

1.  Nền tối xuất hiện.
2.  Logo hiện lên với hiệu ứng fade.
3.  Dòng nhãn nhỏ xuất hiện.
4.  Tiêu đề Hero reveal theo từng dòng.
5.  Mô tả và CTA trượt lên nhẹ.
6.  Ảnh nền zoom chậm và lớp ánh sáng xuất hiện.

Tổng thời gian nên khoảng 1.2--1.8 giây, không bắt người dùng chờ lâu.
Có thể bỏ intro khi người dùng quay lại trang.

## 3.4. Hiệu ứng cuộn trang

-   `Fade up reveal`: nội dung mờ dần và trượt lên.
-   `Mask reveal`: hình ảnh xuất hiện qua lớp mask.
-   `Stagger`: các card xuất hiện lần lượt.
-   `Parallax`: ảnh nền chuyển động chậm hơn nội dung.
-   `Text reveal`: từng dòng tiêu đề xuất hiện theo nhịp.
-   `Progress indicator`: thanh tiến trình đọc bài hoặc tiến trình cuộn
    trang.

Chỉ chạy một số animation tiêu biểu ở mỗi section, tránh làm mọi dòng
chữ đều chuyển động.

## 3.5. Hiệu ứng hover

-   Button: ánh sáng chạy nhẹ qua bề mặt.
-   Card: nâng lên vài pixel, viền chuyển màu.
-   Ảnh: zoom nhẹ 1.03--1.06 lần.
-   Link: underline mở rộng từ trái sang phải.
-   Tag công nghệ: đổi nền và màu chữ mượt.
-   Navigation: thanh chỉ báo trượt đến mục đang active.

## 3.6. Chuyển trang

-   Fade giữa các route.
-   Trang mới trượt lên rất nhẹ.
-   Thanh điều hướng giữ cảm giác ổn định.
-   Không dùng transition dài khiến người xem cảm thấy website chậm.

Nếu framework hoặc router không hỗ trợ chuyển route mượt ổn định, ưu
tiên chuyển động nội bộ từng trang thay vì cố tạo hiệu ứng phức tạp.

------------------------------------------------------------------------

# 4. Cấu trúc 5 trang và thiết kế chi tiết

# 4.1. HOME --- The Entrance

**Mục tiêu:** Tạo ấn tượng mạnh ngay trong 5 giây đầu.

### Bố cục Hero

-   Header trong suốt, chuyển sang nền kính khi cuộn.
-   Nền ảnh rừng toàn màn hình.
-   Overlay tối và sương mờ.
-   Nhãn nhỏ: `PORTFOLIO / 2026`.
-   Tiêu đề lớn:

``` text
HELLO, I'M
NGUYEN THANH NHAN.

I BUILD
DIGITAL EXPERIENCES.
```

-   Mô tả:
    `Developer exploring the intersection of technology, creativity and meaningful experiences.`
-   CTA: `EXPLORE MY WORK` và `LET'S CONNECT`.
-   Góc dưới: `SCROLL TO EXPLORE` cùng mũi tên chuyển động.
-   Một nhãn trạng thái nhỏ: `OPEN TO LEARNING & COLLABORATION` (chỉ
    dùng nếu đúng).

### Hiệu ứng riêng

1.  Hero background zoom chậm.
2.  Sương mù trôi ngang ở tốc độ thấp.
3.  Tiêu đề reveal theo dòng.
4.  Hạt sáng chuyển động nhẹ.
5.  Cursor spotlight trên desktop.
6.  CTA có hiệu ứng ánh sáng khi hover.
7.  Scroll indicator nhấp nhô nhẹ.

### Các section phía dưới

**A. Introduction**

Một đoạn giới thiệu ngắn đặt cạnh ảnh hoặc khối hình thiên nhiên.

**B. Selected Projects**

Ba dự án nổi bật, mỗi card có ảnh thật, mô tả, stack và link.

**C. My Focus**

Ba nhóm nội dung: `Web Development`, `Backend Engineering`,
`Continuous Learning`.

**D. Latest Posts**

Ba bài viết mới nhất được lấy từ hệ thống Markdown.

**E. Closing Banner**

`LET'S CREATE SOMETHING MEANINGFUL.`

Nút dẫn đến Contact.

------------------------------------------------------------------------

# 4.2. ABOUT --- The Person Behind the Code

**Mục tiêu:** Cho người xem hiểu con người, tư duy và định hướng phát
triển.

### Bố cục

1.  Hero nhỏ với tiêu đề `A LITTLE ABOUT ME`.
2.  Ảnh cá nhân hoặc hình ảnh mang dấu ấn riêng.
3.  Câu chuyện học tập và hành trình lập trình.
4.  Skills map theo nhóm công nghệ.
5.  Timeline quá trình học và dự án.
6.  Mục tiêu phát triển trong tương lai.

### Hiệu ứng

-   Ảnh chân dung có parallax nhẹ.
-   Các đoạn văn reveal theo section.
-   Timeline line được vẽ dần khi cuộn.
-   Skill cards xuất hiện stagger.
-   Các nhãn công nghệ có hover glow.

### Cách thể hiện kỹ năng

Không dùng phần trăm kỹ năng tùy ý. Hãy dùng nhãn:

-   `Working with`
-   `Practiced in projects`
-   `Currently learning`

Chỉ đưa công nghệ thực sự đã sử dụng vào portfolio.

------------------------------------------------------------------------

# 4.3. PROJECTS --- The Work Gallery

**Mục tiêu:** Biến dự án thành bằng chứng về năng lực thực tế.

### Bố cục

-   Tiêu đề: `SELECTED WORK`.
-   Mô tả ngắn.
-   Bộ lọc: `ALL`, `WEB`, `BACKEND`, `DATABASE`.
-   Lưới dự án 2 cột trên desktop, 1 cột trên mobile.
-   Có thể thêm một dự án Featured chiếm chiều rộng lớn.

### Project card

Mỗi card có:

-   Ảnh chụp giao diện.
-   Số thứ tự dự án.
-   Tên dự án.
-   Mô tả vấn đề giải quyết.
-   Tech stack.
-   Vai trò cá nhân.
-   Link GitHub.
-   Link Live Demo nếu có.

### Hiệu ứng

-   Ảnh zoom nhẹ khi hover.
-   Card nghiêng rất nhẹ theo vị trí con trỏ trên desktop.
-   Viền gradient chuyển động.
-   Nhãn `VIEW CASE STUDY` trượt vào.
-   Khi lọc, card fade/scale thay vì biến mất đột ngột.
-   Ảnh xuất hiện bằng mask reveal khi cuộn.

Không áp dụng hiệu ứng nghiêng 3D cho mobile hoặc người dùng đã chọn
giảm chuyển động.

------------------------------------------------------------------------

# 4.4. POSTS --- The Knowledge Forest

**Mục tiêu:** Tạo một khu vực blog kỹ thuật đẹp, dễ đọc và đăng bài bằng
Git.

### Giao diện

-   Hero: `THOUGHTS, NOTES & DISCOVERIES`.
-   Featured post lớn.
-   Danh sách bài viết theo dạng editorial.
-   Bộ lọc category và tag.
-   Tìm kiếm bài viết.
-   Trang chi tiết có mục lục, thời gian đọc, ngày đăng và bài liên
    quan.

### Hiệu ứng

-   Featured cover parallax nhẹ.
-   Category chip có hover.
-   Post card reveal lần lượt.
-   Underline tiêu đề chạy khi hover.
-   Reading progress bar ở đầu trang.
-   Mục lục active theo section đang đọc.
-   Nút copy code có phản hồi trực quan.

### Đăng bài bằng Git

Thư mục:

``` text
content/
└── posts/
    ├── bat-dau-voi-git.md
    ├── tim-hieu-rest-api.md
    └── hanh-trinh-hoc-web.md
```

Ví dụ metadata:

``` md
---
title: "Tìm hiểu REST API"
description: "Những kiến thức cơ bản về REST API."
date: "2026-10-30"
category: "Backend"
tags: ["API", "Backend", "HTTP"]
cover: "/images/posts/rest-api.webp"
published: true
---

# Tìm hiểu REST API

Nội dung bài viết được viết bằng Markdown.

## REST API là gì?

Viết nội dung tại đây.
```

### Quy trình xuất bản

``` bash
git pull origin main

# Tạo hoặc chỉnh sửa file Markdown
# content/posts/ten-bai-viet.md

git add content/posts/
git commit -m "docs: add new article"
git push origin main
```

GitHub kết nối với Vercel/Netlify hoặc hosting phù hợp. Khi có commit
vào nhánh production, hosting chạy build và deploy. Ứng dụng đọc
Markdown để tạo danh sách và trang chi tiết bài viết.

**Điều quan trọng:** Git không tự biến file Markdown thành bài viết trên
giao diện. Website cần có bộ đọc Markdown, tạo route theo slug và quy
trình build/deploy.

------------------------------------------------------------------------

# 4.5. CONTACT --- The Connection Point

**Mục tiêu:** Kết thúc hành trình bằng một lời mời kết nối rõ ràng.

### Bố cục

-   Nền tối, một vùng ánh sáng xanh ở trung tâm.
-   Tiêu đề: `HAVE A PROJECT IN MIND?`
-   Mô tả:
    `I'd love to hear about ideas, projects and opportunities to learn together.`
-   Email.
-   GitHub.
-   LinkedIn nếu có.
-   Form liên hệ nếu đã có backend hoặc dịch vụ xử lý an toàn.

### Hiệu ứng

-   Vùng sáng ambient chuyển động chậm.
-   CTA có viền phát sáng.
-   Icon mạng xã hội phản hồi khi hover.
-   Form field có focus transition.
-   Thành công/thất bại của form có thông báo rõ ràng.

Không đưa API key hoặc secret vào mã frontend.

------------------------------------------------------------------------

# 5. Các component dùng chung

  Component           Chức năng              Hiệu ứng
  ------------------- ---------------------- -----------------------------------
  Navbar              Điều hướng             Glass on scroll, active underline
  CustomCursor        Con trỏ tùy chỉnh      Delayed follow, hover state
  AmbientBackground   Không khí nền          Glow, fog, particles
  SectionHeading      Tiêu đề section        Text reveal
  MagneticButton      CTA                    Magnetic hover nhẹ
  ProjectCard         Thẻ dự án              3D tilt nhẹ, image zoom
  PostCard            Thẻ bài viết           Reveal, underline
  SkillBadge          Nhãn công nghệ         Glow hover
  Timeline            Hành trình             Draw line on scroll
  ScrollProgress      Tiến trình             Progress indicator
  BackToTop           Lên đầu trang          Smooth scroll
  Footer              Thông tin cuối trang   Fade reveal

------------------------------------------------------------------------

# 6. Công nghệ triển khai

## Stack khuyến nghị

  Công nghệ                Vai trò
  ------------------------ ---------------------------------------------
  Next.js                  Framework React, routing và SEO
  TypeScript               Kiểu dữ liệu
  Tailwind CSS             Styling và responsive
  Framer Motion / Motion   Animation và scroll effects
  GSAP + ScrollTrigger     Chuyển động cuộn phức tạp, dùng có chọn lọc
  Lenis (optional)         Smooth scrolling, chỉ dùng nếu thực sự cần
  Lucide                   Icon
  Markdown / MDX           Nội dung bài viết
  gray-matter              Đọc metadata
  remark / rehype          Xử lý Markdown
  Git + GitHub             Quản lý source và nội dung
  Vercel / Netlify         Build và deploy

### Quy tắc chọn thư viện

-   Dùng CSS cho hover, fade và chuyển động đơn giản.
-   Dùng Motion cho animation component và reveal.
-   Chỉ dùng GSAP cho những cảnh cuộn cần timeline phức tạp.
-   Không cần cài nhiều thư viện chỉ để tạo cùng một hiệu ứng.
-   Smooth scrolling phải tôn trọng thao tác bàn phím, touch và
    `prefers-reduced-motion`.

------------------------------------------------------------------------

# 7. Kiến trúc thư mục

Ví dụ cấu trúc theo Next.js App Router:

``` text
nguyen-thanh-nhan-portfolio/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── projects/
│   │   └── posts/
│   ├── textures/
│   └── favicon.ico
│
├── content/
│   └── posts/
│       ├── bat-dau-voi-git.md
│       └── tim-hieu-rest-api.md
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── posts/page.tsx
│   │   ├── posts/[slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── motion/
│   │   ├── background/
│   │   ├── home/
│   │   ├── projects/
│   │   ├── posts/
│   │   └── ui/
│   │
│   ├── hooks/
│   ├── lib/
│   │   ├── posts.ts
│   │   └── utils.ts
│   ├── data/
│   │   ├── profile.ts
│   │   └── projects.ts
│   └── styles/
│
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

------------------------------------------------------------------------

# 8. Quy tắc animation và hiệu năng

Một portfolio nhiều hiệu ứng nhưng tải chậm hoặc gây chóng mặt sẽ không
tạo cảm giác chuyên nghiệp. Áp dụng các nguyên tắc sau:

## 8.1. Timing

  Loại chuyển động         Thời lượng tham khảo
  -------------------- ------------------------
  Hover button                       180--280ms
  Hover card                         250--400ms
  Text reveal                        500--800ms
  Section reveal                     450--700ms
  Page transition                    250--450ms
  Ambient background     12--30 giây mỗi chu kỳ

## 8.2. Performance

-   Ưu tiên animate `transform` và `opacity`.
-   Tránh animate liên tục `width`, `height`, `top`, `left` nếu không
    cần.
-   Không tạo hàng trăm DOM particles.
-   Canvas/WebGL chỉ dùng khi có lợi ích thị giác rõ ràng.
-   Lazy-load ảnh ở section bên dưới.
-   Dùng WebP/AVIF và khai báo kích thước ảnh.
-   Hạn chế video nền; nếu dùng cần poster và phương án tĩnh.
-   Không chạy hiệu ứng nặng trên thiết bị yếu.
-   Kiểm tra trên điện thoại thật và mạng chậm.

## 8.3. Accessibility

-   Tôn trọng `prefers-reduced-motion`.
-   Có thể tắt hiệu ứng nền chuyển động.
-   Không dùng animation nhấp nháy nhanh.
-   Giữ contrast đủ cao.
-   Điều hướng bằng bàn phím được.
-   Focus state không bị custom cursor che khuất.
-   Không phụ thuộc vào hover để truy cập nội dung.

## 8.4. Chế độ giảm chuyển động

Khi người dùng bật Reduce Motion:

-   Tắt parallax.
-   Tắt cursor follow.
-   Tắt particle chuyển động.
-   Giảm hoặc bỏ page transition.
-   Dùng fade đơn giản hoặc hiển thị nội dung ngay.

------------------------------------------------------------------------

# 9. Kế hoạch thực hiện

Dự kiến 5--7 tuần, có thể thay đổi tùy thời gian và kinh nghiệm.

  Tuần   Công việc                                   Kết quả
  ------ ------------------------------------------- -------------------------
  1      Brand, moodboard, wireframe, màu và font    Design system
  2      Setup Next.js, layout, responsive, Navbar   Foundation
  3      Home, background effects, motion system     Hero experience
  4      About, Projects, project interactions       Profile và work gallery
  5      Markdown blog, Post listing, Post detail    Blog hoạt động
  6      Contact, SEO, accessibility, performance    Hoàn thiện chức năng
  7      Testing, deploy, sửa lỗi và tối ưu          Website public

## Checklist nghiệm thu

### Visual

-   [ ] Màu sắc và typography nhất quán.
-   [ ] Hero tạo ấn tượng rõ ràng.
-   [ ] Background không gây rối mắt.
-   [ ] Các section có nhịp điệu riêng.
-   [ ] Ảnh dự án là ảnh thật.

### Motion

-   [ ] Intro không làm người dùng phải chờ lâu.
-   [ ] Reveal hoạt động đúng khi cuộn.
-   [ ] Hover có phản hồi rõ.
-   [ ] Không có animation gây giật.
-   [ ] Reduce Motion hoạt động.

### Content

-   [ ] Thông tin cá nhân chính xác.
-   [ ] Kỹ năng không phóng đại.
-   [ ] Dự án ghi rõ vai trò.
-   [ ] Bài viết Markdown hiển thị đúng.
-   [ ] Link GitHub và liên hệ hoạt động.

### Technical

-   [ ] Responsive mobile/tablet/desktop.
-   [ ] Không có lỗi console nghiêm trọng.
-   [ ] Ảnh được tối ưu.
-   [ ] SEO cơ bản đầy đủ.
-   [ ] Build production thành công.
-   [ ] Push Git kích hoạt deploy.
-   [ ] Không lộ secret hoặc thông tin riêng tư.

------------------------------------------------------------------------

# 10. Tiêu chuẩn hoàn thiện cuối cùng

Portfolio được xem là đạt yêu cầu khi:

1.  Có đủ 5 trang Home, About, Projects, Posts và Contact.
2.  Giao diện thể hiện rõ phong cách Nature × Futuristic.
3.  Hero có chiều sâu thị giác và animation được kiểm soát.
4.  Có motion system thống nhất, không phải các hiệu ứng rời rạc.
5.  Nội dung dự án và kỹ năng phản ánh đúng năng lực.
6.  Bài viết được tạo bằng Markdown và quản lý qua Git.
7.  Push lên nhánh production có thể kích hoạt build/deploy.
8.  Website hoạt động tốt trên desktop và mobile.
9.  Có chế độ giảm chuyển động và hỗ trợ bàn phím.
10. Hiệu năng đủ tốt để trải nghiệm mượt trên thiết bị phổ thông.

------------------------------------------------------------------------

# 11. Kết luận

**Nguyễn Thanh Nhàn --- Nature × Futuristic Portfolio** hướng đến một
website cá nhân có dấu ấn thị giác rõ ràng, kết hợp cảnh quan thiên
nhiên điện ảnh với trải nghiệm công nghệ hiện đại. Hệ thống animation
gồm ambient glow, fog, particles, parallax, text reveal, scroll reveal,
hover interaction và page transition sẽ tạo cảm giác sống động nhưng vẫn
ưu tiên khả năng đọc và hiệu năng. Năm trang Home, About, Projects,
Posts và Contact giúp giới thiệu cá nhân, chứng minh năng lực, chia sẻ
kiến thức và kết nối. Điểm nhấn kỹ thuật là blog Markdown được quản lý
bằng Git, kết hợp build/deploy tự động. Thành công của portfolio không
nằm ở số lượng hiệu ứng, mà ở sự hài hòa giữa thiết kế, chuyển động, nội
dung và chất lượng kỹ thuật.

> **Final experience:** A quiet forest. A living interface. A
> developer's journey.
