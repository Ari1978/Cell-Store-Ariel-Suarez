import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import productsData from '../data/products';
import ItemCount from '../components/ItemCount';

const ItemDetail = () => {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);

  const product = productsData.find(p => p.id === parseInt(id));
  if (!product) return <p>Producto no encontrado</p>;

  const agregarAlCarrito = (cantidad) => {
    const existe = cart.find(item => item.id === product.id);
    if (existe) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + cantidad }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: cantidad }]);
    }
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <ItemCount alAgregar={agregarAlCarrito} />
    </div>
  );
};

export default ItemDetail;
