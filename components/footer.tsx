import Link from 'next/link';
import { Github, Youtube, BookOpen, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="font-semibold">AI 科技自媒体</h3>
            <p className="text-sm text-muted-foreground">
              专注于分享 AI 教程、AI 编程、AI 产品等内容
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/ai-sites" className="text-muted-foreground hover:text-primary">
                  AI 导航
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">社交媒体</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/01XiaoTian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <BookOpen className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">联系方式</h3>
            <p className="text-sm text-muted-foreground">
              欢迎通过社交媒体与我联系
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 AI 科技自媒体. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}