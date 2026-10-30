---
title: "Bắt đầu với Git & Workflow cộng tác hiệu quả"
description: "Hướng dẫn thực chiến làm việc với Git, quản lý nhánh, giải quyết xung đột và tích hợp CI/CD tự động."
date: "2026-10-25"
category: "DevOps"
tags: ["Git", "Workflow", "CI/CD", "GitHub"]
cover: "/images/posts/git-workflow.webp"
published: true
readingTime: "4 min read"
---

# Bắt đầu với Git & Workflow cộng tác hiệu quả

Git là hệ thống quản lý phiên bản phân tán (Distributed Version Control System) tiêu chuẩn không thể thiếu của mọi lập trình viên.

## 1. Các lệnh nền tảng hàng ngày

```bash
# Khởi tạo hoặc clone repository
git clone https://github.com/nhan100306/nhan100306.github.io.git

# Kiểm tra trạng thái và log commit
git status
git log --oneline --graph

# Tạo nhánh tính năng mới
git checkout -b feature/nature-futuristic-theme
```

## 2. Quy ước đặt tên Commit (Conventional Commits)

- `feat:` Thêm tính năng mới cho sản phẩm.
- `fix:` Khắc phục lỗi (bug fix).
- `docs:` Bổ sung hoặc chỉnh sửa tài liệu.
- `style:` Thay đổi định dạng mã, khoảng trắng, không ảnh hưởng logic.
- `refactor:` Tái cấu trúc mã nguồn.
- `perf:` Tối ưu hóa hiệu năng render hoặc truy vấn.

## 3. Quản lý Pull Request & Review

Luôn giữ pull request nhỏ, súc tích và có automated tests kiểm tra tính toàn vẹn trước khi merge vào nhánh chính `main`.
