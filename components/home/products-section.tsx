'use client';

import { productsData } from '@/data/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/motion';

export function ProductsSection() {
  return (
    <section className="container py-16 md:py-24">
      <FadeIn delay={0.2}>
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            我的产品
          </h2>
          <p className="text-lg text-muted-foreground">
            精心打造的 AI 相关产品和教程
          </p>
        </div>
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productsData.map((product, index) => (
          <FadeIn key={product.id} delay={0.3 + index * 0.1}>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                  <span className="text-2xl font-bold text-white">
                    {product.name.charAt(0)}
                  </span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  了解更多
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}