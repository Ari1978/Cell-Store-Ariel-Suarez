import productsData from '../data/productsData';
import ProductList from '../components/ProductList';

const Xiaomi = () => {
  const xiaomis = productsData.filter(product => product.name.toLowerCase().includes('xiaomi'));

  return (
    <div>
      <h2>Xiaomi</h2>
      <ProductList products={xiaomis} />
    </div>
  );
};

export default Xiaomi;
