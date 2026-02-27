"use client";

import Link from "next/link";
import { CompassOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { navItems, siteInfo } from "@/data/mockData";
import styles from "./SiteHeader.module.scss";

export function SiteHeader() {
  return (
    <header className={styles.headerWrap}>
      <div className="headerInner">
        <Link href="/" className="brand">
          <span className="dot" />
          <span className="name">{siteInfo.title}</span>
        </Link>

        <nav className="nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="navItem">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          href="/about"
          type="default"
          icon={<CompassOutlined />}
          className="aboutButton"
        >
          联系我
        </Button>
      </div>
    </header>
  );
}
