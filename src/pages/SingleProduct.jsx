import { useEffect, useState, useContext } from 'react'
import { Box, Flex, Image, Stack, Text, Button, useToast } from '@chakra-ui/react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../context/CartContext/CartContext'
import { AuthContext } from '../context/AuthContext/AuthContext'

const getSingleData = (params = {}) => {
    return axios.get(`https://lazy-blue-panda-gear.cyclic.app/products`, {
        params: {
            id: params.id
        }
    });
}

const SingleProduct = () => {
    const [data, setData] = useState({});
    const params = useParams();

    const { dispatch } = useContext(CartContext);
    const toast = useToast()

    const { state } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        getSingleData({ id: params.id })
            .then(res => setData(res.data[0]))
            .catch(err => console.log(err));
    }, [params.id])

    const handleAddItem = () => {
        if (!state.isAuth) {
            navigate('/signinpage');
        }
        else {
            dispatch({ type: 'ADD_TO_CART', payload: data })
            dispatch({ type: 'TOTAL_PRICE', payload: data.price })

            toast({
                title: 'Item has been added to the cart!',
                description: "",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return (
        <Box w={{ lg: '75%', md: '100%', sm: '100%' }} margin='auto'>

            <Flex h={{ lg: '80vh', md: '70vh' }} w={{ lg: '100%', md: '100%', sm: '100%' }} margin='auto' justifyContent={{ lg: 'space-between', md: 'space-evenly' }} alignItems='center'>
                <Box w={{ lg: '50%', md: '42%', sm: '40%' }}>
                    <Image src={data.image} alt='someimage' />
                </Box>

                <Stack justifyContent='space-between' h={{ lg: '90%', md: '66%', sm: '66%' }} w={{ lg: '50%', md: '50%', sm: '50%' }}>
                    <Stack>
                        <Text fontSize='2rem'>{data.title}</Text>
                        <Text fontSize='1.5rem'>₹{data.price}</Text>
                        <Text>VAT exception. VAT not included. Item no. P00652690</Text>
                        <Text>
                            material: 100% lamb leather
                            trim: 90% cotton, 8% polyamide, 2% elastane
                            filling: 90% down, 10% feathers
                            lining: 100% polyamide, fully lined
                            care instructions: specialist clean
                        </Text>
                    </Stack>

                    <Stack>
                        <Button onClick={handleAddItem} borderRadius='0' colorScheme='black' bgColor='black' color='white'>ADD TO SHOPPING BAG</Button>
                        <Link to='/'>
                            <Button borderRadius='0' border='1px solid gray' variant='outline' colorScheme='white' w='100%'>GO BACK TO HOMEPAGE</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>

        </Box>
    )
}

export default SingleProduct