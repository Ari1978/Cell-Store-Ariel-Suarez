import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import ContactForm from '../components/ContactForm';
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, eliminarProducto, vaciarCarrito } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity ?? 1),
    0
  );

  return (
    <div>
      <h1>Carrito</h1>
      <button onClick={vaciarCarrito} style={{marginBottom: 16, background: '#e74c3c', color: 'white', border: 'none', padding: '8px 16px', borderRadius: 4}}>
        Vaciar carrito
      </button>
      <ul style={{listStyle: 'none', padding: 0}}>
        {cart.map(item => (
          <li key={item.id} style={{display: 'flex', alignItems: 'center', marginBottom: 16, border: '1px solid #ddd', borderRadius: 8, padding: 8}}>
            <img src={item.image} alt={item.name} style={{width: 80, height: 80, objectFit: 'cover', marginRight: 16, borderRadius: 4}} />
            <div style={{flex: 1}}>
              <h3 style={{margin: 0}}>{item.name}</h3>
              <p style={{margin: '4px 0'}}>Cantidad: {item.quantity}</p>
              <p style={{margin: '4px 0'}}>Precio unitario: ${item.price}</p>
              <p style={{margin: '4px 0'}}>Total: ${item.price * item.quantity}</p>
              <Link to={`/product/${item.id}`}>Ver detalle</Link>
            </div>
            <button
              onClick={() => eliminarProducto(item.id)}
              style={{marginLeft: 16, background: '#c0392b', color: 'white', border: 'none', padding: '8px 12px', borderRadius: 4, cursor: 'pointer'}}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total del carrito: ${total}</h3>
      <hr />
      <ContactForm />
    </div>
  );
};

export default Cart;