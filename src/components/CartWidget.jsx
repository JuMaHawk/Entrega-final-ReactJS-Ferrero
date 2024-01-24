import { useContext } from "react"
import { CartContext } from "../context/MarketCartContext"
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const {bikesEnCarrito} = useContext(CartContext)
    return (
      <div>
        <span> {bikesEnCarrito()} </span>
      </div>
    )
  }
  
  export default CartWidget