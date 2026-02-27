import type { Metadata } from 'next';
import { ConfigProvider } from 'antd';
import MainLayout from '@/components/layout/MainLayout';
import './globals.css';
import 'antd/dist/reset.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'SW Blog - 一个专注于 Web 开发的中文技术博客',
    template: '%s | SW Blog',
  },
  description: '分享前端开发、后端技术和DevOps相关的技术文章',
  keywords: ['博客', '技术', '编程', 'React', 'Next.js', 'TypeScript'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#1890ff',
              borderRadius: 8,
            },
          }}
        >
          <MainLayout>{children}</MainLayout>
        </ConfigProvider>
      </body>
    </html>
  );
}
