import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI 科技自媒体 - 01XiaoTian",
    template: "%s | AI 科技自媒体"
  },
  description: "专注于分享 AI 教程、AI 编程、AI 产品等内容，致力于让 AI 技术更简单易懂。探索 ChatGPT、Midjourney 等前沿 AI 工具的使用方法和最佳实践。",
  keywords: ["AI", "人工智能", "教程", "编程", "产品评测", "ChatGPT", "Midjourney", "AI 工具", "机器学习", "深度学习"],
  authors: [{ name: "01XiaoTian" }],
  creator: "01XiaoTian",
  publisher: "AI 科技自媒体",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://yourdomain.com',
    title: 'AI 科技自媒体 - 01XiaoTian',
    description: '专注于分享 AI 教程、AI 编程、AI 产品等内容，致力于让 AI 技术更简单易懂。',
    siteName: 'AI 科技自媒体',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI 科技自媒体',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 科技自媒体 - 01XiaoTian',
    description: '专注于分享 AI 教程、AI 编程、AI 产品等内容，致力于让 AI 技术更简单易懂。',
    images: ['/og-image.png'],
    creator: '@01XiaoTian',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI 科技自媒体',
    url: 'https://yourdomain.com',
    description: '专注于分享 AI 教程、AI 编程、AI 产品等内容，致力于让 AI 技术更简单易懂。',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://yourdomain.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    author: {
      '@type': 'Person',
      name: '01XiaoTian',
    },
  };

  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}