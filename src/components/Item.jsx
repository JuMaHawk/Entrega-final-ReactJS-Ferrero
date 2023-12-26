import React from 'react'
import { CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Card, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ titulo, id }) => {

    return (

        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{titulo}</Heading>
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
