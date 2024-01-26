import { useState } from 'react'
import { Button, Center } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/MarketCartContext'


const ItemCount = ({ item }) => {

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


    return (
        <div className='botones'>
            <div className='botones-sumarrestar'>
                <Button colorScheme='red' size='xs' onClick={restar}>
                    -
                </Button>

                <p>{cantidad}</p>

                <Button colorScheme='whatsapp' size='xs' onClick={sumar}>
                    +
                </Button>
            </div>
            <div className='botones-aregar'>
                <Button className='boton-agregar' colorScheme='purple' size='xs' onClick={agregar}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemCount
