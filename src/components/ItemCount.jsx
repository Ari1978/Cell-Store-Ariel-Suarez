import { useState } from 'react';
import './stylo.css';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const ItemCount = ({ alAgregar }) => {
  const [counter, setCounter] = useState(0);

  const AgregarAlCarrito = () => {
    if (alAgregar && counter > 0) {
      alAgregar(counter);
      setCounter(0); // reseteamos el contador
    }
  };

  return (
    <div>
      <p className="contador">Cantidad: {counter}</p>
      <Button className="button-contador" onClick={() => setCounter(counter + 1)} label=" + " text raised />
      <Button className="button-contador" onClick={() => setCounter(counter > 0 ? counter - 1 : 0)} label=" - " text raised />
      <Button className="button" label="Agregar al carrito" text raised onClick={AgregarAlCarrito} disabled={counter === 0} />
      <Link to="/">
        <Button label="Volver" text raised />
      </Link>
    </div>
  );
};

export default ItemCount;
