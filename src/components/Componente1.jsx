import ItemList from './ItemList';

const Componente1 = ({ products, loading }) => {
  return (
    <div>
      <ItemList products={products} loading={loading} />
    </div>
  );
};

export default Componente1;
