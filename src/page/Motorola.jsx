import productsData from '../data/productsData';
import ProductList from '../components/ProductList';

const Motorola = () => {
  const motorolas = productsData.filter(product => product.category === 'Motorola');

  return (
    <div>
      <h2>Motorola</h2>
      <ProductList products={motorolas} />
    </div>
  );
};

export default Motorola;