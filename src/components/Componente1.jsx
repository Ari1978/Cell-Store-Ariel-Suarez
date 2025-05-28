import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import productsData from '../data/products';

const Componente1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const showProducts = new Promise((resolve, reject) => {
      if (productsData.length > 0) {
        setTimeout(() => {
          resolve(productsData);
        }, 1000);
      } else {
        reject('No se pueden mostrar los productos');
      }
    });

    showProducts
      .then(result => setProducts(result))
      .catch(error => console.error(error))
      .finally(() => setLoading(false)); 
  }, []);

  return (
    <div>
      <ItemList products={products} loading={loading} />
    </div>
  );
};

export default Componente1;
