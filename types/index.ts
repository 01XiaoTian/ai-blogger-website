// 产品数据类型
export interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
  category: 'tool' | 'tutorial' | 'application';
  tags: string[];
  createdAt: Date;
}

// AI 导航网站数据类型
export interface AISite {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
  category: string;
  tags: string[];
  rating: number;
  isRecommended: boolean;
}

// 内容数据类型
export interface Content {
  id: string;
  title: string;
  summary: string;
  type: 'article' | 'video' | 'tutorial';
  platform: string;
  link: string;
  tags: string[];
  publishedAt: Date;
}

// 个人信息类型
export interface Profile {
  name: string;
  nickname: string;
  avatar: string;
  bio: string;
  tags: string[];
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

// 导航分类类型
export interface NavCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}