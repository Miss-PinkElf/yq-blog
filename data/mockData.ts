// ==================== Interfaces ====================

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  coverImage?: string;
  readTime: number;
}

export interface Author {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  socialLinks: {
    github?: string;
    twitter?: string;
    email?: string;
    linkedin?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  description: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

// ==================== Mock Data ====================

export const mockAuthor: Author = {
  name: "张三",
  title: "全栈开发工程师",
  bio: "5年+前端开发经验，热爱开源，专注于React、Vue生态研究。喜欢分享技术心得，致力于编写高质量代码。",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  socialLinks: {
    github: "https://github.com/username",
    twitter: "https://twitter.com/username",
    email: "hello@example.com",
    linkedin: "https://linkedin.com/in/username"
  }
};

// 兼容旧的 about page 导出
export const siteAuthor = {
  name: mockAuthor.name,
  title: mockAuthor.title,
  bio: mockAuthor.bio,
  avatar: mockAuthor.avatar,
  email: mockAuthor.socialLinks.email || '',
  github: mockAuthor.socialLinks.github,
  twitter: mockAuthor.socialLinks.twitter,
  linkedin: mockAuthor.socialLinks.linkedin,
};

export const skills: Skill[] = [
  { name: 'React', level: 'expert', category: 'Frontend' },
  { name: 'Vue', level: 'advanced', category: 'Frontend' },
  { name: 'TypeScript', level: 'advanced', category: 'Frontend' },
  { name: 'Next.js', level: 'advanced', category: 'Frontend' },
  { name: 'JavaScript', level: 'expert', category: 'Frontend' },
  { name: 'CSS', level: 'advanced', category: 'Frontend' },
  { name: 'Node.js', level: 'intermediate', category: 'Backend' },
  { name: '性能优化', level: 'intermediate', category: 'Frontend' },
  { name: 'Vite', level: 'intermediate', category: 'Tools' },
  { name: 'Webpack', level: 'intermediate', category: 'Tools' },
  { name: '测试', level: 'intermediate', category: 'Tools' },
  { name: '设计模式', level: 'intermediate', category: 'Architecture' },
];

export const experiences: Experience[] = [
  {
    year: '2023',
    title: '高级前端工程师',
    company: '某知名互联网公司',
    description: '负责公司核心产品的前端架构设计和开发，使用React和Next.js构建高性能Web应用。'
  },
  {
    year: '2021',
    title: '前端开发工程师',
    company: '科技创新公司',
    description: '参与多个项目的前端开发工作，使用Vue和TypeScript构建企业级应用。'
  },
  {
    year: '2019',
    title: '初级前端工程师',
    company: '软件工作室',
    description: '开始职业生涯，学习前端开发基础知识和最佳实践。'
  }
];

export const mockCategories: Category[] = [
  {
    id: "1",
    name: "前端开发",
    slug: "frontend",
    count: 5,
    description: "前端技术、框架、最佳实践分享"
  },
  {
    id: "2",
    name: "后端开发",
    slug: "backend",
    count: 2,
    description: "后端架构、API设计、服务器技术"
  },
  {
    id: "3",
    name: "工具分享",
    slug: "tools",
    count: 2,
    description: "开发工具、效率提升技巧"
  },
  {
    id: "4",
    name: "架构设计",
    slug: "architecture",
    count: 1,
    description: "系统架构、设计模式、技术选型"
  }
];

export const mockTags: Tag[] = [
  { id: "1", name: "React", slug: "react", count: 4 },
  { id: "2", name: "Vue", slug: "vue", count: 2 },
  { id: "3", name: "TypeScript", slug: "typescript", count: 3 },
  { id: "4", name: "Next.js", slug: "nextjs", count: 2 },
  { id: "5", name: "Node.js", slug: "nodejs", count: 2 },
  { id: "6", name: "CSS", slug: "css", count: 2 },
  { id: "7", name: "JavaScript", slug: "javascript", count: 3 },
  { id: "8", name: "Vite", slug: "vite", count: 1 },
  { id: "9", name: "Webpack", slug: "webpack", count: 1 },
  { id: "10", name: "性能优化", slug: "performance", count: 2 },
  { id: "11", name: "设计模式", slug: "design-patterns", count: 1 },
  { id: "12", name: "测试", slug: "testing", count: 1 }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "React 18 并发模式深度解析",
    excerpt: "深入探讨 React 18 引入的并发模式特性，包括 Suspense、Transitions 和 Automatic Batching 等核心概念。",
    content: `# React 18 并发模式深度解析

React 18 带来了许多令人兴奋的新特性，其中最引人注目的就是并发模式（Concurrent Mode）。

## 什么是并发模式？

并发模式是 React 的一组新功能，可以帮助应用保持响应式，适应用户的设备能力和网络速度。

## 核心特性

### 1. Automatic Batching
\`\`\`jsx
// React 18 之前，只会批量更新 state
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 两次更新，两次渲染
}

// React 18 自动批处理
// 即使在 timeout、promise 中也会自动批处理
\`\`\`

### 2. Transitions
\`\`\`jsx
import { startTransition } from 'react';

startTransition(() => {
  setSearchQuery(input);
});
\`\`\`

### 3. Suspense
Suspense 让你能够声明式地指定加载状态...

## 总结

并发模式为 React 应用带来了更好的用户体验，值得在每个项目中尝试使用。`,
    date: "2024-01-15",
    category: "前端开发",
    tags: ["React", "JavaScript"],
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    readTime: 8
  },
  {
    id: "2",
    title: "TypeScript 高级类型实战指南",
    excerpt: "掌握 TypeScript 高级类型：泛型、条件类型、映射类型等，让你写出类型安全的代码。",
    content: `# TypeScript 高级类型实战指南

TypeScript 的类型系统非常强大，掌握高级类型可以让你的代码更加健壮。

## 泛型

泛型是 TypeScript 最强大的特性之一：

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## 条件类型

条件类型允许根据类型关系选择类型：

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

## 映射类型

映射类型可以基于旧类型创建新类型：

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

## 实战技巧

1. 使用 utility types
2. 理解 infer 关键字
3. 掌握模板字面量类型`,
    date: "2024-01-10",
    category: "前端开发",
    tags: ["TypeScript", "JavaScript"],
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    readTime: 10
  },
  {
    id: "3",
    title: "Next.js 14 App Router 完全指南",
    excerpt: "全面介绍 Next.js 14 的 App Router，包括服务端组件、路由、数据获取等核心概念。",
    content: `# Next.js 14 App Router 完全指南

Next.js 14 带来了许多改进，App Router 是其中最重要的变化。

## 服务端组件

App Router 默认使用服务端组件（RSC）：

\`\`\`tsx
// app/page.tsx
export default function Page() {
  return <h1>Hello World</h1>;
}
\`\`\`

## 路由约定

- \`app/page.tsx\` → \`/\`
- \`app/blog/page.tsx\` → \`/blog\`
- \`app/blog/[slug]/page.tsx\` → \`/blog/post-1\`

## 数据获取

\`\`\`tsx
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{/* ... */}</main>;
}
\`\`\`

## 总结

App Router 代表了 React 的未来，值得投入时间学习。`,
    date: "2024-01-05",
    category: "前端开发",
    tags: ["Next.js", "React", "TypeScript"],
    coverImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800",
    readTime: 12
  },
  {
    id: "4",
    title: "Vue 3 Composition API 最佳实践",
    excerpt: "探索 Vue 3 Composition API 的使用技巧和最佳实践，让你的代码更加简洁优雅。",
    content: `# Vue 3 Composition API 最佳实践

Composition API 是 Vue 3 最具革命性的变化。

## setup 函数

\`\`\`javascript
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const doubled = computed(() => count.value * 2);
    return { count, doubled };
  }
};
\`\`\`

## 组合式函数

提取可复用的逻辑：

\`\`\`javascript
// useMouse.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);
  // ... 事件监听逻辑
  return { x, y };
}
\`\`\`

## 最佳实践

1. 使用 \`<script setup>\` 语法糖
2. 合理提取 composables
3. 避免过度拆分`,
    date: "2023-12-28",
    category: "前端开发",
    tags: ["Vue", "JavaScript"],
    coverImage: "https://images.unsplash.com/photo-1627398242213-b8b2aeb3a342?w=800",
    readTime: 7
  },
  {
    id: "5",
    title: "前端性能优化实战技巧",
    excerpt: "从代码分割、懒加载到缓存策略，全面解析前端性能优化的各种技巧和工具。",
    content: `# 前端性能优化实战技巧

性能优化是前端开发中永恒的主题。

## 代码分割

使用动态 import 进行代码分割：

\`\`\`javascript
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
\`\`\`

## 图片优化

1. 使用现代格式（WebP、AVIF）
2. 实现懒加载
3. 响应式图片

\`\`\`html
<img
  src="small.jpg"
  srcset="medium.jpg 1000w, large.jpg 2000w"
  loading="lazy"
/>
\`\`\`

## 缓存策略

- Service Worker 缓存静态资源
- HTTP 缓存头配置
- LocalStorage 合理使用

## 性能监控

使用 Web Vitals 监控核心指标：

- LCP（最大内容绘制）
- FID（首次输入延迟）
- CLS（累积布局偏移）`,
    date: "2023-12-20",
    category: "前端开发",
    tags: ["性能优化", "JavaScript", "React"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    readTime: 9
  },
  {
    id: "6",
    title: "Node.js 微服务架构设计与实践",
    excerpt: "探讨使用 Node.js 构建微服务架构的实践经验，包括服务拆分、通信机制和部署方案。",
    content: `# Node.js 微服务架构设计与实践

微服务架构能够帮助大型应用更好地扩展和维护。

## 服务拆分原则

1. 按业务领域拆分
2. 单一职责原则
3. 数据库独立

## 服务通信

### REST API
\`\`\`javascript
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});
\`\`\`

### 消息队列
使用 RabbitMQ 或 Kafka 实现异步通信。

## 服务发现

使用 Consul 或 etcd 实现服务注册与发现。

## 部署方案

1. Docker 容器化
2. Kubernetes 编排
3. CI/CD 自动化部署`,
    date: "2023-12-15",
    category: "后端开发",
    tags: ["Node.js", "架构设计"],
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    readTime: 11
  },
  {
    id: "7",
    title: "Vite vs Webpack：构建工具深度对比",
    excerpt: "全面对比 Vite 和 Webpack 两大构建工具，帮助你做出正确的技术选型。",
    content: `# Vite vs Webpack：构建工具深度对比

构建工具的选择对项目开发体验影响巨大。

## Vite

### 优势
- 开发服务器极快启动
- HMR 毫秒级响应
- 开箱即用的 TypeScript 支持
- 更简洁的配置

### 劣势
- 生态相对较新
- 生产构建优化不如 Webpack 成熟

## Webpack

### 优势
- 生态成熟
- 高度可配置
- 生产构建优化完善
- 大型项目验证充分

### 劣势
- 配置复杂
- 构建速度较慢

## 选择建议

| 场景 | 推荐工具 |
|------|---------|
| 新项目 | Vite |
| Vue 项目 | Vite |
| 复杂的 Legacy 项目 | Webpack |
| 需要深度定制 | Webpack |`,
    date: "2023-12-10",
    category: "工具分享",
    tags: ["Vite", "Webpack", "工具分享"],
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    readTime: 6
  },
  {
    id: "8",
    title: "现代 CSS 布局技巧与最佳实践",
    excerpt: "掌握 Flexbox、Grid、Container Queries 等现代 CSS 布局技术，告别浮动布局。",
    content: `# 现代 CSS 布局技巧与最佳实践

CSS 布局已经 evolved，让我们拥抱新的技术。

## Flexbox

一维布局的最佳选择：

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

## CSS Grid

二维布局的强大工具：

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## Container Queries

响应式设计的未来：

\`\`\`css
@container (min-width: 700px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
\`\`\`

## 最佳实践

1. 优先使用 Grid 做整体布局
2. 使用 Flexbox 做组件对齐
3. 避免使用 float 布局
4. 合理使用 CSS 变量`,
    date: "2023-12-05",
    category: "前端开发",
    tags: ["CSS", "前端开发"],
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
    readTime: 8
  },
  {
    id: "9",
    title: "前端自动化测试从入门到精通",
    excerpt: "全面介绍前端自动化测试：单元测试、集成测试、E2E 测试的最佳实践。",
    content: `# 前端自动化测试从入门到精通

测试是保证代码质量的重要手段。

## 单元测试

使用 Vitest 或 Jest：

\`\`\`typescript
describe('Calculator', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
\`\`\`

## 组件测试

使用 Testing Library：

\`\`\`typescript
import { render, screen } from '@testing-library/react';

test('renders button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
\`\`\`

## E2E 测试

使用 Playwright 或 Cypress：

\`\`\`typescript
test('user can login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});
\`\`\`

## 测试覆盖率

目标：代码覆盖率 > 80%，关键路径 100%`,
    date: "2023-11-28",
    category: "工具分享",
    tags: ["测试", "TypeScript", "React"],
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    readTime: 10
  },
  {
    id: "10",
    title: "设计模式在前端开发中的应用",
    excerpt: "解析常见设计模式在前端开发中的实际应用场景，写出更优雅的代码。",
    content: `# 设计模式在前端开发中的应用

设计模式是解决常见问题的成熟方案。

## 单例模式

\`\`\`typescript
class Store {
  private static instance: Store;
  private constructor() {}
  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }
}
\`\`\`

## 观察者模式

React 的 useState 本质就是观察者模式的应用。

## 工厂模式

\`\`\`typescript
class ButtonFactory {
  static create(type: 'primary' | 'secondary') {
    return type === 'primary' ? new PrimaryButton() : new SecondaryButton();
  }
}
\`\`\`

## 策略模式

表单验证是策略模式的典型应用：

\`\`\`typescript
const validators = {
  email: (value: string) => /^[^@]+@[^@]+$/.test(value),
  phone: (value: string) => /^1[3-9]\\d{9}$/.test(value),
};
\`\`\`

## 总结

合理使用设计模式可以提高代码的可维护性和可扩展性，但不要过度设计。`,
    date: "2023-11-20",
    category: "架构设计",
    tags: ["设计模式", "TypeScript", "JavaScript"],
    coverImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800",
    readTime: 9
  }
];

// ==================== Helper Functions ====================

export const getPostById = (id: string): BlogPost | undefined => {
  return mockBlogPosts.find(post => post.id === id);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return mockBlogPosts.filter(post => post.category === category);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return mockBlogPosts.filter(post => post.tags.includes(tag));
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return [...mockBlogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowerQuery = query.toLowerCase();
  return mockBlogPosts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

// ==================== Site Config ====================

export const siteConfig = {
  title: 'SW Blog',
  description: '一个专注于 Web 开发的中文技术博客',
  author: 'SW Blog Team',
  url: 'https://sw-blog.com',
};
