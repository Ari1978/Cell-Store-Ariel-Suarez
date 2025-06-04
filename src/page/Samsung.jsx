import { useEffect, useState } from "react";
import { getProducts } from "../services/productService"; 
import Item from "../components/Item";
import './stylo.css';

const Samsung = () => {
  const [productosSamsung, setProductosSamsung] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts("samsung")
      .then((productosFiltrados) => {
        setProductosSamsung(productosFiltrados);
      })
      .catch((error) => {
        console.error("Error al cargar productos Samsung:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Productos Samsung</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : productosSamsung.length > 0 ? (
        <div className="item-list">
          {productosSamsung.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos Samsung para mostrar.</p>
      )}
    </div>
  );
};

export default Samsung;
