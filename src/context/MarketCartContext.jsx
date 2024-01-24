import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null)

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const MarketCartProvider = ({children}) => {

    const [carrito, setCarrito] = useState (carritoInicial)

    const bikesEnCarrito = () => {
        return ( 
            carrito.reduce((acu, prod)=> acu + prod.cantidad, 0)
        )
    }

const precioTotal = ()=> {
    return (
        carrito.reduce ((acu, prod) => acu + prod.precio * prod.cantidad, 0 )
    )
}

useEffect(()=> {
    localStorage.setItem("carrito", JSON.stringify(carrito))
},[carrito])


const limpiarCarrito = ()=> {
    setCarrito([])
}

    return(
        <CartContext.Provider value= {{carrito, setCarrito, bikesEnCarrito, precioTotal, limpiarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default MarketCartProvider