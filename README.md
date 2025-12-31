# AI 科技自媒体网站

一个基于 Next.js 14+ 构建的现代化 AI 科技自媒体网站，专注于分享 AI 教程、AI 编程、AI 产品等内容。

## 🚀 技术栈

- **框架**: Next.js 16.1.1 (App Router)
- **UI 组件**: shadcn/ui
- **样式**: Tailwind CSS 4
- **动画**: Framer Motion
- **图标**: Lucide React
- **语言**: TypeScript
- **构建工具**: Turbopack

## ✨ 功能特性

- 📱 完全响应式设计，支持移动端和桌面端
- 🎨 现代化 UI 设计，流畅的动画效果
- 🔍 AI 导航页面，支持搜索和分类筛选
- 📝 首页包含个人介绍、产品展示、最新内容、联系方式
- ⚡ 性能优化，SEO 友好
- 🌐 OpenGraph 和 Twitter Card 支持
- 📊 结构化数据（JSON-LD）

## 📦 安装和运行

### 环境要求

- Node.js 18.17 或更高版本
- npm、yarn 或 pnpm

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 生产构建

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 启动生产服务器

```bash
npm start
# 或
yarn start
# 或
pnpm start
```

## 📁 项目结构

```
ai-blogger-website/
├── app/                    # Next.js App Router
│   ├── ai-sites/          # AI 导航页面
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── ai-sites/         # AI 导航相关组件
│   ├── animations/       # 动画组件
│   ├── home/             # 首页相关组件
│   ├── ui/               # shadcn/ui 组件
│   ├── header.tsx        # 头部导航
│   └── footer.tsx        # 页脚
├── public/               # 静态资源
│   ├── robots.txt        # 爬虫配置
│   └── sitemap.xml       # 站点地图
├── next.config.ts        # Next.js 配置
└── package.json          # 项目依赖
```

## 🚀 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Next.js 并进行部署

### 其他平台部署

项目可以部署到任何支持 Node.js 的平台：

- Netlify
- AWS Amplify
- Cloudflare Pages
- 自建服务器（使用 PM2 或 Docker）

### 部署前配置

在部署前，请更新以下配置：

1. **SEO 配置** (`app/layout.tsx`):
   ```typescript
   metadataBase: new URL('https://yourdomain.com'),
   verification: {
     google: 'your-google-verification-code',
   },
   ```

2. **站点地图** (`public/sitemap.xml`):
   ```xml
   <loc>https://yourdomain.com</loc>
   ```

3. **robots.txt** (`public/robots.txt`):
   ```text
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

4. **OpenGraph 图片**:
   在 `public/` 目录下添加 `og-image.png` (1200x630)

## 🔧 配置说明

### 性能优化

项目已配置以下性能优化：

- 图片优化（AVIF、WebP 格式）
- CSS 优化
- 包导入优化
- Gzip 压缩
- 代码分割

### SEO 优化

- 完整的元数据配置
- OpenGraph 标签
- Twitter Card 标签
- 结构化数据（JSON-LD）
- robots.txt
- sitemap.xml
- 规范化 URL

### 安全头部

已配置以下安全头部：

- X-DNS-Prefetch-Control
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## 📝 待办事项

- [ ] 添加博客文章页面
- [ ] 实现评论系统
- [ ] 添加搜索功能
- [ ] 集成分析工具（Google Analytics）
- [ ] 添加暗色模式
- [ ] 实现多语言支持
- [ ] 添加 RSS 订阅

## 📄 许可证

MIT License

## 👤 作者

01XiaoTian - AI 科技自媒体

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)