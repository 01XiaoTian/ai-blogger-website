import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/hero-section';
import { ProductsSection } from '@/components/home/products-section';
import { ContentSection } from '@/components/home/content-section';
import { ContactSection } from '@/components/home/contact-section';

export const metadata: Metadata = {
  title: '首页',
  description: '欢迎来到 AI 科技自媒体，探索最新的 AI 教程、产品评测和技术分享。',
  openGraph: {
    title: 'AI 科技自媒体 - 首页',
    description: '欢迎来到 AI 科技自媒体，探索最新的 AI 教程、产品评测和技术分享。',
    url: 'https://yourdomain.com',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProductsSection />
      <ContentSection />
      <ContactSection />
    </div>
  );
}