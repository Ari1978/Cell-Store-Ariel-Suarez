import products from "../data/products"; // Asegúrate que esta ruta es correcta
import Item from "../components/Item";
import './stylo.css';

const Samsung = () => {
  
  const productosSamsung = products.filter(
    product => product.marca && product.marca.toLowerCase() === "samsung"
  );

  console.log("Samsung filtrados:", productosSamsung);

  return (
    <div>
      <h1>Productos Samsung</h1>
      {productosSamsung.length > 0 ? (
        <div className="item-list">
          {productosSamsung.map(product => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos Samsung para mostrar.</p>
      )}
    </div>
  );
};

export default Samsung;

