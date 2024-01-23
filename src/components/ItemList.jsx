import React from 'react'
import Item from './Item'


const ItemList = ({ products }) => {



    
    return (
        <div>
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
        </div>
    )
}

export default ItemList
