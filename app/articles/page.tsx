'use client';

import { useState } from 'react';
import { mockBlogPosts, mockCategories } from '@/data/mockData';
import { Card, Tag, Typography, Empty, Segmented, Space } from 'antd';
import { FieldTimeOutlined, FolderOutlined, TagOutlined } from '@ant-design/icons';
import styles from '@/styles/Articles.module.css';

const { Title, Paragraph, Text } = Typography;

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...mockCategories.map(cat => cat.name)];

  const filteredPosts = selectedCategory === 'All'
    ? mockBlogPosts
    : mockBlogPosts.filter(post => post.category === selectedCategory);

  const getGradientById = (id: string) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    ];
    return gradients[parseInt(id) % gradients.length];
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.pageHeader}>
        <Title level={2}>文章列表</Title>
        <Paragraph className={styles.subtitle}>
          分享前端开发、后端技术和DevOps相关的技术文章
        </Paragraph>
      </div>

      <div className={styles.filterSection}>
        <Segmented
          options={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
          size="large"
        />
      </div>

      {filteredPosts.length === 0 ? (
        <Empty
          description="暂无相关文章"
          className={styles.empty}
        />
      ) : (
        <div className={styles.articlesGrid}>
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              hoverable
              className={styles.articleCard}
              cover={
                <div
                  className={styles.cardCover}
                  style={{ background: getGradientById(post.id) }}
                />
              }
            >
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <Tag icon={<FolderOutlined />} color="blue">
                    {post.category}
                  </Tag>
                  <Space size="small" className={styles.metaInfo}>
                    <Text type="secondary">
                      <FieldTimeOutlined /> {post.date}
                    </Text>
                    <Text type="secondary">
                      {post.readTime} 分钟阅读
                    </Text>
                  </Space>
                </div>

                <Title level={4} className={styles.cardTitle}>
                  {post.title}
                </Title>

                <Paragraph
                  ellipsis={{ rows: 2 }}
                  className={styles.cardExcerpt}
                >
                  {post.excerpt}
                </Paragraph>

                <div className={styles.cardTags}>
                  <TagOutlined className={styles.tagIcon} />
                  <Space size={[4, 8]} wrap>
                    {post.tags.map((tag) => (
                      <Tag key={tag} className={styles.tag}>
                        {tag}
                      </Tag>
                    ))}
                  </Space>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
