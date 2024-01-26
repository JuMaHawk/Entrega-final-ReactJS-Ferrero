import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'
import '../CSS/style.css'

const Loader = () => {
    return (
        <Center>
            <div>
                <Center>
                    <h1 className='tituloLoader'>Estamos preparando todo para una mejor experiencia</h1>
                </Center>
                <Center>
                    <h2 className='subTituloLoader'>"La Vida es como la bicicleta, hay que mantenerse en movimiento para no perder el equilibrio"</h2>
                </Center>
                <Center>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl' />
                </Center>
            </div>
        </Center>
    )
}

export default Loader
