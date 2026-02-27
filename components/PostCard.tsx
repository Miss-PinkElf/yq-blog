"use client";

import Link from "next/link";
import { ArrowRightOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Card, Space, Tag, Typography } from "antd";
import type { BlogPost } from "@/data/mockData";
import styles from "./PostCard.module.scss";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const detailHref = `/articles#${post.slug}`;

  return (
    <article className={styles.cardWrap}>
      <Card hoverable bordered={false} className="postCard">
        <div
          className="cover"
          style={{
            backgroundImage: `linear-gradient(135deg, ${post.cover.start} 0%, ${post.cover.end} 100%)`
          }}
        >
          <span className="coverLabel">{post.category}</span>
        </div>

        <div className="content">
          <Space className="meta" size={12}>
            <Typography.Text type="secondary">{post.publishedAt}</Typography.Text>
            <Typography.Text type="secondary">
              <ClockCircleOutlined /> {post.readingTime}
            </Typography.Text>
          </Space>

          <Typography.Title level={4} className="title">
            <Link href={detailHref}>{post.title}</Link>
          </Typography.Title>

          <Typography.Paragraph className="excerpt">{post.excerpt}</Typography.Paragraph>

          <Space wrap className="tags" size={[8, 8]}>
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Space>

          <Link href={detailHref} className="readMore">
            阅读全文 <ArrowRightOutlined />
          </Link>
        </div>
      </Card>
    </article>
  );
}
