import { Layout, Typography, Space } from 'antd';
import { GithubOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons';
import styles from './Footer.module.css';

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const socialLinks = [
  { icon: <GithubOutlined />, href: 'https://github.com', label: 'GitHub' },
  { icon: <TwitterOutlined />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <MailOutlined />, href: 'mailto:hello@example.com', label: 'Email' },
];

export default function Footer() {
  return (
    <AntFooter className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.logoIcon}>✦</span>
            <span className={styles.logoText}>SW Blog</span>
          </div>

          <Text className={styles.copyright}>
            © {new Date().getFullYear()} SW Blog. All rights reserved.
          </Text>

          <Space size="large" className={styles.social}>
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </Link>
            ))}
          </Space>
        </div>

        <div className={styles.bottom}>
          <Text type="secondary">Built with Next.js, React & Ant Design</Text>
        </div>
      </div>
    </AntFooter>
  );
}
