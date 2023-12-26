import React from 'react'
import {CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Card, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const Item = ({titulo, descripcion, precio}) => {

    return (

        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src=''
                        alt='Img'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{titulo}</Heading>
                        <Text>
                            {descripcion}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount/>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item
