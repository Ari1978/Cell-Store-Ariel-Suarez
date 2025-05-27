import productsData from '../data/productsData';
import ProductList from '../components/ProductList';

const Samsung = () => {
  const samsungs = productsData.filter(product => product.name.toLowerCase().includes('samsung'));

  return (
    <div>
      <h2>Samsung</h2>
      <ProductList products={samsungs} />
    </div>
  );
};

export default Samsung;