import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Item from "../components/Item";
import './stylo.css';

const Redmi = () => {
  const [productosRedmi, setProductosRedmi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts("redmi")
      .then((productosFiltrados) => {
        setProductosRedmi(productosFiltrados);
      })
      .catch((error) => {
        console.error("Error al cargar productos Redmi:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Productos Redmi</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : productosRedmi.length > 0 ? (
        <div className="item-list">
          {productosRedmi.map((product) => (
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
