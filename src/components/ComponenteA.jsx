import { useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"

const ComponenteA = () => {
  const { cart } = useContext(CartContext)

  return (
    <div>
      <h2>ComponenteA</h2>
      <h3>Carrito:</h3>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ComponenteA