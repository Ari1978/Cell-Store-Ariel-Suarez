import { Menu } from "antd";
import { AndroidFilled, AppleFilled, UsbFilled } from "@ant-design/icons";
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";
import "./stylo.css";

const NavBar = () => {
  const items = [
    {
      key: "and",
      label: "Android",
      icon: <AndroidFilled />,
      children: [
        { key: "and-1", label: <Link to="/marca/motorola">Motorola</Link> },
        { key: "and-2", label: <Link to="/marca/redmi">Redmi</Link> },
        { key: "and-3", label: <Link to="/marca/samsung">Samsung</Link> },
        { key: "and-4", label: <Link to="/marca/xiaomi">Xiaomi</Link> },  // corregí aquí el texto y la url
      ],
    },
    {
      key: "ipho",
      label: "Apple",
      icon: <AppleFilled />,
      children: [
        { key: "ipho-1", label: <Link to="/marca/iphone16">iPhon 16</Link> },
       { key: "ipho-2", label: <Link to="/marca/iphone15">iPhone 15</Link> },
        { key: "ipho-3", label: <Link to="/marca/iphone14">iPhone 14</Link> },
        { key: "ipho-4", label: <Link to="/marca/iphone13">iPhone 13</Link> },
      ],
    },
    {
      key: "acces",
      label: "Accesorios",
      icon: <UsbFilled />,
      children: [
        { key: "acces-1", label: <Link to="/marca/fundas">Fundas</Link> },
        { key: "acces-2", label: <Link to="/marca/auriculares">Auriculares</Link> },
      ],
    },
  ];

  return (
    <div className="navbar">
      <Link className="navbar-titulo" to={"/"}>
        <span>Cell Store</span>
      </Link>
      <Menu mode="horizontal" className="menu" items={items} />
      <CardWidget className="car" />
    </div>
  );
};

export default NavBar;
