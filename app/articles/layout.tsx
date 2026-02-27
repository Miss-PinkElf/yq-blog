import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '文章列表',
  description: '浏览 SW Blog 的全部技术文章与分类。',
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
