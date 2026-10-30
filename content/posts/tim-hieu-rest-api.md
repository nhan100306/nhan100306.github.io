---
title: "Tìm hiểu REST API & Thiết kế kiến trúc Backend hiện đại"
description: "Khám phá các nguyên lý cốt lõi của REST, HTTP methods, status codes và best practices khi xây dựng API dịch vụ."
date: "2026-10-30"
category: "Backend"
tags: ["API", "Backend", "HTTP", "Architecture"]
cover: "/images/posts/rest-api.webp"
published: true
readingTime: "5 min read"
---

# Tìm hiểu REST API & Thiết kế kiến trúc Backend hiện đại

REST (Representational State Transfer) là kiểu kiến trúc phần mềm định nghĩa các ràng buộc được sử dụng để tạo ra các web services.

## 1. REST API là gì?

REST dựa trên giao thức truyền thông HTTP không trạng thái (stateless), sử dụng các phương thức chuẩn như `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.

```typescript
// Ví dụ một endpoint trả về thông tin người dùng
app.get('/api/v1/users/:id', async (req, res) => {
  const user = await database.users.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  return res.json({ data: user });
});
```

## 2. Các nguyên tắc thiết kế quan trọng

1. **Statelessness (Phi trạng thái):** Mỗi request từ client lên server phải chứa đầy đủ thông tin để server hiểu và xử lý, không lưu trữ session trạng thái ở server.
2. **Client-Server Separation:** Giao diện người dùng và phần lưu trữ dữ liệu tách rời nhau hoàn toàn.
3. **Cacheability:** Phản hồi từ server phải định nghĩa rõ ràng có được lưu cache hay không.
4. **Uniform Interface:** Chuẩn hóa cấu trúc URL danh từ số nhiều (ví dụ `/api/projects`, `/api/posts`).

## 3. Tối ưu hóa hiệu năng API

- Sử dụng nén gzip/brotli.
- Đánh index hợp lý cho các trường truy vấn trong Database.
- Thiết lập Rate Limiting và CORS an toàn.
