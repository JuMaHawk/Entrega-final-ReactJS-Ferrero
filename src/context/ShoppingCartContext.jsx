import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {

const comision = "React JS en Coder con Omar Manias"



return(

    <CartContext.Provider value = {{comision}}>
        {children}
    </CartContext.Provider>
)
}
export default ShoppingCartProvider