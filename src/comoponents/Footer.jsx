import { Box, Stack, Input, GridItem, Text, Flex, Button, SimpleGrid, Divider, Image, Center } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

function Footer() {
    return (<Box w={{ lg: '100%', md: '90%', sm: '90%' }} margin='auto'  mt='9rem'>

        <Divider mb={{ lg: '7', md: '3', sm: '3' }} />

        <Stack justifyContent='center' alignItems='center'>
            <Text>SHOP WHENEVER, WHEREVER WITH THE APP</Text>
            <Center>
                <Image w={{ lg: '15vw', md: '23vw', sm: '22vw' }} cursor='pointer' src='https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png' alt='downloadable' />
            </Center>
        </Stack>

        <Divider mt={{ lg: '7', md: '3', sm: '3' }} mb={2} />

        <SimpleGrid columns={{ lg: '4', md: '1', sm: '1' }} spacing={70} >
            <GridItem display={{ lg: 'inline-block', md: 'none', sm: 'none' }}>
                <Stack spacing={3}>
                    <Text>SERVICE & SECURITY</Text>
                    <Stack spacing={3}>
                        <Box>
                            <Text as='b'>Fast delivery</Text>
                            <Text color='gray' fontSize={15}>Delivery within 2 business days</Text>
                        </Box>
                        <Box>
                            <Text as='b'>Free returns within 30 days</Text>
                            <Text color='gray' fontSize={15}>Convenient return service</Text>
                        </Box>
                        <Box>
                            <Text as='b'>Secure payment and data protection</Text>
                            <Text color='gray' fontSize={15}>SSL enccryption for secure transactions and personal data</Text>
                        </Box>
                    </Stack>
                </Stack>
            </GridItem>

            <GridItem width='30vw' ms={20} display={{ lg: 'inline-block', md: 'none', sm: 'none' }}>
                <Stack spacing={1}>
                    <Box>
                        <Text>CUSTOMER</Text>
                        <Text>CARE</Text>
                    </Box>
                    <Stack spacing={1} color='gray'>
                        <Text fontSize={17}>Contact us</Text>
                        <Text fontSize={17}>Shipping information</Text>
                        <Text fontSize={17}>Secure payment</Text>
                        <Text fontSize={17}>Exchanges</Text>
                        <Text fontSize={17}>Returns</Text>
                        <Text fontSize={17}>After sale service</Text>
                        <Text fontSize={17}>Gift card</Text>
                    </Stack>
                </Stack>
            </GridItem>

            <GridItem width={{ lg: '30vw', md: 'full', sm: 'full' }} ml={{ lg: '12', md: '0', sm: '0' }} margin={{ lg: 'none', md: 'auto', sm: 'auto' }}>
                <Stack spacing={6} direction={{ lg: 'column', md: 'row' }}>
                    <Stack spacing={3}>
                        <Text w={{ lg: '', md: '36vw', sm: '32vw' }}>GET TREND UPDATES, STYLE TIPS AND MORE</Text>
                        <Flex w={{ lg: '', md: '36vw', sm: '32vw' }}>
                            <Input w='26vw' borderRadius='none' placeholder="Your email address here" />
                            <Button borderRadius='none' fontFamily='monospace' fontWeight='0'>SIGN UP</Button>
                        </Flex>
                    </Stack>

                    <Stack spacing={0}>
                        <Text as='b'>Wish list</Text>
                        <Text color='gray'>Receive personal notifications</Text>
                    </Stack>

                    <Stack>
                        <Text as='b'>Follow us on</Text>
                        <Flex gap={2} cursor='pointer'>
                            <AiFillLinkedin />
                            <AiFillFacebook />
                            <AiFillTwitterSquare />
                            <AiFillInstagram />
                            <AiFillYoutube />
                        </Flex>
                    </Stack>
                </Stack>
            </GridItem>
        </SimpleGrid>

        <Divider mt={{ lg: '7', md: '3', sm: '3' }} mb={3} />

        <Flex mb={1} justifyContent='space-between' alignItems='center'>
            <Text color='gray'>copyright © 2006-2022 mytheresa.com</Text>
            <Flex gap={3}>
                <Text color='gray'>Terms of use</Text>
                <Text color='gray'>Privacy policy</Text>
                <Text color='gray'>Imprint</Text>
            </Flex>
        </Flex>
    </Box >
    )
}

export default Footer;