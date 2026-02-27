"use client";

import { HeartFilled } from "@ant-design/icons";
import { Typography } from "antd";
import { siteInfo } from "@/data/mockData";
import styles from "./SiteFooter.module.scss";

export function SiteFooter() {
  return (
    <footer className={styles.footerWrap}>
      <div className="footerInner">
        <Typography.Text className="line">
          {siteInfo.title} · {siteInfo.author} · {siteInfo.location}
        </Typography.Text>
        <Typography.Text className="line">
          用 <HeartFilled className="heart" /> 持续记录，邮箱 {siteInfo.email}
        </Typography.Text>
      </div>
    </footer>
  );
}
