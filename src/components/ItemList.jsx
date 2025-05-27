import React from "react";
import Item from '../components/Item';
import './stylo.css';



export const ItemList = ({products}) => {
 
  
  if (!products || products.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div className="item-list">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default React.memo(ItemList);
