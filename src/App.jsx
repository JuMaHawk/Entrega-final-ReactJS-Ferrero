import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import CartWidget from "./components/CartWidget.jsx"


const App = () => {

  return (

    <BrowserRouter>

      <Navbar />


      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<CartWidget />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
