import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { getProductById } from '../services/productService';
import ItemCount from '../components/ItemCount';

const ItemDetail = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then(producto => setProduct(producto))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAgregar = (cantidad) => {
    if (product) {
      agregarAlCarrito(product, cantidad);
    }
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className='card-detail'>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <ItemCount alAgregar={handleAgregar} />
    </div>
  );
};

export default ItemDetail;
