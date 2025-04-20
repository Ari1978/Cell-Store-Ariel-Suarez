import { useState } from 'react'
import './stylo.css'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    return (
        
        <div>
            
            <p className="contador">Cantidad: {counter}</p>
            <Button className='button-contador' onClick={()=> setCounter(counter + 1)} label=" + " text raised />
            <Button className='button-contador' onClick={()=> setCounter(counter - 1)} label=" - " text raised />
            <Button className="button" label="Agregar al carrito" text raised />
            <Link to={"/"}>
                <Button label="Volver" text raised />
            </Link>
        </div>

    )
}

export default ItemCount;
