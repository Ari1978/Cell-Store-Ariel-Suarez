import React from "react";
import products from "../data/products";
import Item from "../components/Item";
import './stylo.css';

const Redmi = () => {
  
  const productosRedmi = products.filter(
    product => product.marca?.toLowerCase() === "redmi"
  );

  return (
    <div>
      <h1>Productos Redmi</h1>
      {productosRedmi.length > 0 ? (
        <div className="item-list">
          {productosRedmi.map(product => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos Redmi para mostrar.</p>
      )}
    </div>
  );
};

export default Redmi;
