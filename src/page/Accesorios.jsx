import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Item from "../components/Item";
import './stylo.css';

const Accesorios = () => {
  const [productosAccesorios, setProductosAccesorios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts("accesorios")
      .then((productosFiltrados) => {
        setProductosAccesorios(productosFiltrados);
      })
      .catch((error) => {
        console.error("Error al cargar productos Accesorios:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Accesorios</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : productosAccesorios.length > 0 ? (
        <div className="item-list">
          {productosAccesorios.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos de accesorios para mostrar.</p>
      )}
    </div>
  );
};

export default Accesorios;
