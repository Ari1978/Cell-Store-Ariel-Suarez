import { useContext } from 'react';
import { Card } from 'primereact/card'; 
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button'; 
import { CartContext } from '../context/ShoppingCartContext';
import ItemCount from './ItemCount';

const Item = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const agregarAlCarrito = (cantidad) => {
    
    const existe = cart.find(item => item.id === product.id);
    if (existe) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + cantidad }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: cantidad }]);
    }
  };


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
      <ItemCount alAgregar={agregarAlCarrito} />
    </Card>
  );
};

export default Item;