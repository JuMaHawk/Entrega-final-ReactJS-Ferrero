import { useContext } from "react"
import { CartContext } from "../context/MarketCartContext"
import { Button, Divider } from "@chakra-ui/react"
import { Link } from "react-router-dom"



const Cart = () => {

  const { carrito, precioTotal, limpiarCarrito } = useContext(CartContext)

  return (
    <div>
      {
        carrito.map((p) => (
          <div key={p.id}>
            <Divider />
            <h2>{p.modelo}{p.categoria}</h2>
            <h3>{p.categoria}</h3>
            <h4>Precio x unidad: ${p.precio}</h4>
            <h4>Precio total: ${p.precio * p.cantidad}</h4>
            <h5>Cantidad: {p.cantidad}</h5>
            <Divider />
          </div>
        ))
      }
      {
        carrito.length > 0 ?
          <>
            <h2>Precio Total: ${precioTotal()}</h2>
            <Button onClick={limpiarCarrito}>Limpiar</Button>
            <Link to='/checkout'>
              <Button>Finalizar compra</Button>
            </Link>
          </> :
          <h2>El carrito esta vacio</h2>
      }
    </div>
  )
}

export default Cart
