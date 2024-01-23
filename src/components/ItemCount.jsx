import {useState} from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = ({modelo, precio, stock, item, img}) => {

    
    const [contador, setContador] = useState(0)

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

    



    return (
        <div>
            <Button colorScheme='red' size='xs' onClick = {restar}>
                -
            </Button>
            <p>{contador}</p>
            <Button colorScheme='whatsapp' size='xs' onClick = {sumar}>
                +
            </Button>
            
            <hr/>
            <Button colorScheme='purple' size='xs'>
                Agregar al carrito
            </Button>
        </div>
    )
}

export default ItemCount
