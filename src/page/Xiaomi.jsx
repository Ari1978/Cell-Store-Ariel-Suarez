import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Item from "../components/Item";
import './stylo.css';

const Xiaomi = () => {
  const [productosXiaomi, setProductosXiaomi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts("xiaomi")
      .then((productosFiltrados) => {
        setProductosXiaomi(productosFiltrados);
      })
      .catch((error) => {
        console.error("Error al cargar productos Xiaomi:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Productos Xiaomi</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : productosXiaomi.length > 0 ? (
        <div className="item-list">
          {productosXiaomi.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos Xiaomi para mostrar.</p>
      )}
    </div>
  );
};

export default Xiaomi;
