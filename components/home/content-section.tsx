'use client';

import { contentData } from '@/data/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Video, Book } from 'lucide-react';
import { FadeIn } from '@/components/animations/motion';

const typeIcons = {
  article: FileText,
  video: Video,
  tutorial: Book,
};

const typeLabels = {
  article: '文章',
  video: '视频',
  tutorial: '教程',
};

export function ContentSection() {
  return (
    <section className="container py-16 md:py-24 bg-muted/50">
      <FadeIn>
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            最新内容
          </h2>
          <p className="text-lg text-muted-foreground">
            分享 AI 相关的教程、文章和视频
          </p>
        </div>
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-2">
        {contentData.map((content, index) => {
          const Icon = typeIcons[content.type];
          return (
            <FadeIn key={content.id} delay={0.2 + index * 0.1}>
              <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <Badge variant="outline">{typeLabels[content.type]}</Badge>
                  <Badge variant="secondary">{content.platform}</Badge>
                </div>
                <CardTitle className="line-clamp-2">{content.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {content.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {content.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    查看详情
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}