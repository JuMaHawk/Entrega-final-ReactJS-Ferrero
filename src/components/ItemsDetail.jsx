import React from 'react'
import { CardBody, Stack, Heading, Text, Divider, CardFooter, Card,Container,Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemsDetail = ({ item }) => {



return (
    <Container maxW='xl' mt='8'>
        <div key={item.id}>
          <Card maxW='sm' mx='auto' p='2' borderWidth='3px' borderRadius='lg' boxShadow='lg' maxH='auto'>
            <Image src={item.img} alt={item.modelo} borderRadius='lg' />
            <CardBody>
              <Stack spacing='6'>
                <Heading size='2xl' color='green' textAlign='center'>
                  {item.modelo}
                </Heading>
                <Text fontSize='2xl' color='blue' textAlign='center' fontFamily='customFont'>
                  Categoría: {item.categoria}
                </Text>
                <Text fontSize='2xl' color='blue' textAlign='center' fontFamily='customFont'>
                  Descripción: {item.descripcion}
                </Text>
                <Text fontSize='2xl' color='red' textAlign='center' fontFamily='customFont'>
                  Precio: ${item.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter mt='4' textAlign='center'>
              <ItemCount
                id={item.id}
                modelo={item.modelo}
                precio={item.precio}
                stock={item.stock}
                item={item}
                imagen={item.img}
              />
            </CardFooter>
          </Card>
        </div>
      
    </Container>
  );
};

export default ItemsDetail
