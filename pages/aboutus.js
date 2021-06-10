import {
  Flex,
  Box,
  Input,
  Heading,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { SimpleGrid } from "@chakra-ui/react"
import { Container } from "../components/atoms/container";

const Login = () => {
  return (

    <Flex minH="100vh" flexDirection="column">
      <Navbar />
      <Box >
        <Box p="5">
          <Box mt="10">
            <Heading color="#B0B0B0" fontSize="7xl" mb="3" textAlign="center">
              ABOUT US
              </Heading>
          </Box>
        </Box>
      </Box>

      <Container>
        <SimpleGrid columns={4} spacingX="5px" spacingY="2px">

          <Box borderWidth="1px" borderColor="#F5F6F8" w="52" h="64" backgroundColor="#F5F6F8" mt="-12">
            <Box display="flex" justifyContent="center" >

              <Box width="20" height="20" position="relative" overflow="hidden" mb="2" borderRadius="50%" overflow="hidden" width="40" height="40" mt="10px">
                <Image src="/catandi.jpg" layout="fill" objectFit="cover" borderRadius="full" />
              </Box>
            </Box>
            <Box justifyContent="center">
              <Text textAlign="center" fontSize="20px">
                Andi Usman Balo
              </Text>
              <Text textAlign="center" fontSize="2l" color="#3252DF">
                FrontEnd/BackEnd
              </Text>
            </Box>

          </Box>

          <Box borderWidth="1px" borderColor="#F5F6F8" w="52" h="64" backgroundColor="#F5F6F8" mt="-12" >
            <Box display="flex" justifyContent="center" >

              <Box width="20" height="20" position="relative" overflow="hidden" mb="2" borderRadius="50%" overflow="hidden" width="40" height="40" mt="10px">
                <Image src="/catolin.jpg" layout="fill" objectFit="cover" borderRadius="full" />
              </Box>
            </Box>
            <Box justifyContent="center">
              <Text textAlign="center" fontSize="20px">
                Charoline Khandoko
              </Text>
              <Text textAlign="center" fontSize="2l" color="#3252DF">
                FrontEnd/BackEnd
              </Text>
            </Box>

          </Box>

          <Box borderWidth="1px" borderColor="#F5F6F8" w="52" h="64" backgroundColor="#F5F6F8" mt="-12">
            <Box display="flex" justifyContent="center" >

              <Box width="20" height="20" position="relative" overflow="hidden" mb="2" borderRadius="50%" overflow="hidden" width="40" height="40" mt="10px">
                <Image src="/catping.jpg" layout="fill" objectFit="cover" borderRadius="full" />
              </Box>
            </Box>
            <Box justifyContent="center">
              <Text textAlign="center" fontSize="20px">
                Hernando Martin
              </Text>
              <Text textAlign="center" fontSize="2l" color="#3252DF">
                FrontEnd/BackEnd
              </Text>
            </Box>

          </Box>

          <Box borderWidth="1px" borderColor="#F5F6F8" w="52" h="64" backgroundColor="#F5F6F8" mt="-12">
            <Box display="flex" justifyContent="center" >

              <Box width="20" height="20" position="relative" overflow="hidden" mb="2" borderRadius="50%" overflow="hidden" width="40" height="40" mt="10px">
                <Image src="/catcent.jpg" layout="fill" objectFit="cover" borderRadius="full" />
              </Box>
            </Box>
            <Box justifyContent="center">
              <Text textAlign="center" fontSize="20px">
                Vincent
              </Text>
              <Text textAlign="center" fontSize="2l" color="#3252DF">
                FrontEnd/BackEnd
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      <Box justifyContent="center">
              <Text textAlign="center" fontSize="20px">
              Copyright 2021 • All rights reserved • Hotelorant
              </Text>
            </Box>
    </Flex>
  );


};

export default Login;
