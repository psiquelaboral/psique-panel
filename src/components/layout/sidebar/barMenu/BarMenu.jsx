import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AreaChartOutlined,
  HomeFilled,
  UserOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";

// CSS
import "./barmenu.css";

const BarMenu = () => {
  const navigation = useNavigate();

  const onClick = (e) => {
    const { key } = e;

    const router = {
      1: () => navigation("/"),
      2: () => navigation("/employe"),
      3: () => navigation("/psychometrics"),
    };

    router[key]();
  };

  return (
    <Menu
      theme="light"
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: "1",
          icon: <HomeFilled />,
          label: "Inicio",
        },
        {
          key: "2",
          icon: <UserOutlined />,
          label: "Empleados",
        },
        {
          key: "3",
          icon: <AreaChartOutlined />,
          label: "Psicométricos",
        },
      ]}
    />
  );
};

export default BarMenu;
