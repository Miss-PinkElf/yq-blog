"use client";

import { EnvironmentOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Space, Tag, Timeline, Typography } from "antd";
import { aboutJourney, aboutSkills, siteInfo } from "@/data/mockData";
import styles from "./page.module.scss";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className="intro">
        <Card bordered={false} className="profileCard">
          <Space size={16} align="center" className="profileTop">
            <Avatar size={72} icon={<UserOutlined />} className="avatar" />
            <div>
              <Typography.Title level={2} className="sectionTitle name">
                {siteInfo.author}
              </Typography.Title>
              <Typography.Paragraph className="subline">{siteInfo.slogan}</Typography.Paragraph>
            </div>
          </Space>

          <Typography.Paragraph className="bio">
            我喜欢把技术问题写成可执行的方法，也喜欢把设计思考落到真实界面中。这个博客模板偏向简约、清晰、可维护，
            你可以直接替换文案与数据，快速得到自己的博客站点。
          </Typography.Paragraph>

          <Space wrap size={[10, 10]}>
            <Tag icon={<EnvironmentOutlined />}>{siteInfo.location}</Tag>
            <Tag icon={<MailOutlined />}>{siteInfo.email}</Tag>
          </Space>
        </Card>
      </section>

      <Row gutter={[18, 18]}>
        <Col xs={24} lg={10}>
          <Card bordered={false} className="skillCard">
            <Typography.Title level={3} className="sectionTitle cardTitle">
              技能标签
            </Typography.Title>
            <Space wrap size={[10, 10]}>
              {aboutSkills.map((skill) => (
                <Tag key={skill} className="skillTag">
                  {skill}
                </Tag>
              ))}
            </Space>
          </Card>
        </Col>

        <Col xs={24} lg={14}>
          <Card bordered={false} className="journeyCard">
            <Typography.Title level={3} className="sectionTitle cardTitle">
              我的轨迹
            </Typography.Title>
            <Timeline
              items={aboutJourney.map((item) => ({
                color: "#18787a",
                children: (
                  <div className="timelineItem">
                    <Typography.Text className="year">{item.year}</Typography.Text>
                    <Typography.Title level={5} className="timelineTitle">
                      {item.title}
                    </Typography.Title>
                    <Typography.Paragraph className="timelineDesc">
                      {item.description}
                    </Typography.Paragraph>
                  </div>
                )
              }))}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
