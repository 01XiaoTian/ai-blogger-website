'use client';

import { useState } from 'react';
import { navCategoriesData, aiSitesData } from '@/data/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Star, Search, Plus } from 'lucide-react';
import { Brain, Palette, Code, Wrench } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/animations/motion';

const categoryIcons = {
  '大模型': Brain,
  'AI 绘画': Palette,
  'AI 编程': Code,
  'AI 工具': Wrench,
};

export function AISitesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const categories = ['全部', ...navCategoriesData.map(c => c.name)];

  const filteredSites = aiSitesData.filter(site => {
    const matchesCategory = selectedCategory === '全部' || site.category === selectedCategory;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-12">
      <FadeIn>
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            AI 导航
          </h1>
          <p className="text-lg text-muted-foreground">
            精心整理的 AI 工具和资源导航
          </p>
        </div>
      </FadeIn>

      {/* 导航分类 */}
      <FadeIn delay={0.1}>
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category !== '全部' ? categoryIcons[category as keyof typeof categoryIcons] : null;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="gap-2"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {category}
                </Button>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* 搜索和提交 */}
      <FadeIn delay={0.2}>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="搜索 AI 工具..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button onClick={() => setShowSubmitForm(!showSubmitForm)}>
            <Plus className="mr-2 h-4 w-4" />
            提交网站
          </Button>
        </div>
      </FadeIn>

      {/* 网站卡片 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredSites.map((site, index) => (
          <FadeIn key={site.id} delay={0.3 + index * 0.05}>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                    <span className="text-xl font-bold text-white">
                      {site.name.charAt(0)}
                    </span>
                  </div>
                  {site.isRecommended && (
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">
                      <Star className="mr-1 h-3 w-3 fill-current" />
                      推荐
                    </Badge>
                  )}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {site.name}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {site.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{site.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {site.rating}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {site.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    访问网站
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

      {filteredSites.length === 0 && (
        <FadeIn>
          <div className="py-12 text-center text-muted-foreground">
            没有找到匹配的 AI 工具
          </div>
        </FadeIn>
      )}

      {/* 提交表单 */}
      {showSubmitForm && (
        <SlideIn direction="up">
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>提交 AI 网站</CardTitle>
              <CardDescription>
                帮助我们完善 AI 导航，提交你发现的优秀 AI 工具
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">网站名称</label>
                    <Input placeholder="输入网站名称" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">网站链接</label>
                    <Input placeholder="https://example.com" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">网站描述</label>
                  <Input placeholder="简要描述网站功能" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">分类</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    {navCategoriesData.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" className="w-full sm:w-auto">提交</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowSubmitForm(false)}
                    className="w-full sm:w-auto"
                  >
                    取消
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </SlideIn>
      )}
    </div>
  );
}