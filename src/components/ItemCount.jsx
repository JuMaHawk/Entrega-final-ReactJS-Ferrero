import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/MarketCartContext'


const ItemCount = ({ modelo, precio, stock, item, img }) => {

    const { carrito, setCarrito } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)


    const sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const agregar = () => {
        const itemAgregado = { ...item, cantidad }

        const newCarrito = [...carrito]
        const existeEnCarrito = newCarrito.find((producto) => producto.id == itemAgregado.id)

        if (existeEnCarrito) {
            existeEnCarrito.cantidad += cantidad
        } else {
            newCarrito.push(itemAgregado)
        }
        setCarrito(newCarrito)
    }

    const bikesEnCarrito = () => {
        return ( 
            carrito.reduce((acc, prod)=> acc + prod.cantidad, 0)
        )
    }
    
    return (
        <div>
            <Button colorScheme='red' size='xs' onClick={restar}>
                -
            </Button>

            <p>{cantidad}</p>

            <Button colorScheme='whatsapp' size='xs' onClick={sumar}>
                +
            </Button>

            <hr />

            <Button colorScheme='purple' size='xs' onClick={agregar}>
                Agregar al carrito
            </Button>
        </div>
    )
}

export default ItemCount
