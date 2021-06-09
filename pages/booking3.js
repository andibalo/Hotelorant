import {
    Flex,
    Box,
    Input,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Center,

} from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { SimpleGrid } from "@chakra-ui/react"
import { Container } from "../components/atoms/container";
import { Button } from "../components/atoms/button";

const Login = () => {
    return (

        <Flex minH="100vh" flexDirection="column">
            <Navbar />

            <Container>
                <Center>
                    <Box mt="5" borderRadius="50%" backgroundColor="gray.100" width="20" height="20" display="flex" justifyContent="center" alignItems="center">
                        <Heading color="gray.500">1</Heading>
                    </Box>
                    <Box mt="5" backgroundColor="gray.100" width="7" height="1">
                    </Box>
                    <Box mt="5" borderRadius="50%" backgroundColor="gray.100" width="20" height="20" display="flex" justifyContent="center" alignItems="center">
                        <Heading color="gray.500">2</Heading>
                    </Box>
                    <Box mt="5" backgroundColor="gray.100" width="7" height="1"></Box>
                    <Box mt="5" borderRadius="50%" backgroundColor="gray.100" width="20" height="20" display="flex" justifyContent="center" alignItems="center">
                        <Heading color="gray.500">3</Heading>
                    </Box>
                </Center>

                <Heading mt="7" color="brand.200" mb="5" fontSize="4xl" align="center">
                    Yay! Completed
                </Heading>

                <Center>
                    <Box>
                        <Box width="60" height="60" position="relative" overflow="hidden" mb="2" overflow="hidden" width="60" height="60" mt="-20px">
                            <Image src="/boking3.jpg" layout="fill" objectFit="cover" />
                        </Box>
                    </Box>
                </Center>

                <Box justifyContent="center">
                    <Text textAlign="center" fontSize="20px" color="#B0B0B0">
                        We will inform you via email later once the transaction has been accepted
              </Text>
                </Box>

                <Box mt="60px" align="center" >
                    <Button>Back to Home</Button>
                </Box>


            </Container>

        </Flex>
    );


};

export default Login;
