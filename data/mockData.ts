export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  cover: {
    start: string;
    end: string;
  };
  content: string[];
}

export interface AboutJourneyItem {
  year: string;
  title: string;
  description: string;
}

export const siteInfo = {
  title: "明亮慢写",
  slogan: "把复杂问题写清楚，把日常生活写温柔",
  description:
    "这是一个可直接运行的静态博客模板。使用 Next.js + React + TypeScript + Ant Design 搭建，页面结构简洁，适合直接改造成你的个人博客。",
  author: "林野",
  location: "杭州",
  email: "hello@mingliangxiezuo.dev"
};

export const navItems = [
  { label: "首页", href: "/" },
  { label: "文章", href: "/articles" },
  { label: "关于我", href: "/about" }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "frontend-workflow-with-clarity",
    title: "前端项目从 0 到 1：先建立清晰的工作流",
    excerpt:
      "代码质量往往不是靠最后一次重构救回来，而是在第一天就把约定写好：目录、命名、组件边界与发布节奏。",
    category: "工程实践",
    tags: ["Next.js", "架构", "团队协作"],
    publishedAt: "2026-02-24",
    readingTime: "7 分钟",
    cover: {
      start: "#e9f4ff",
      end: "#b8d7f1"
    },
    content: [
      "很多人把注意力集中在技术选型，但真正决定项目效率的是工作流。工作流清晰后，新成员加入、需求迭代和线上排障都会轻松许多。",
      "建议在启动阶段就约定目录职责，例如页面层只负责编排，组件层只负责展示，数据层负责统一类型与 mock。这样做可以避免后期模块互相依赖。",
      "最后，不要等到项目复杂了才补规范。最好的时机是第一周，第二好的时机是现在。"
    ]
  },
  {
    slug: "designing-calm-interface",
    title: "如何做一个看起来舒服的界面：留白、节奏与层次",
    excerpt:
      "简约不等于空。真正舒服的页面，要有明确的信息层级、稳定的视觉节奏和克制的颜色关系。",
    category: "设计思考",
    tags: ["UI", "视觉层级", "可读性"],
    publishedAt: "2026-02-20",
    readingTime: "6 分钟",
    cover: {
      start: "#f9f1df",
      end: "#ecd7b0"
    },
    content: [
      "如果用户一眼看不到重点，通常不是内容太少，而是层级不清。可以通过字号差异、间距与对齐来建立阅读路径。",
      "颜色上建议先定义 1 个主色、1 个强调色和若干中性色。中性色决定气质，主色只做导航与关键按钮。",
      "最后记得在移动端重新检视排版。桌面上舒展的布局，到了手机上可能会显得拥挤。"
    ]
  },
  {
    slug: "writing-for-developers",
    title: "面向开发者的写作：像写函数一样写文章",
    excerpt:
      "一篇技术文章应该有输入、过程和输出。读者读完后能复现、能判断、能继续。",
    category: "写作方法",
    tags: ["技术写作", "知识管理", "表达"],
    publishedAt: "2026-02-18",
    readingTime: "8 分钟",
    cover: {
      start: "#ebf8ef",
      end: "#b9dfbf"
    },
    content: [
      "把文章当函数来写，第一步是定义输入：读者已有的背景和当前的问题。输入越清楚，输出越稳定。",
      "过程部分尽量给出可执行步骤，不要只给概念。比如不仅说“要优化性能”，还要写明“先定位瓶颈，再拆分渲染路径”。",
      "结尾给一个最小行动建议，让读者今天就能做出变化。"
    ]
  },
  {
    slug: "maintainable-component-design",
    title: "可维护组件的三个信号：边界清晰、命名稳定、样式可控",
    excerpt:
      "当组件越来越多时，维护成本会悄悄上涨。提前设计边界，是对未来开发时间最好的投资。",
    category: "工程实践",
    tags: ["React", "组件设计", "可维护性"],
    publishedAt: "2026-02-12",
    readingTime: "5 分钟",
    cover: {
      start: "#f2f0ff",
      end: "#cbc2f2"
    },
    content: [
      "组件是否健康，可以看三个信号：职责是否单一、命名是否稳定、样式是否可预测。",
      "当一个组件开始接收太多互斥参数时，通常说明它承担了多个角色，应该拆分。",
      "在样式策略上，建议统一外层容器和内层 class 的约定，这样迁移和复用成本会更低。"
    ]
  },
  {
    slug: "mock-data-first",
    title: "先写 Mock Data 再写页面：提高前端开发效率的小技巧",
    excerpt:
      "没有后端接口时，先把数据结构写实在，页面会更快进入可交付状态。",
    category: "开发技巧",
    tags: ["Mock", "TypeScript", "原型验证"],
    publishedAt: "2026-02-09",
    readingTime: "4 分钟",
    cover: {
      start: "#fff0e7",
      end: "#f6c7ac"
    },
    content: [
      "Mock Data 的价值不只是“占位”。它是前后端对齐字段、检验页面结构、提前发现边界情况的工具。",
      "建议把 mock 和类型定义放在同一个目录，字段变化时一起维护。",
      "当接口上线后，只要保持数据形状一致，页面层几乎不用改。"
    ]
  }
];

export const aboutSkills = [
  "React / Next.js",
  "TypeScript",
  "Ant Design",
  "信息架构",
  "技术写作",
  "设计系统"
];

export const aboutJourney: AboutJourneyItem[] = [
  {
    year: "2026",
    title: "搭建个人写作站点模板",
    description: "把博客结构抽象成可复用前端模板，关注开箱即用和视觉一致性。"
  },
  {
    year: "2024",
    title: "专注前端工程化实践",
    description: "在多个项目中推动规范化目录、组件抽象和统一设计 token。"
  },
  {
    year: "2022",
    title: "开始持续输出技术文章",
    description: "围绕前端可维护性、设计思考与团队协作持续写作。"
  }
];
