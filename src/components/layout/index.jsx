import React, { useState } from "react";

import { Layout, theme } from "antd";

import CustomHeader from "./header/CustomHeader";
import BarMenu from "./sidebar/barMenu/BarMenu";

// CSS
import "./index.css";

const { Header, Sider, Content } = Layout;

const CustomLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider className="layout-container">
      {/* SIDE BAR */}
      <Sider
        style={{ backgroundColor: "#fff" }}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo-container">{collapsed ? "P" : "Psique"}</div>
        <BarMenu />
      </Sider>
      <Layout className="site-layout">
        {/* HEADER */}
        <Header
          style={{
            padding: 0,
          }}
        >
          <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>

        {/* BODY */}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
