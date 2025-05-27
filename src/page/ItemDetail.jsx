import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import products from '../data/products';
import ItemCount from '../components/ItemCount';

const ItemDetail = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);

  const product = products.find(p => p.id === Number(id));
  if (!product) return <p>Producto no encontrado</p>;

  // Esta función solo llama a la del contexto
  const handleAgregar = (cantidad) => {
    console.log("Producto recibido por alAgregar:", product);
    console.log("Cantidad recibida por alAgregar:", cantidad);
    agregarAlCarrito(product, cantidad);
  };

  return (
    <>
      <div className='card-detail'>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <ItemCount alAgregar={handleAgregar} />
    </div>
    </>

  );
};

export default ItemDetail;