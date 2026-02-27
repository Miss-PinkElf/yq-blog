"use client";

import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Statistic, Tag, Typography } from "antd";
import { PostCard } from "@/components/PostCard";
import { blogPosts, siteInfo } from "@/data/mockData";
import styles from "./page.module.scss";

const latestPosts = blogPosts.slice(0, 3);
const topicTags = [...new Set(blogPosts.flatMap((post) => post.tags))].slice(0, 10);

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <section className="hero">
        <span className="eyebrow">静态博客模板</span>
        <Typography.Title level={1} className="title">
          {siteInfo.slogan}
        </Typography.Title>
        <Typography.Paragraph className="desc">{siteInfo.description}</Typography.Paragraph>

        <Space wrap className="actions" size={14}>
          <Button href="/articles" type="primary" size="large">
            去看文章
          </Button>
          <Link href="/about" className="aboutLink">
            认识作者 <ArrowRightOutlined />
          </Link>
        </Space>

        <div className="stats">
          <Statistic title="文章数量" value={blogPosts.length} suffix="篇" />
          <Statistic title="主题标签" value={topicTags.length} suffix="个" />
          <Statistic title="主要栏目" value={3} suffix="类" />
        </div>
      </section>

      <section className="latestSection">
        <div className="sectionHead">
          <Typography.Title level={2} className="sectionTitle">
            最新文章
          </Typography.Title>
          <Link href="/articles" className="moreLink">
            查看全部 <ArrowRightOutlined />
          </Link>
        </div>

        <Row gutter={[18, 18]}>
          {latestPosts.map((post) => (
            <Col key={post.slug} xs={24} md={12} lg={8}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
      </section>

      <section className="topicSection">
        <Typography.Title level={3} className="sectionTitle">
          正在关注的话题
        </Typography.Title>
        <Space wrap size={[10, 10]}>
          {topicTags.map((tag) => (
            <Tag key={tag} className="topicTag">
              #{tag}
            </Tag>
          ))}
        </Space>
      </section>
    </div>
  );
}
