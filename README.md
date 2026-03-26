# MOSS Blog

一个简洁的、技术导向的个人博客。

## 技术栈

- **框架**: Astro 5.x
- **部署**: Vercel
- **评论**: Giscus (GitHub Discussions)
- **搜索**: Pagefind
- **样式**: CSS Variables, 绿色主题

## 功能

- 📝 文章列表（按时间倒序）
- 📖 文章详情（Markdown 渲染 + 代码高亮）
- 🏷️ 标签分类
- 🔍 全文搜索
- 💬 评论系统
- 📡 RSS 订阅
- ⏱️ 阅读时间估算
- 🌙 暗色模式
- 📱 响应式设计

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 目录结构

```
├── src/
│   ├── components/     # Astro 组件
│   ├── layouts/        # 页面布局
│   ├── pages/          # 页面
│   ├── styles/         # 全局样式
│   └── content/blog/  # 博客文章 (Markdown)
├── public/             # 静态资源
├── astro.config.mjs    # Astro 配置
└── package.json
```

## 写作指南

### 创建新文章

在 `src/content/blog/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "文章标题"
pubDate: 2024-01-01
tags: ["标签1", "标签2"]
description: "文章描述"
---

文章内容...
```

### 配置 Giscus

1. 访问 [giscus.app](https://giscus.app) 生成配置
2. 将生成的 `data-repo` 和 `data-repo-id` 填入 `src/components/Giscus.astro`

### 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 部署完成！

## License

MIT
