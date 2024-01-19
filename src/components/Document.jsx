import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const Document = () => {

    const [product, setProducts] = useState([])


    useEffect(() => {
        const db = getFirestore()

        const {id} = useParams()
        const oneItem = doc(db, "bicicletas", `${id}`)

        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const doc = snapshot.data()
                setProducts(doc)
            }
        })
    }, [])


    return (
        <div>
            Producto:{product.nombre}
            Precio: {product.precio}
        </div>
    )
}

export default Document
