import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Item from "../components/Item";
import './stylo.css';

const Motorola = () => {
  const [productosMotorola, setProductosMotorola] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts("motorola")
      .then((productosFiltrados) => {
        setProductosMotorola(productosFiltrados);
      })
      .catch((error) => {
        console.error("Error al cargar productos Motorola:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Productos Motorola</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : productosMotorola.length > 0 ? (
        <div className="item-list">
          {productosMotorola.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos Motorola para mostrar.</p>
      )}
    </div>
  );
};

export default Motorola;
