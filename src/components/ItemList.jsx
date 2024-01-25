import React from 'react'
import Item from './Item'
import { SimpleGrid } from '@chakra-ui/react'


const ItemList = ({ products }) => {



    
    return (
        <SimpleGrid columns={{sm:'auto', md:3}} bg='#eee8aa'>
            {
                products.map((p) => {
                    return (
                        <div key={p.id}>
                            <Item
                                key={p.id}
                                modelo={p.modelo}
                                categoria={p.categoria}
                                imagen={p.img}
                                id={p.id}
                            />


                        </div>
                    )
                })
            }
        </SimpleGrid>
    )
}

export default ItemList
