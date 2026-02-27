'use client';

import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

export { MainLayout };
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout className="main-layout">
      <Header />
      <Content className="main-content">
        {children}
      </Content>
      <Footer />
    </Layout>
  );
}
