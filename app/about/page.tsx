'use client';

import { siteAuthor, skills, experiences } from '@/data/mockData';
import { Avatar, Typography, Card, Timeline, Tag, Space, Divider } from 'antd';
import { MailOutlined, GithubOutlined, TwitterOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styles from '@/styles/About.module.css';

const { Title, Paragraph, Text } = Typography;

const getLevelColor = (level: string) => {
  const colors = {
    expert: 'success',
    advanced: 'processing',
    intermediate: 'warning',
    beginner: 'default',
  };
  return colors[level as keyof typeof colors] || 'default';
};

const getLevelText = (level: string) => {
  const texts = {
    expert: '专家',
    advanced: '熟练',
    intermediate: '进阶',
    beginner: '入门',
  };
  return texts[level as keyof typeof texts] || level;
};

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <Avatar size={120} src={siteAuthor.avatar} className={styles.avatar} />
        <Title level={2} className={styles.name}>{siteAuthor.name}</Title>
        <Text className={styles.title}>{siteAuthor.title}</Text>
        <Paragraph className={styles.bio}>{siteAuthor.bio}</Paragraph>
        <Space size="middle" className={styles.socialLinks}>
          <a href={`mailto:${siteAuthor.email}`}>
            <MailOutlined className={styles.icon} />
          </a>
          {siteAuthor.github && (
            <a href={siteAuthor.github} target="_blank" rel="noopener noreferrer">
              <GithubOutlined className={styles.icon} />
            </a>
          )}
          {siteAuthor.twitter && (
            <a href={siteAuthor.twitter} target="_blank" rel="noopener noreferrer">
              <TwitterOutlined className={styles.icon} />
            </a>
          )}
        </Space>
      </div>

      <Divider />

      {/* Skills Section */}
      <div className={styles.section}>
        <Title level={3}>技能专长</Title>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <Tag key={index} color={getLevelColor(skill.level)} className={styles.skillTag}>
              {skill.name}
              <span className={styles.skillLevel}>
                {getLevelText(skill.level)}
              </span>
            </Tag>
          ))}
        </div>
      </div>

      <Divider />

      {/* Experience Section */}
      <div className={styles.section}>
        <Title level={3}>工作经历</Title>
        <Timeline className={styles.timeline}>
          {experiences.map((exp, index) => (
            <Timeline.Item key={index} label={<span className={styles.year}>{exp.year}</span>}>
              <div className={styles.timelineContent}>
                <Title level={5}>{exp.title}</Title>
                <Text type="secondary" className={styles.company}>
                  <EnvironmentOutlined /> {exp.company}
                </Text>
                <Paragraph className={styles.description}>
                  {exp.description}
                </Paragraph>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>

      <Divider />

      {/* Tech Stack */}
      <div className={styles.section}>
        <Title level={3}>技术栈</Title>
        <Card className={styles.techCard}>
          <Paragraph>
            本博客使用现代化的 Web 技术构建，专注于提供最佳的用户体验和开发体验。
          </Paragraph>
          <div className={styles.stackList}>
            <div className={styles.stackItem}>
              <Tag color="blue">Next.js 15</Tag>
              <Text>React 全栈框架，支持 SSR 和 SSG</Text>
            </div>
            <div className={styles.stackItem}>
              <Tag color="cyan">React 19</Tag>
              <Text>最新的 React 特性和 Server Components</Text>
            </div>
            <div className={styles.stackItem}>
              <Tag color="blue">TypeScript</Tag>
              <Text>类型安全的开发体验</Text>
            </div>
            <div className={styles.stackItem}>
              <Tag color="geekblue">Ant Design</Tag>
              <Text>企业级 UI 组件库</Text>
            </div>
            <div className={styles.stackItem}>
              <Tag color="green">CSS Modules</Tag>
              <Text>模块化的样式方案</Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
