import React from "react";
import { Menu } from "antd";
import { AndroidFilled, AppleFilled, UsbFilled } from "@ant-design/icons";
import CardWidget from "./CardWidget";
import "./stylo.css";

const NavBar = () => {
  const items = [
    {
      key: "and",
      label: "Android",
      icon: <AndroidFilled />,
      children: [
        { key: "and-1", label: "Motorola" },
        { key: "and-2", label: "Redmi" },
        { key: "and-3", label: "Samsung" },
        { key: "and-4", label: "Xiomi" },
      ],
    },
    {
      key: "ipho",
      label: "iPhone",
      icon: <AppleFilled />,
      children: [
        { key: "ipho-1", label: "iPhone 16" },
        { key: "ipho-2", label: "iPhone 15" },
        { key: "ipho-3", label: "iPhone 14" },
        { key: "ipho-4", label: "iPhone 13" },
      ],
    },
    {
      key: "acces",
      label: "Accesorios",
      icon: <UsbFilled />,
      children: [
        { key: "acces-1", label: "Fundas" },
        { key: "acces-2", label: "Cargadores" },
      ],
    },
  ];

  return (
    <div className="navbar">
      <span className="navbar-titulo">Cell Store</span>
      <Menu mode="horizontal" className="menu" items={items} />
      <CardWidget className= "car"/>
    </div>
  );
};

export default NavBar;
