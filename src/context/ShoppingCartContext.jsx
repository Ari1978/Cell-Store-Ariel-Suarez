import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Carrito actualizado:", cart);
  }, [cart]);

  const comision = "React en CoderHouse";

  // Agregar producto
  const agregarAlCarrito = (product, quantity = 1) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // Eliminar producto por id
  const eliminarProducto = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, comision, agregarAlCarrito, eliminarProducto, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;