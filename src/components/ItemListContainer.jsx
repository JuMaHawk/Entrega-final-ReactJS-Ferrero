import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"



const ItemListContainer = () => {


  const { id } = useParams()


  const productos = [
    { id: 1, titulo: "Producto A", descripcion: "Descripcion de producto A", categoria: "1", precio: 100 },
    { id: 2, titulo: "Producto B", descripcion: "Descripcion de producto B", categoria: "2", precio: 200 },
    { id: 3, titulo: "Producto C", descripcion: "Descripcion de producto C", categoria: "1", precio: 300 },
    { id: 4, titulo: "Producto D", descripcion: "Descripcion de producto D", categoria: "2", precio: 400 },
    { id: 5, titulo: "Producto E", descripcion: "Descripcion de producto E", categoria: "1", precio: 500 },
    { id: 6, titulo: "Producto F", descripcion: "Descripcion de producto F", categoria: "2", precio: 600 },
    { id: 7, titulo: "Producto G", descripcion: "Descripcion de producto G", categoria: "1", precio: 700 },
    { id: 8, titulo: "Producto H", descripcion: "Descripcion de producto H", categoria: "2", precio: 800 },
    { id: 9, titulo: "Producto I", descripcion: "Descripcion de producto I", categoria: "1", precio: 900 },
    { id: 10, titulo: "Producto J", descripcion: "Descripcion de producto J", categoria: "2", precio: 1000 }
  ]

  const productosFiltrados = productos.filter((producto) => producto.categoria == id)

  return (
    <div>
      {id ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />}
    </div>
  )
}

export default ItemListContainer