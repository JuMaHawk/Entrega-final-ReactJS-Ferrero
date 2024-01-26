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
                        <Link to='/categoria/COMP'>
                            <MenuItem bg="black">Categoria COMP</MenuItem>
                        </Link>
                        <Link to='/categoria/ELITE'>
                            <MenuItem bg="black">Categoria ELITE</MenuItem>
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