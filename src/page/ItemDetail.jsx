import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'primereact/card';
import ItemCount from '../components/ItemCount';
import productsData from '../data/products';

const ItemDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado...</p>;
  }

  return (
    <Card className='card-detail' title={product.name}>
      <img src={product.image} alt={product.name} style={{ width: '200px' }} />
      <p className='detalle'>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>
      <ItemCount />
    </Card>
  );
};

export default ItemDetail;

