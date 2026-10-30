export interface Project {
  id: string;
  index: string;
  title: string;
  category: "WEB" | "BACKEND" | "DATABASE";
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  image?: string;
  accentColor?: string;
}

export const projectsData: Project[] = [
  {
    id: "nova-cinema",
    index: "01",
    title: "Nova Cinema - Ticket Booking Platform",
    category: "WEB",
    featured: true,
    summary: "Nền tảng đặt vé xem phim trực tuyến hoàn chỉnh với sơ đồ phòng chiếu thời gian thực, quản lý suất chiếu và thanh toán hóa đơn tức thời.",
    problem: "Quy trình đặt vé truyền thống thường gặp sự cố nghẽn mạng vào giờ cao điểm và tình trạng giữ ghế trùng lặp giữa các phòng chiếu.",
    solution: "Thiết kế kiến trúc hệ thống với cơ chế khóa ghế theo phiên tạm thời, tối ưu truy vấn sơ đồ phòng chiếu và giao diện thân thiện với người dùng.",
    techStack: ["C# .NET", "SQL Server", "TypeScript", "Modern UI", "Bootstrap"],
    role: "Full-stack Developer (Thiết kế CSDL, nghiệp vụ đặt vé, UI phòng chiếu)",
    githubUrl: "https://github.com/nhan100306/datvexemphim",
    liveUrl: "#",
    image: "/images/projects/nova-cinema.png",
    accentColor: "gold"
  },
  {
    id: "ql-phongtro",
    index: "02",
    title: "Smart Room Rental Management System",
    category: "BACKEND",
    featured: true,
    summary: "Giải pháp chuyển đổi số quản lý phòng trọ: quản lý hợp đồng thuê, tính toán tự động điện nước theo lũy tiến và theo dõi công nợ cư dân minh bạch.",
    problem: "Chủ nhà trọ mất nhiều thời gian ghi chép thủ công sổ sách số điện, nước, dễ sai sót và thiếu báo cáo doanh thu minh bạch.",
    solution: "Xây dựng hệ thống quản lý tập trung hóa dữ liệu với bảng tính lũy tiến chuẩn xác, xuất phiếu thu PDF và phân quyền linh hoạt theo vai trò.",
    techStack: ["C#", "WinForms / WPF", "SQL Server", "Reporting Services"],
    role: "Lead Developer (Thiết kế kiến trúc phần mềm, thuật toán tính hóa đơn)",
    githubUrl: "https://github.com/nhan100306/Ql_Phongtro",
    liveUrl: "#",
    image: "/images/projects/ql-phongtro.png",
    accentColor: "terracotta"
  },
  {
    id: "quan-ly-don-hang",
    index: "03",
    title: "Enterprise Order & Supply Management",
    category: "DATABASE",
    featured: true,
    summary: "Hệ thống quản lý chuỗi đơn hàng và tồn kho sản phẩm, theo dõi trạng thái giao vận và kiểm soát tồn kho tức thời cho doanh nghiệp bán lẻ.",
    problem: "Sai lệch số lượng tồn kho giữa các khâu bán hàng và kho vận, dẫn đến tình trạng hết hàng đột ngột và chậm trễ đơn giao.",
    solution: "Chuẩn hóa quan hệ cơ sở dữ liệu (3NF) với Stored Procedures và Triggers đảm bảo tính toàn vẹn (ACID) khi cập nhật kho hàng nhiều luồng.",
    techStack: ["SQL Server", "T-SQL Stored Procedures", "Database Normalization", ".NET"],
    role: "Database Architect & Backend Developer",
    githubUrl: "https://github.com/nhan100306/quanlydonhang",
    liveUrl: "#",
    image: "/images/projects/quanlydonhang.png",
    accentColor: "teal"
  },
  {
    id: "digital-forest-portfolio",
    index: "04",
    title: "Luxury Nature × Cinematic Portfolio",
    category: "WEB",
    featured: false,
    summary: "Website portfolio cá nhân đạt chuẩn thương mại quốc tế, kết hợp nghệ thuật phong cảnh điện ảnh và tinh thần thiết kế tạp chí cao cấp.",
    problem: "Các mẫu portfolio thông thường thiếu cá tính nhận diện thị giác độc bản và không có hệ thống blog quản lý phiên bản qua Git.",
    solution: "Áp dụng Next.js App Router, Tailwind CSS, Framer Motion và Markdown Engine tự động build & deploy trên nền Vercel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Markdown"],
    role: "Creative Director & Frontend Engineer",
    githubUrl: "https://github.com/nhan100306/nhan100306.github.io",
    liveUrl: "https://nhan100306.github.io",
    image: "/images/hero/forest-lake-dusk.png",
    accentColor: "gold"
  }
];
