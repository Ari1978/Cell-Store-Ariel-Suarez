
import { Card } from 'primereact/card'; 
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button'; 
import './stylo.css';

const Item = ({ product }) => {
  
  

  return (
    
    <Card title={product.name} className='product-card'>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <p><strong>Categoría:</strong> {product.category}</p> 
      <p><strong>Stock disponible:</strong> {product.stock} unidades</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Link to={`/product/${product.id}`}>
          <Button label="Detalles" rounded />
        </Link>
      </div>
      
    </Card>
  );
};

export default Item;