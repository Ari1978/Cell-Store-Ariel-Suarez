import React from "react";
import products from "../data/products";
import Item from "../components/Item";
import './stylo.css';

const Iphone = () => {
  // Filtrar productos cuya marca sea Apple
  const productosApple = products.filter(
    product => product.marca?.toLowerCase() === "apple"
  );

  return (
    <div>
      <h1>Productos iPhone</h1>
      {productosApple.length > 0 ? (
        <div className="item-list">
          {productosApple.map(product => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos iPhone para mostrar.</p>
      )}
    </div>
  );
};

export default Iphone;
