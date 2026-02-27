"use client";

import { Col, Row, Tag, Typography } from "antd";
import { PostCard } from "@/components/PostCard";
import { blogPosts } from "@/data/mockData";
import styles from "./page.module.scss";

const categories = [...new Set(blogPosts.map((post) => post.category))];

export default function ArticlesPage() {
  return (
    <div className={styles.articlesPage}>
      <section className="hero">
        <Typography.Title level={1} className="sectionTitle title">
          文章列表
        </Typography.Title>
        <Typography.Paragraph className="desc">
          这里放了所有静态文章数据。你可以直接在 <code>data/mockData.ts</code> 增删改，页面会自动同步展示。
        </Typography.Paragraph>
        <div className="meta">
          <Tag>共 {blogPosts.length} 篇</Tag>
          <Tag>覆盖 {categories.length} 个主题</Tag>
        </div>
      </section>

      {categories.map((category) => {
        const list = blogPosts.filter((post) => post.category === category);

        return (
          <section key={category} className="group">
            <div className="groupHead">
              <Typography.Title level={3} className="sectionTitle groupTitle">
                {category}
              </Typography.Title>
              <Tag className="countTag">{list.length} 篇</Tag>
            </div>

            <Row gutter={[18, 18]}>
              {list.map((post) => (
                <Col key={post.slug} xs={24} md={12} lg={8}>
                  <div id={post.slug}>
                    <PostCard post={post} />
                  </div>
                </Col>
              ))}
            </Row>
          </section>
        );
      })}
    </div>
  );
}
