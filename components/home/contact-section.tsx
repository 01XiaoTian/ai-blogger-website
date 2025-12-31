'use client';

import { Mail, Github, Youtube, BookOpen, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/motion';

export function ContactSection() {
  return (
    <section className="container py-16 md:py-24">
      <FadeIn>
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            联系我
          </h2>
          <p className="text-lg text-muted-foreground">
            欢迎通过以下方式与我联系
          </p>
        </div>
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn delay={0.2}>
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">
                邮箱联系
              </CardTitle>
              <CardDescription>
                发送邮件与我交流
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <a href="mailto:contact@example.com">
                  发送邮件
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">
                社交媒体
              </CardTitle>
              <CardDescription>
                关注我的社交媒体账号
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/01XiaoTian"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-4 w-4" />
                    YouTube
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    掘金
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}