import React from 'react'
import { CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Card, Button, Image, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ modelo, id, imagen }) => {


    return (        
            <div>
                <Card maxW='sm' borderWidth="3px" borderColor='black' bgColor='#F2B56B' m="1rem" p='2'boxShadow='dark-lg' rounded='10'>
                    <Image src={imagen} alt={modelo} borderRadius='20px' boxShadow='xl' rounded='10' />
                    <CardBody>
                        <Stack mt='6' spacing='3'>
                            <Heading size='xl' textAlign='center'>{modelo}</Heading>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter justifyContent='center'>
                        <ButtonGroup spacing='2'>
                            <Link to={`/item/${id}`}>
                                <Button bg="gray" borderWidth='2px' borderRadius='20' borderColor='black' bgGradient='linear(to-t, gray.500, white)' >
                                    Ver detalles
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </div>
    )
}

export default Item
