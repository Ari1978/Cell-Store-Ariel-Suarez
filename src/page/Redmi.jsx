import productsData from '../data/productsData';
import ProductList from '../components/ProductList';

const Readmi = () => {
  const readmis = productsData.filter(product => product.category === 'Readmi');

  return (
    <div>
      <h2>Readmi</h2>
      <ProductList products={readmis} />
    </div>
  );
};

export default Readmi;