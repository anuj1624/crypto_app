import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import  img from '../assets/me.jpg';

const Footer = () => {
  return (<>
    <Box
      bgColor={'blackAlpha.900'}
      color={"whiteAlpha.700"}
      minH={"30"}
      px={"16"}
      py={["16", "8"]}
    
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]} p={'16'}  >
          <Text fontWeight={"bold"} textAlign={'left'} w={'full'} fontSize={'3xl'}>  About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            w={'full'}
          >
              
  real time crypto is a Professional crypto analysis Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of crypto analysis , with a focus on dependability and crypto currency exchange and analysis. We're working to turn our passion for crypto analysis  into a booming . We hope you enjoy our crypto analysis  as much as we enjoy offering them to you.
I will keep posting more important posts on my Website for all of you. Please give your support and love
Thanks For Visiting Our Site
Have a nice day!
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    <Text
    textAlign={'center'}>
    © 2023 Anand Sharma.All Rights Reserved.

    </Text>
    </Box>
    </>
  );
};

export default Footer;
