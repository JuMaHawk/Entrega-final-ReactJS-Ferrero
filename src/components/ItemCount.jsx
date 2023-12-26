import {useState} from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {

    const sumar = ()  => {
        if (contador < 10){
            setContador (contador + 1)
        }  
    }

    const restar = ()  => {
        if (contador > 0){
            setContador (contador - 1)
        }  
    }

    

    const [contador, setContador] = useState(0)


    return (
        <div>
            <Button colorScheme='purple' size='xs'>
                Agregar al carrito {contador}
            </Button>
            <Button colorScheme='red' size='xs' onClick = {restar}>
                -
            </Button>
            <Button colorScheme='whatsapp' size='xs' onClick = {sumar}>
                +
            </Button>
        </div>
    )
}

export default ItemCount
