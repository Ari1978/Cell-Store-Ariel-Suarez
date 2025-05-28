import productsData from '../data/productsData';
import ProductList from '../components/ProductList';

const Accesorios = () => {
 
  const accesorios = productsData.filter(product => product.category === 'Accesorios');

  return (
    <div>
      <h2>Accesorios</h2>
      <ProductList products={accesorios} />
    </div>
  );
};

export default Accesorios;