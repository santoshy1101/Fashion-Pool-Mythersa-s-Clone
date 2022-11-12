import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Stack, Button, Center } from '@chakra-ui/react'
import ProductCarousel from '../components/ProductCarousel'
import axios from 'axios'
import { Link } from 'react-router-dom'

const getData = () => {
    return axios.get(`https://lazy-blue-panda-gear.cyclic.app/products`);
}

const Kids = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Box w={{ lg: '75%', md: '100%', sm: '100%' }} margin='auto'>

            <Flex h={{ lg: '71vh', md: '46vh', sm: '46vh' }} justifyContent='space-between' alignItems='center'>
                <Flex h='100%' w='49.5%' direction='column' justifyContent='flex-end' alignItems='center' pb='5rem' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_CW37/Kids-HP_September_Girl-desktop_2x_20220912144223.jpg?imwidth=1180&imdensity=1'>
                    <Stack spacing={5} justifyContent='center' alignItems='center'>
                        <Text fontSize={{ lg: '3.3rem', md: '2.5rem', sm: '2.5rem' }} color='white'>Girls</Text>
                        <Link to='/kidsproducts'>
                            <Button colorScheme='white' bgColor='white' maxW={{ lg: '6vw', md: '10vw', sm: '10vw' }} h={8} fontSize={13} borderRadius='none' color='blackAlpha.800' mt='1.2rem' fontWeight='none' w='20vw'>SHOP NOW</Button>
                        </Link>
                    </Stack>
                </Flex>

                <Flex h='100%' w='49.5%' direction='column' justifyContent='flex-end' alignItems='center' pb='5rem' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_CW37/Kids-HP_September_Boy-desktop_2x_20220912144214.jpg?imwidth=1180&imdensity=1'>
                    <Stack spacing={5} justifyContent='center' alignItems='center'>
                        <Text fontSize={{ lg: '3.3rem', md: '2.5rem', sm: '2.5rem' }} color='white'>Boys</Text>
                        <Link to='/kidsproducts'>
                            <Button colorScheme='white' bgColor='white' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} borderRadius='none' color='blackAlpha.800' mt='1.2rem' fontWeight='none' w='20vw'>SHOP NOW</Button>
                        </Link>
                    </Stack>
                </Flex>
            </Flex>

            <Flex h={{ lg: '34vh', md: '23vh', sm: '22rem' }} mt='2.4rem' mb='1.6rem' direction='column' justifyContent='center' alignItems='center' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_SEPTEMBER/Homepage_Kids_BabyBanner_desktop_2x_20220830111456.jpg?imwidth=1180&imdensity=1'>
                <Stack spacing={5} justifyContent='center' alignItems='center'>
                    <Text fontSize={{ lg: '3.4rem', md: '2.2rem', sm: '2.2rem' }} color='blackAlpha.800'>Baby</Text>
                    <Link to='/kidsproducts'>
                        <Button colorScheme='black' bgColor='black' maxW={{ lg: '6vw', md: '9vw', sm: '9vw' }} h={8} fontSize={{ lg: '13', md: '10', sm: '10' }} borderRadius='none' color='white' mt='1.2rem' fontWeight='none' w='20vw'>SHOP NOW</Button>
                    </Link>
                </Stack>
            </Flex>

            <Flex h={{ lg: '45vh', md: '40vh', sm: '46vh' }} justifyContent='space-between' alignItems='center'>
                <Flex h='100%' w='49.5%' direction='column' justifyContent='flex-end' alignItems='center' pb='1rem' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/12_Kids/PocketBanners/SS22/CW30_Pocket_Coats___Jackets_20220818143153.jpg'>
                    <Stack spacing={5} justifyContent='center' alignItems='center'>
                        <Text fontSize={{ lg: '1.8rem', md: '1.4rem', sm: '1.4rem' }} color='white'>KID'S COATS & JACKETS</Text>
                        <Link to='/kidsproducts'>
                            <Button colorScheme='white' bgColor='white' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} borderRadius='none' color='blackAlpha.800' mt='1.2rem' fontWeight='none' w='20vw'>SHOP NOW</Button>
                        </Link>
                    </Stack>
                </Flex>

                <Flex h='100%' w='49.5%' direction='column' justifyContent='flex-end' alignItems='center' pb='1rem' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/12_Kids/PocketBanners/FW22/CW38_PB_BabyDresses_Image_20220921093314.jpg'>
                    <Stack spacing={5} justifyContent='center' alignItems='center'>
                        <Text fontSize={{ lg: '1.8rem', md: '1.5rem', sm: '1.4rem' }} color='white'>BABY DRESSES</Text>
                        <Link to='/kidsproducts'>
                            <Button colorScheme='white' bgColor='white' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} borderRadius='none' color='blackAlpha.800' mt='1.2rem' fontWeight='none' w='20vw'>SHOP NOW</Button>
                        </Link>
                    </Stack>
                </Flex>
            </Flex>

            <Box mt='2rem' mb={12} marginTop={12}>
                <Text color='blackAlpha.800' fontSize={25} mb='1rem' textAlign='center'>NEW ARRIVALS</Text>
                <ProductCarousel products={data} category='kids' />
                <Center>
                    <Link to='/kidsproducts'>
                        <Button colorScheme='blackAlpha' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem' w='10vw'>VIEW ALL</Button>
                    </Link>
                </Center>
            </Box>

        </Box>
    )
}

export default Kids