import React from 'react'
import { CardBody, Stack, Heading, Text, Divider, CardFooter, Card, Container, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import '../CSS/style.css'

const ItemsDetail = ({ item }) => {



  return (
      <div key={item.id} className='fondoBody' >
        <Card maxW='sm' borderWidth="3px" borderColor='black' bgColor='#F2B56B' m="1rem" p='2'boxShadow='dark-lg' rounded='10'>
          <Image src={item.img} alt={item.modelo} borderRadius='20px' boxShadow='xl' rounded='10' />
          <CardBody>
            <Stack spacing='2'>
              <Heading size='2xl' color='black' textAlign='center' fontFamily='arial'>
                {item.modelo}
              </Heading>
              <Text fontSize='3xl' color='black' textAlign='center' fontFamily='arial'>
                {item.categoria}
              </Text>
              <Text fontSize='2xl' color='white' textAlign='center' fontFamily='arial'>
                {item.descripcion}
              </Text>
              <Text fontSize='3xl' color='green' textAlign='center' fontFamily='customFont' borderWidth='3px' borderRadius='10' borderColor='gray'>
                ${item.precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider borderWidth='2px' />
          <CardFooter mt='4' textAlign='center'>
            <ItemCount
              item={item}
            />
          </CardFooter>
        </Card>
      </div>
  );
};

export default ItemsDetail
