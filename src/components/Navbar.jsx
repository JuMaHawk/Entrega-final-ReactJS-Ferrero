import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

const Navbar = () => {




    return (
        <div>
            <Flex bg="green.300" h="5rem" color="white">
                <Box p='4'>
                    <Link to={'/'}>
                        <h1>Hawkez Bicicleteria</h1>
                    </Link>
                </Box>
                <Spacer />
                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList bg="green.300">
                        <Link to = '/categoria/1'>
                            <MenuItem bg="black">Categoria 1</MenuItem>
                        </Link>
                        <Link to = '/categoria/2'>
                        <MenuItem bg="black">Categoria 2</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
                <Spacer />
                <Box p='4'>
                    <Link to="/carrito">
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}

export default Navbar