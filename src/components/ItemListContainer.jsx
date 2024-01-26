import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"


const ItemListContainer = () => {

  const { id } = useParams()

  const [products, setProducts] = useState([])



  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, "bicicletas")
    getDocs(itemsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  }, [])


  const productosFiltrados = products.filter((producto) => producto.categoria == id)


  return (
    <div>
      {id ? <ItemList products={productosFiltrados} /> : <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer






