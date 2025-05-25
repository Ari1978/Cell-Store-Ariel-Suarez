
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import "./stylo.css";

const CardWidget = () => {
  const { cart } = useContext(CartContext);

  const totalCantidad = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart">
      <ShoppingCartOutlined className="cart-icon" />
      <span className="cart-numero">{totalCantidad}</span>
    </Link>
  );
};

export default CardWidget;

