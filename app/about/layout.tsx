import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我',
  description: '了解 SW Blog 作者的背景、技能与经历。',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
