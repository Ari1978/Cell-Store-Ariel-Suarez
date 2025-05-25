import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import productsData from '../data/products';

const Componente1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const showProducts = new Promise((resolve, reject) => {
      if (productsData.length > 0) {
        setTimeout(() => {
          resolve(productsData);
        }, 3000);
      } else {
        reject('No se pueden mostrar los productos');
      }
    });

    showProducts
      .then(result => setProducts(result))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default Componente1;
