import { Product, AISite, Content, Profile, NavCategory } from '@/types';

// 个人信息数据
export const profileData: Profile = {
  name: '01XiaoTian',
  nickname: '小天',
  avatar: '/avatar.png',
  bio: 'AI 科技自媒体博主，专注于分享 AI 教程、AI 编程、AI 产品等内容。致力于让 AI 技术更简单易懂。',
  tags: ['AI 教程', 'AI 编程', 'AI 产品评测', '技术分享'],
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/01XiaoTian', icon: 'github' },
    { platform: 'B站', url: 'https://space.bilibili.com', icon: 'youtube' },
    { platform: '知乎', url: 'https://www.zhihu.com', icon: 'book-open' },
    { platform: '微信公众号', url: '#', icon: 'message-circle' },
  ],
};

// 产品展示数据
export const productsData: Product[] = [
  {
    id: '1',
    name: 'AI 编程助手',
    description: '基于大模型的智能编程助手，支持多种编程语言，提供代码补全、错误修复等功能。',
    icon: '/products/ai-coding-assistant.png',
    link: '#',
    category: 'tool',
    tags: ['AI', '编程', '工具'],
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'AI 绘图教程',
    description: '从零开始学习 AI 绘画，涵盖 Stable Diffusion、Midjourney 等主流工具的使用教程。',
    icon: '/products/ai-drawing-tutorial.png',
    link: '#',
    category: 'tutorial',
    tags: ['AI', '绘画', '教程'],
    createdAt: new Date('2024-02-20'),
  },
  {
    id: '3',
    name: 'AI 产品评测',
    description: '深度评测最新的 AI 产品，提供真实的使用体验和专业的分析报告。',
    icon: '/products/ai-product-review.png',
    link: '#',
    category: 'application',
    tags: ['AI', '产品', '评测'],
    createdAt: new Date('2024-03-10'),
  },
];

// AI 导航网站数据
export const aiSitesData: AISite[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'OpenAI 开发的强大对话式 AI 助手，支持多轮对话、代码生成、文本创作等功能。',
    icon: '/sites/chatgpt.png',
    link: 'https://chat.openai.com',
    category: '大模型',
    tags: ['免费', '英文', '对话'],
    rating: 5,
    isRecommended: true,
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI 图像生成工具，通过文本描述生成高质量的艺术图片。',
    icon: '/sites/midjourney.png',
    link: 'https://www.midjourney.com',
    category: 'AI 绘画',
    tags: ['付费', '英文', '绘画'],
    rating: 5,
    isRecommended: true,
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'GitHub 推出的 AI 编程助手，实时提供代码建议和补全。',
    icon: '/sites/copilot.png',
    link: 'https://github.com/features/copilot',
    category: 'AI 编程',
    tags: ['付费', '英文', '编程'],
    rating: 4.5,
    isRecommended: true,
  },
  {
    id: '4',
    name: 'Claude',
    description: 'Anthropic 开发的 AI 助手，擅长长文本处理和复杂推理。',
    icon: '/sites/claude.png',
    link: 'https://claude.ai',
    category: '大模型',
    tags: ['免费', '英文', '对话'],
    rating: 4.5,
    isRecommended: true,
  },
  {
    id: '5',
    name: 'Stable Diffusion',
    description: '开源的 AI 图像生成模型，支持本地部署和自定义训练。',
    icon: '/sites/stable-diffusion.png',
    link: 'https://stability.ai',
    category: 'AI 绘画',
    tags: ['免费', '英文', '开源'],
    rating: 4.5,
    isRecommended: false,
  },
  {
    id: '6',
    name: 'Cursor',
    description: 'AI 原生代码编辑器，集成了强大的 AI 编程助手功能。',
    icon: '/sites/cursor.png',
    link: 'https://cursor.sh',
    category: 'AI 编程',
    tags: ['付费', '英文', '编辑器'],
    rating: 4,
    isRecommended: false,
  },
];

// 内容数据
export const contentData: Content[] = [
  {
    id: '1',
    title: '从零开始学习 ChatGPT：新手入门指南',
    summary: '详细介绍 ChatGPT 的使用方法、提示词技巧和实用场景，帮助新手快速上手。',
    type: 'article',
    platform: '知乎',
    link: '#',
    tags: ['ChatGPT', '入门', '教程'],
    publishedAt: new Date('2024-01-05'),
  },
  {
    id: '2',
    title: 'AI 编程实战：使用 GitHub Copilot 提升开发效率',
    summary: '演示如何使用 GitHub Copilot 进行代码补全、错误修复和功能实现。',
    type: 'video',
    platform: 'B站',
    link: '#',
    tags: ['AI', '编程', 'Copilot'],
    publishedAt: new Date('2024-01-10'),
  },
  {
    id: '3',
    title: 'Midjourney 绘画技巧：从入门到精通',
    summary: '全面讲解 Midjourney 的使用技巧，包括提示词编写、参数设置和风格控制。',
    type: 'tutorial',
    platform: 'B站',
    link: '#',
    tags: ['AI', '绘画', 'Midjourney'],
    publishedAt: new Date('2024-01-15'),
  },
  {
    id: '4',
    title: '2024 年最值得关注的 10 个 AI 工具',
    summary: '盘点 2024 年最热门的 AI 工具，帮助你选择适合自己的 AI 助手。',
    type: 'article',
    platform: '知乎',
    link: '#',
    tags: ['AI', '工具', '推荐'],
    publishedAt: new Date('2024-01-20'),
  },
];

// 导航分类数据
export const navCategoriesData: NavCategory[] = [
  {
    id: '1',
    name: '大模型',
    icon: 'brain',
    description: '大型语言模型和对话式 AI 工具',
  },
  {
    id: '2',
    name: 'AI 绘画',
    icon: 'palette',
    description: 'AI 图像生成和艺术创作工具',
  },
  {
    id: '3',
    name: 'AI 编程',
    icon: 'code',
    description: 'AI 辅助编程和代码生成工具',
  },
  {
    id: '4',
    name: 'AI 工具',
    icon: 'wrench',
    description: '各类 AI 实用工具和插件',
  },
];