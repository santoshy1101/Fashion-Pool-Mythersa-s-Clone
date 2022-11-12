import { Box, Center, Image, Text, Flex, Button, useToast } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import { useContext } from 'react';
import { CartContext } from "../context/CartContext/CartContext"

function ShoppingCart() {
    const { cartItems, totalPrice, dispatch } = useContext(CartContext);
    const toast = useToast()

    const handleCheckout = () => {
        dispatch({ type: 'CHECKOUT_CART' })
        dispatch({ type: 'TOTAL_PRICE', payload: -totalPrice })

        toast({
            title: 'Thank You For Shopping From Mytheresa!',
            description: "",
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    }

    const handleRemoveItem = (id, price) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
        dispatch({ type: 'TOTAL_PRICE', payload: -price })

        toast({
            title: 'Item has been removed from the cart!',
            description: "",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    return <Box w={{ lg: '75%', md: '100%', sm: '100%' }} h='100vh' margin='auto'>

        <Center>
            <Text as='b' marginBottom='2rem'>SHOPPING CART</Text>
        </Center>

        <Flex direction='column' justifyContent='center' alignItems='center'>
            {cartItems.length > 0 ?
                <Box width='100%'>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>image</Th>
                                    <Th>name</Th>
                                    <Th>price</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {cartItems &&
                                    cartItems.map(item => {
                                        return <Tr key={item.id}>
                                            <Td><Image src={item.image} w='5rem' /></Td>
                                            <Td>{item.title}</Td>
                                            <Td>{item.price}</Td>
                                            <Td><Button onClick={() => handleRemoveItem(item.id, item.price)}>Remove Item</Button></Td>
                                        </Tr>
                                    })
                                }
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>TOTAL PRICE</Th>
                                    <Th>₹{totalPrice}</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>

                    <Center>
                        <Button onClick={handleCheckout} mt='1rem' bgColor='green.500' colorScheme='green' borderRadius='0' color='white'>CHECKOUT</Button>
                    </Center>

                </Box>
                :
                <Text as='b' fontSize={'3xl'}>Cart is empty!</Text>
            }
        </Flex>

    </Box >
}

export default ShoppingCart;