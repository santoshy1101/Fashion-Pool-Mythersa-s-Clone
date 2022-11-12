import { useEffect, useState } from 'react'
import { Box, Flex, Text, Button, Stack, Center, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'
import MenCarousel1 from '../components/MenCarousel1'
import MenCarousel2 from '../components/MenCarousel2'
import axios from 'axios'

const getData = () => {
    return axios.get(`https://lazy-blue-panda-gear.cyclic.app/products`);
}

const Mens = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Box w={{ lg: '75%', md: '100%', sm: '100%' }} margin='auto'>

            <Flex h={{ lg: '71vh', md: '46vh', sm: '46vh' }} pb={10} justifyContent='flex-end' direction='column' alignItems='center' w='100%' backgroundPosition='center' backgroundSize='cover' backgroundImage={'https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/14_ActivityBoxes/Fixes/MonclerCover/BIG_DESKTOP_1X_20220928100157.jpg'}>
                <Flex width='100%' justifyContent='center' alignItems='center' direction='column'>
                    <Stack spacing={2}>
                        <Text color='white' textAlign='center' letterSpacing={{ lg: '1', md: '0' }}>UNEARTH YOUR AUTHENTIC STYLE</Text>
                        <Text color='white' fontSize={{ lg: '55', md: '35', sm: '33' }} textAlign='center'>Pre-Fall 2022</Text>
                    </Stack>
                    <Link to='/menproducts'>
                        <Button colorScheme='white' bgColor='white' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} borderRadius='none' color='blackAlpha.800' mt='1.2rem' fontWeight='none' w='20vw'>SHOP NOW</Button>
                    </Link>
                </Flex>
            </Flex>

            <Box mt='2rem' mb={12}>
                <Text color='blackAlpha.800' letterSpacing={1} fontSize={30} mb='3rem' textAlign='center'>New Arrivals</Text>
                <ProductCarousel products={data} category='men' />
                <Center>
                    <Link to='/menproducts'>
                        <Button colorScheme='blackAlpha' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem' w='10vw'>VIEW ALL</Button>
                    </Link>
                </Center>
            </Box>

            <SimpleGrid columns={{ lg: '2', md: '1', sm: '1' }} h='70vh' w='100%'>
                <Flex justifyContent='center' alignItems='center' color='white' direction='column' w='100%' backgroundColor='black'>
                    <Stack spacing={4}>
                        <Stack spacing={-3} fontSize='3.5rem'>
                            <Text>Outerwear</Text>
                            <Text>remodel</Text>
                        </Stack>
                        <Stack spacing={7}>
                            <Box>
                                <Text fontSize={16}>Add a fresh coat to your cold-weather edit with tailored styles</Text>
                                <Text fontSize={16}>taking bold shape</Text>
                            </Box>
                            <Link to='/menproducts'>
                                <Button colorScheme='gray' bgColor='white' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} borderRadius='none' color='blackAlpha.800' mt='1.2rem' fontWeight='none' w='25vw'>SHOP NOW</Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Flex>
                <Box display={{ lg: 'inline-block', md: 'none', sm: 'none' }} backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW39/BIG_2_3X_20220926111306.jpg?imwidth=1180&imdensity=1' >
                </Box>
            </SimpleGrid>

            <Box mt='2rem' mb={12} pt={5}>
                <MenCarousel1 products={data} category='men' />
                <Center>
                    <Link to='/menproducts'>
                        <Button colorScheme='blackAlpha' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem' w='10vw'>VIEW ALL</Button>
                    </Link>
                </Center>
            </Box>

            <SimpleGrid columns={{ lg: '2', md: '1', sm: '1' }} h='70vh' w='100%'>
                <Box display={{ lg: 'inline-block', md: 'none', sm: 'none' }} backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW39/BIG_3_2X_20220926111307.jpg?imwidth=1180&imdensity=1' >
                </Box>
                <Flex justifyContent='center' alignItems='center' color='white' direction='column' w='100%' backgroundColor='black'>
                    <Stack spacing={4}>
                        <Stack fontSize='3.5rem'>
                            <Text>Next in neutrals</Text>
                        </Stack>
                        <Stack spacing={7}>
                            <Box>
                                <Text fontSize={16}>Experiment with a cool-toned palatette of neutrals to evoke</Text>
                                <Text fontSize={16}>composure in any weather</Text>
                            </Box>
                            <Link to='/menproducts'>
                                <Button colorScheme='gray' bgColor='white' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} borderRadius='none' color='blackAlpha.800' mt='1.2rem' fontWeight='none' w='25vw'>SHOP NOW</Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Flex>
            </SimpleGrid>

            <Box mt='2rem' mb={12} pt={5}>
                <MenCarousel2 products={data} category='men' />
                <Center>
                    <Link to='/menproducts'>
                        <Button colorScheme='blackAlpha' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem' w='10vw'>VIEW ALL</Button>
                    </Link>
                </Center>
            </Box>

        </Box >
    )
}

export default Mens