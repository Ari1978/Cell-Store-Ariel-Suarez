import productsData from '../data/productsData';
import ProductList from '../components/ProductList';

const Iphone = () => {
  const iphones = productsData.filter(product => product.category === 'Iphone');

  return (
    <div>
      <h2>Iphone</h2>
      <ProductList products={iphones} />
    </div>
  );
};

export default Iphone;