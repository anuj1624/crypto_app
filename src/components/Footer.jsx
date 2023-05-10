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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, quibusdam incidunt nihil provident consequuntur facere cumque, culpa quo laudantium necessitatibus, cum vel! Adipisci asperiores ipsa repellendus delectus dolorum inventore quod cum sunt aperiam amet, laboriosam eius, temporibus natus velit nihil.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={img}/>
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