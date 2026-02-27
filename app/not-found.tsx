import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "90px 16px", textAlign: "center" }}>
      <h1 style={{ margin: 0, fontSize: "2rem" }}>404</h1>
      <p style={{ margin: "12px 0 20px", color: "#627184" }}>
        没有找到这篇文章，链接可能已更新。
      </p>
      <Link href="/articles" style={{ color: "#12595a", fontWeight: 600 }}>
        返回文章列表
      </Link>
    </div>
  );
}
