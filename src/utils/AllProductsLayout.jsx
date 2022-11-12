import { Flex, Select, Text } from '@chakra-ui/react'
import React from 'react'

const AllProductsLayout = () => {
    return (
        <Flex justifyContent='space-between' alignItems='center' pb={1} mb={3} borderBottom='1px solid gray'>
            <Select placeholder='Sort by' w={{ lg: '7vw', md: '14vw' }} h='4vh'>
                <option value='low-to-high'>Low-to-high</option>
                <option value='High-to-low'>High-to-low</option>
            </Select>

            <Flex gap={3}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
            </Flex>
        </Flex>
    )
}

export default AllProductsLayout