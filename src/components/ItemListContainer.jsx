import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import Loader from "./Loader.jsx"


const ItemListContainer = () => {

  const { id } = useParams()

  const [products, setProducts] = useState([])

  const [loanding, setLoanding] = useState(true)


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
      .finally(() => {
        setLoanding(false)
      })
  }, [])


  const productosFiltrados = products.filter((producto) => producto.categoria == id)


  return (
    <div>
      {loanding ? (<Loader />) :
        <div>
          {id ? <ItemList products={productosFiltrados} /> : <ItemList products={products} />}
        </div>
      }
    </div>
  )
}

export default ItemListContainer





