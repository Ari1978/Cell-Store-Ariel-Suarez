import { useEffect, useState } from "react";
import { getProducts } from "../services/productService"; 
import Item from "../components/Item";
import './stylo.css';

const Apple = () => {
  const [productosApple, setProductosApple] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts("apple")
      .then((productosFiltrados) => {
        setProductosApple(productosFiltrados);
      })
      .catch((error) => {
        console.error("Error al cargar productos Apple:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Productos Apple</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : productosApple.length > 0 ? (
        <div className="item-list">
          {productosApple.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos Apple para mostrar.</p>
      )}
    </div>
  );
};

export default Apple;
