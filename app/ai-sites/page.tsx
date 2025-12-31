import type { Metadata } from 'next';
import { AISitesPage } from '@/components/ai-sites/ai-sites-page';

export const metadata: Metadata = {
  title: 'AI 导航',
  description: '精选 AI 工具导航，汇集最优质的 AI 产品和服务，包括 ChatGPT、Midjourney、Claude 等热门 AI 工具。',
  keywords: ['AI 导航', 'AI 工具', 'ChatGPT', 'Midjourney', 'Claude', 'AI 产品', 'AI 服务'],
  openGraph: {
    title: 'AI 导航 - AI 科技自媒体',
    description: '精选 AI 工具导航，汇集最优质的 AI 产品和服务，包括 ChatGPT、Midjourney、Claude 等热门 AI 工具。',
    url: 'https://yourdomain.com/ai-sites',
  },
};

export default function AISites() {
  return <AISitesPage />;
}