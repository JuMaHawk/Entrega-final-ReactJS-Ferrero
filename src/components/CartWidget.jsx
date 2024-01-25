import { useContext } from "react"
import { CartContext } from "../context/MarketCartContext"
import { Circle } from "@chakra-ui/react"

const CartWidget = () => {

  const { bikesEnCarrito } = useContext(CartContext)
  return (
    <div>
      <Circle size='30px' bg='white' color='black'>
        <span> {bikesEnCarrito()} </span>
      </Circle>
    </div>
  )
}

export default CartWidget