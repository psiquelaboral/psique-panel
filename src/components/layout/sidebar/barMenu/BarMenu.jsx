import React from "react";
import { useSelector } from "react-redux";
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
  const userFromRedux = useSelector((state) => state.user.user);

  const onClick = (e) => {
    const { key } = e;

    const router = {
      1: () => navigation("/"),
      2: () => navigation("/employe"),
      3: () => navigation("/psychometrics"),
      4: () => navigation("/quiz"),
    };

    router[key]();
  };

  let menuItems = [
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
  ];

  let roles = userFromRedux?.roles?.map((role) => role.name);
  if (roles && roles.includes("ROLE_GOD")) {
    menuItems = [
      ...menuItems,
      { key: "4", icon: <SolutionOutlined />, label: "Quicess" },
    ];
  }

  return (
    <Menu
      theme="light"
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      items={menuItems}
    />
  );
};

export default BarMenu;
