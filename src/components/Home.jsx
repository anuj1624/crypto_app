import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import btcSrc from '../assets/btc (1).png';
const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={"85vh"}>
      <Image src={btcSrc}  h={'full'} w={'full'} objectFit={'contain'} filter={'grayscale(1)'} />
      <Text
      fontSize={'6xl'}
      textAlign={'center'}
      mt={'-20'}
      color={'whiteAlpha.700'}
      fontWeight={'thin'}
      >Xcrypto</Text>
      
    </Box>
  )
}

export default Home