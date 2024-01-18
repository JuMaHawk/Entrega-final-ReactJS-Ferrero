import React from 'react'
import { CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Card } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const itemDetail = ({producto}) => {
    console.log(producto)

    


    return (
        <div>
            {/* <Card maxW='sm'>
                <CardBody>
                    
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{producto.modelo}</Heading>
                        <Text>
                            {producto.descripcion}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${producto.categoria}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount />
                    </ButtonGroup>
                </CardFooter>
            </Card> */}
        </div>
    )
}

export default itemDetail
