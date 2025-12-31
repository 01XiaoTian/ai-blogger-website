'use client';

import { Github, Youtube, BookOpen, MessageCircle } from 'lucide-react';
import { profileData } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/motion';

const socialIcons = {
  github: Github,
  youtube: Youtube,
  'book-open': BookOpen,
  'message-circle': MessageCircle,
};

export function HeroSection() {
  return (
    <section className="container py-20 md:py-32">
      <FadeIn>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-4xl font-bold">
                {profileData.nickname}
              </div>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {profileData.name}
          </h1>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            {profileData.bio}
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {profileData.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            {profileData.socialLinks.map((link) => {
              const Icon = socialIcons[link.icon as keyof typeof socialIcons];
              return (
                <Button
                  key={link.platform}
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}