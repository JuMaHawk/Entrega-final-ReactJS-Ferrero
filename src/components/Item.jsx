import React from 'react'
import { CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Card, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ modelo, id, imagen }) => {


    return (

        <div>
            <Card maxW='sm'>
                <Image
                    src={imagen}
                    alt='Bicicleta Zenith '
                    borderRadius='lg'
                />

                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{modelo}</Heading>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to={`/item/${id}`}>
                            <Button>
                                Ver detalle
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item
