'use client';

import { Card, Row, Col, Typography, Button, Tag, Space } from 'antd';
import { ArrowRightOutlined, FieldTimeOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { mockBlogPosts, mockCategories } from '../data/mockData';
import styles from './HomePage.module.css';

const { Title, Paragraph, Text } = Typography;

const featuredPosts = mockBlogPosts.slice(0, 4);

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Title level={1} className={styles.heroTitle}>
            Welcome to SW Blog
          </Title>
          <Paragraph className={styles.heroSubtitle}>
            Exploring modern web development, one article at a time.
            Discover insights on React, Next.js, TypeScript, and more.
          </Paragraph>
          <Space size="middle">
            <Link href="/articles">
              <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
                Browse Articles
              </Button>
            </Link>
            <Link href="/about">
              <Button size="large">About Me</Button>
            </Link>
          </Space>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle}>
            Explore Topics
          </Title>
          <div className={styles.categories}>
            {mockCategories.map((category) => (
              <Link key={category.id} href={`/articles?category=${category.slug}`}>
                <Tag className={styles.categoryTag}>
                  {category.name} <span className={styles.count}>({category.count})</span>
                </Tag>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle}>
            Featured Posts
          </Title>
          <Row gutter={[24, 24]}>
            {featuredPosts.map((post, index) => (
              <Col key={post.id} xs={24} sm={12} lg={index === 0 ? 24 : 12}>
                <Link href={`/articles/${post.id}`} className={styles.postLink}>
                  <Card
                    hoverable
                    className={index === 0 ? styles.featuredCard : styles.postCard}
                    bordered={false}
                  >
                    <div className={styles.postMeta}>
                      <Tag color="blue">{post.category}</Tag>
                      <span className={styles.readTime}>
                        <FieldTimeOutlined /> {post.readTime} 分钟
                      </span>
                    </div>
                    <Title level={index === 0 ? 3 : 4} className={styles.postTitle}>
                      {post.title}
                    </Title>
                    <Paragraph className={styles.postExcerpt}>
                      {post.excerpt}
                    </Paragraph>
                    <div className={styles.postFooter}>
                      <Space size="small">
                        <UserOutlined />
                        <Text type="secondary">{post.date}</Text>
                      </Space>
                      <Text type="secondary">{post.date}</Text>
                    </div>
                    <div className={styles.postTags}>
                      {post.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <Title level={2} className={styles.ctaTitle}>
              Stay Updated
            </Title>
            <Paragraph className={styles.ctaText}>
              Get the latest articles delivered straight to your inbox.
              No spam, just quality content.
            </Paragraph>
            <Button type="primary" size="large">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
