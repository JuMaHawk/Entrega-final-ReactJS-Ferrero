import React from 'react'
import ItemsDetail from './ItemsDetail.jsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFirestore, getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams()


    useEffect(() => {
        const db = getFirestore();
        const docBicicletas = doc(db, "bicicletas", id);
        getDoc(docBicicletas)
            .then((snapshot) => {
                setItem(
                    { ...snapshot.data(), id: snapshot.id }
                )
            })
    }, [id])


    return (
        <div className='fondoBody'>
            {item && <ItemsDetail item={item} />}
        </div>
    )
};

export default ItemDetailContainer
