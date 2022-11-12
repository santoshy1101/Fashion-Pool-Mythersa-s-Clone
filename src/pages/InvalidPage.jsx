import React from 'react';
import { Text, Box, Flex } from '@chakra-ui/react';

const InvalidPage = () => {
    return (
        <Box w='75%' margin='auto' h='70vh'>
            <Flex w='100%' h='100%' justifyContent='center' alignItems='center'>
                <Text as='b' fontSize={20}>404, Page Not Found!</Text>
            </Flex>
        </Box>
    )
}

export default InvalidPage