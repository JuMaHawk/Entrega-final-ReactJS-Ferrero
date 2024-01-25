import { useContext } from "react"
import { CartContext } from "../context/MarketCartContext"
import { Button, Center, Table, TableContainer, Tbody, Th, Thead, Tr, Td, Tfoot, Container } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import '../CSS/style.CSS'

const Cart = () => {

  const { carrito, precioTotal, limpiarCarrito } = useContext(CartContext)

  return (
    <div>
      <h1>RESUMEN DE SU COMPRA</h1>
      <Container maxW='auto' mt= "5%">
        <Table size='xl'>
          <Thead>
            <Tr className="encabezado">
              <Th>Modelo</Th>
              <Th >Categoria</Th>
              <Th >Unidades</Th>
              <Th >Precio x Und.</Th>
              <Th >Sub Total</Th>
            </Tr>
          </Thead>
        </Table>
        {
          carrito.map((p) => (
            <div key={p.id}>
              <TableContainer>
                <Table size='sm'>
                  <Tbody>
                    <Tr className="filasTabla">
                      <Td>{p.modelo}</Td>
                      <Td>{p.categoria}</Td>
                      <Td >{p.cantidad}</Td>
                      <Td >$ {p.precio}</Td>
                      <Td >$ {p.precio * p.cantidad}</Td>
                    </Tr>
                  </Tbody>
                </Table>

              </TableContainer>
            </div>
          ))
        }
        <Table>
          <Tfoot>
            <Tr bg="gray">
              <Th>Precio Total $</Th>
              <Th isNumeric>${precioTotal()}</Th>
            </Tr>
          </Tfoot>
        </Table>


        {
          carrito.length > 0 ?
            <>
              <Button onClick={limpiarCarrito}>Limpiar</Button>
              <Link to='/checkout'>
                <Button>Finalizar compra</Button>
              </Link>
            </> :
            <Center>
              <h2>El carrito esta vacio</h2>
            </Center>
        }
      </Container>
    </div>
  )
}

export default Cart
