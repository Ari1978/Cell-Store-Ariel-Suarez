import './stylo.css';
import Componente1 from './Componente1';
import NavBar from './NavBar';


const ItemListContainer = ({ greeting }) => {

  
  
   
   return (
    <div className="container">
      <p className="parrafo">{greeting}</p>
      <NavBar />
      <Componente1 />
    </div>
  );
};

export default ItemListContainer;
