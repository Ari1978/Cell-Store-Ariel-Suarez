
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import ContactForm from '../components/ContactForm';

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity} unidades - Precio unitario: ${item.price} - Total: ${item.price * item.quantity}
          </li>
        ))}
      </ul>

      <hr />
      <ContactForm />
    </div>
  );
};

export default Cart;
