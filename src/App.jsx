import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import MarketCartContext from "./context/MarketCartContext.jsx"
import Cart from "./components/Cart.jsx"
import Form from "./components/Form.jsx"

const App = () => {

  return (

    <BrowserRouter>
    <MarketCartContext>
        <Navbar />


        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/categoria/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/form' element={<Form />} />
          
        </Routes>
        </MarketCartContext>
    </BrowserRouter>
  )
}

export default App
