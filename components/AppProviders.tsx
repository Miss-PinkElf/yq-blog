"use client";

import { ConfigProvider, type ThemeConfig } from "antd";

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#18787a",
    colorInfo: "#18787a",
    borderRadius: 12,
    borderRadiusLG: 18,
    colorTextBase: "#1f2a35",
    fontFamily:
      "var(--font-sans), 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
  },
  components: {
    Card: {
      borderRadiusLG: 18
    },
    Button: {
      borderRadius: 999
    },
    Tag: {
      borderRadiusSM: 999
    }
  }
};

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
}
