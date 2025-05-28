import products from "../data/products";
import Item from "../components/Item";
import './stylo.css';

const Xiaomi = () => {
  
  const productosXiaomi = products.filter(
    product => product.marca?.toLowerCase() === "xiaomi"
  );

  return (
    <div>
      <h1>Productos Xiaomi</h1>
      {productosXiaomi.length > 0 ? (
        <div className="item-list">
          {productosXiaomi.map(product => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos Xiaomi para mostrar.</p>
      )}
    </div>
  );
};

export default Xiaomi;
