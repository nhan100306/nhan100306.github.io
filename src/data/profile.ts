export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; level: "Working with" | "Practiced in projects" | "Currently learning" }[];
}

export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  technologies: string[];
}

export const profileData = {
  name: "Nguyen Thanh Nhan",
  displayTitle: "NGUYEN THANH NHAN",
  role: "Creative Developer · Technology Enthusiast",
  tagline: "Exploring the intersection of technology, creativity and nature.",
  subTagline: "Cinematic. Precise. Sustainable.",
  brandLine: "ROOTED IN NATURE. BUILT FOR THE FUTURE.",
  status: "AVAILABLE FOR WORLDWIDE COLLABORATION",
  email: "nhan100306@gmail.com",
  github: "https://github.com/nhan100306",
  location: "Vietnam (Available Worldwide)",
  aboutBio: [
    "Tôi là một Creative Developer và Full-stack Engineer đam mê kiến tạo các sản phẩm số cao cấp, nơi vẻ đẹp điện ảnh của thiên nhiên hòa quyện cùng tư duy kỹ thuật chính xác tuyệt đối.",
    "Lấy cảm hứng từ sự bất biến, tĩnh lặng và chiều sâu của núi rừng lúc hoàng hôn, phong cách thiết kế và lập trình của tôi chú trọng vào khoảng trắng có chủ đích, typography giàu tính biểu cảm và các vi tương tác mượt mà ở tần số 60 FPS.",
    "Từ các giải pháp đặt vé thời gian thực, quản lý chuỗi cung ứng doanh nghiệp đến hệ thống blog Markdown tự động hóa qua Git, tôi luôn cam kết đem lại các sản phẩm chuẩn mực, đạt tiêu chuẩn thương mại quốc tế."
  ],
  skillGroups: [
    {
      category: "Frontend & Creative Engineering",
      description: "Xây dựng trải nghiệm tương tác cao cấp, bố cục tạp chí responsive và tối ưu hiệu năng mượt mà.",
      skills: [
        { name: "React 19 / Next.js 15", level: "Working with" },
        { name: "TypeScript Core", level: "Working with" },
        { name: "Tailwind CSS Architecture", level: "Working with" },
        { name: "Framer Motion & Micro-interactions", level: "Working with" },
        { name: "Editorial Layouts & Typography", level: "Practiced in projects" },
        { name: "Accessibility & Performance (A11y)", level: "Practiced in projects" }
      ]
    },
    {
      category: "Backend & Systems Architecture",
      description: "Thiết kế kiến trúc dịch vụ tin cậy, chuẩn hóa logic nghiệp vụ và bảo vệ dữ liệu toàn vẹn.",
      skills: [
        { name: "C# / .NET Ecosystem", level: "Working with" },
        { name: "RESTful API Design", level: "Working with" },
        { name: "Node.js Runtimes", level: "Practiced in projects" },
        { name: "Microservices & Distributed Systems", level: "Currently learning" },
        { name: "Cloud Infrastructure (AWS/Vercel)", level: "Currently learning" }
      ]
    },
    {
      category: "Database & Engineering Tools",
      description: "Mô hình hóa dữ liệu quan hệ chặt chẽ, tối ưu truy vấn phức tạp và quản trị phiên bản tự động.",
      skills: [
        { name: "Microsoft SQL Server & T-SQL", level: "Working with" },
        { name: "MySQL / Relational DBs", level: "Practiced in projects" },
        { name: "Git Workflow & CI/CD Pipelines", level: "Working with" },
        { name: "Database Normalization (3NF/ACID)", level: "Working with" },
        { name: "Azure Data Studio", level: "Practiced in projects" }
      ]
    }
  ] as SkillGroup[],
  timeline: [
    {
      period: "2024 - Hiện tại",
      role: "Nghiên cứu & Phát triển Hệ thống Web Thương mại",
      organization: "Dự án Thực chiến & Đào tạo Chuyên sâu",
      description: "Thiết kế và triển khai các ứng dụng web phức tạp: Nền tảng đặt vé xem phim Nova Cinema, hệ sinh thái quản lý phòng trọ lũy tiến và hệ thống Portfolio phong cách Cinematic Editorial.",
      technologies: ["Next.js 15", "TypeScript", "C# .NET", "SQL Server", "Tailwind CSS"]
    },
    {
      period: "2023 - 2024",
      role: "Nền tảng Khoa học Máy tính & Kỹ thuật Phần mềm",
      organization: "Chương trình Đào tạo CNTT",
      description: "Xây dựng tư duy giải thuật, mô hình hóa hướng đối tượng (OOP), quản trị cơ sở dữ liệu quan hệ và kiến trúc ứng dụng phân tầng.",
      technologies: ["C#", "SQL Server", "Git", "OOP Design Patterns"]
    }
  ] as TimelineItem[],
  focusAreas: [
    {
      title: "Web & Creative Development",
      description: "Kiến tạo giao diện điện ảnh, tương tác micro tinh tế và tốc độ phản hồi tức thì với Next.js và Tailwind.",
      icon: "layout"
    },
    {
      title: "Backend & Systems Engineering",
      description: "Thiết kế dịch vụ REST API tin cậy, mô hình hóa dữ liệu quan hệ vững chắc trên nền tảng .NET và SQL.",
      icon: "server"
    },
    {
      title: "Continuous Exploration",
      description: "Không ngừng mở rộng ranh giới tri thức: kiến trúc đám mây, hệ thống phân tán và bảo mật hiện đại.",
      icon: "cpu"
    }
  ]
};
