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
        { key: "and-4", label: <Link to="/marca/xiaomi">Xiaomi</Link> }, 
      ],
    },
    {
      key: "ipho",
      label: "IOS",
      icon: <AppleFilled />,
      children: [
        { key: "ipho-1", label: <Link to="/marca/Apple">Apple</Link> },
       
      ],
    },
    {
      key: "acces",
      label: "Accesorios",
      icon: <UsbFilled />,
      children: [
        { key: "acces-1", label: <Link to="/marca/accesorios">Fundas y Audio </Link> },
       
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
