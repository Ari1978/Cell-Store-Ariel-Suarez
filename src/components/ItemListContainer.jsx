import './stylo.css';
import Componente1 from './Componente1';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <p className="parrafo">{greeting}</p>
      <NavBar />
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <Componente1 products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;