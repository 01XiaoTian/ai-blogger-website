# AI Blogger Website

一个现代化的 AI 科技自媒体网站，使用 Next.js 16 构建，具有出色的性能和 SEO 优化。

## 🌟 功能特性

- ✨ 现代化的 UI 设计，响应式布局
- 🚀 基于 Next.js 16 和 React 19
- 🎨 使用 Tailwind CSS 进行样式设计
- 🔍 完整的 SEO 优化配置
- 📱 移动端友好
- ⚡ 性能优化（图片优化、代码分割、懒加载）
- 🎭 流畅的动画效果
- 🌐 多语言支持准备

## 🛠️ 技术栈

- **框架**: Next.js 16.1.1 (App Router)
- **UI 库**: React 19.2.3
- **样式**: Tailwind CSS
- **组件**: shadcn/ui
- **语言**: TypeScript
- **动画**: Framer Motion
- **字体**: Next.js 字体优化

## 📦 安装和运行

### 前置要求

- Node.js 18.x 或更高版本
- npm 或 yarn

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/01XiaoTian/ai-blogger-website.git
cd ai-blogger-website
```

2. 安装依赖
```bash
npm install
```

3. 运行开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
ai-blogger-website/
├── app/                    # Next.js App Router
│   ├── ai-sites/          # AI 导航页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── ai-sites/          # AI 导航相关组件
│   ├── animations/        # 动画组件
│   ├── home/              # 首页相关组件
│   ├── ui/                # UI 组件库
│   ├── header.tsx         # 页头组件
│   └── footer.tsx         # 页脚组件
├── data/                  # 数据文件
│   └── mock-data.ts       # 模拟数据
├── lib/                   # 工具函数
│   └── utils.ts           # 通用工具
├── public/                # 静态资源
│   ├── robots.txt         # 搜索引擎爬虫配置
│   └── sitemap.xml        # 网站地图
├── types/                 # TypeScript 类型定义
│   └── index.ts           # 类型定义
├── next.config.ts         # Next.js 配置
├── package.json           # 项目配置
└── tsconfig.json          # TypeScript 配置
```

## 🚀 部署指南

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project"
4. 导入你的 GitHub 仓库
5. Vercel 会自动检测 Next.js 并配置构建设置
6. 点击 "Deploy"

### 其他平台

项目也可以部署到以下平台：
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway

## ⚙️ 配置说明

### 性能优化

- 图片自动优化（AVIF、WebP 格式）
- 代码分割和懒加载
- CSS 优化
- 包导入优化
- Gzip 压缩

### SEO 优化

- 完整的元数据配置
- OpenGraph 标签
- Twitter Card 标签
- 结构化数据（JSON-LD）
- Sitemap 和 Robots.txt
- 规范化 URL

### 安全头部

- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Content-Security-Policy

## 📝 待办事项

- [ ] 添加博客文章页面
- [ ] 实现评论系统
- [ ] 添加搜索功能
- [ ] 集成分析工具（Google Analytics）
- [ ] 添加暗黑模式
- [ ] 实现多语言支持
- [ ] 添加 RSS 订阅
- [ ] 优化移动端体验

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 📧 联系方式

如有问题或建议，请通过以下方式联系：
- GitHub Issues
- Email: developer@example.com

## 🙏 致谢

- Next.js 团队
- shadcn/ui 组件库
- Tailwind CSS 团队
- 所有开源贡献者
