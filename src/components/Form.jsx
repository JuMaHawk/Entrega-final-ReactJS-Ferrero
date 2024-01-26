import { useContext, useState } from 'react'
import { CartContext } from '../context/MarketCartContext'
import { Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Form = () => {

    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, limpiarCarrito } = useContext(CartContext)

    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
        const pedido = {
            usuario: data,
            productos: carrito,
            total: precioTotal()
        }
        const db = getFirestore()
        const pedidosRef = collection(db, "pedidos")
        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            limpiarCarrito();
        })


    }

    if(pedidoId){
        return(
            <div>
                <h1>MUCHAS GRACIAS POR SU COMPRA!</h1>
                <p>El N° de su pedido es el siguiente: {pedidoId}</p>
            </div>
    )
        }
    



    return (
        <div>
            <h1>Finalizar compra</h1>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder='Ingresa tu nombre'{...register("nombre")} />
                <input type="email" placeholder='Ingresa tu email'{...register("email")} />

                <Button type="submit">Comprar</Button>
            </form>
        </div>
    )
}

export default Form
