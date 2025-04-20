
import React from 'react';
import { Card } from 'primereact/card'; 
import ItemCount from './ItemCount';
import { Button } from 'primereact/button'; 
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <Card title={product.name} className='product-card'>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <p><strong>Categoría:</strong> {product.category}</p> 
      <p><strong>Stock disponible:</strong> {product.stock} unidades</p>

     
      <Link to={`/product/${product.id}`}>
        <Button label="Detalles" rounded />
      </Link>

    </Card>
  );
};

export default Item;

