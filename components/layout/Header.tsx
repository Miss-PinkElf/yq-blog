'use client';

import { useState } from 'react';
import { Menu, Layout, Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from './Header.module.css';

const { Header: AntHeader } = Layout;

const menuItems = [
  { key: 'home', label: <Link href="/">Home</Link> },
  { key: 'articles', label: <Link href="/articles">Articles</Link> },
  { key: 'about', label: <Link href="/about">About</Link> },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AntHeader className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>✦</span>
          <span className={styles.logoText}>SW Blog</span>
        </Link>

        <nav className={styles.nav}>
          <Menu
            mode="horizontal"
            items={menuItems}
            className={styles.menu}
            disabledOverflow
          />
        </nav>

        <Button
          className={styles.mobileMenuBtn}
          type="text"
          icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.key === 'home' ? '/' : `/${item.key}`}
              className={styles.mobileMenuItem}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </AntHeader>
  );
}
