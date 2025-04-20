import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons"

const CardWidget = () => {
    
  return (
    <div className="cart">
      <ShoppingCartOutlined className="cart-icon" />
      <span className="cart-numero">0</span>
    </div>
  )
}

export default CardWidget;
