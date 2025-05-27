import React from "react";
import Item from '../components/Item';
import './stylo.css';

const agruparPorMarca = (productos) => {
  return productos.reduce((grupos, producto) => {
    const marca = producto.marca || "Sin marca";
    if (!grupos[marca]) {
      grupos[marca] = [];
    }
    grupos[marca].push(producto);
    return grupos;
  }, {});
};

const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  const productosAgrupados = agruparPorMarca(products);

  return (
    <div>
      {Object.entries(productosAgrupados).map(([marca, productos]) => (
        <div key={marca} className="marca-group">
          <h2>{marca}</h2>
          <div className="item-list">
            {productos.map(product => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ItemList);
