import {
    Flex,
    Center,
    Stack,
    WrapItem,
    Divider,
    SimpleGrid,
    Box,
    Heading,
    Text
  } from "@chakra-ui/react";
  import { Navbar } from "../components/navbar";
  import { Container } from "../components/atoms/container";
  import { Button } from "../components/atoms/button";
  import Image from "next/image";
  import Link from "next/link";
import {ChatIcon, PhoneIcon, StarIcon, SunIcon } from "@chakra-ui/icons";
  
export default function Invoice (){
    return (
      <Flex minH="100vh" flexDirection="column">
        <Navbar />
        <Container>
        <Box>
        <Center>
            <Box borderRadius="50%" backgroundColor="gray.100" width="16" height="16" display="flex" justifyContent="center" alignItems="center">
                <Heading color="gray.500">1</Heading>
            </Box>
            <Box backgroundColor="gray.100" width="7" height="1">
            </Box>
            <Box borderRadius="50%" backgroundColor="gray.100" width="16" height="16" display="flex" justifyContent="center" alignItems="center">
                <Heading color="gray.500">2</Heading>
            </Box>
            <Box backgroundColor="gray.100" width="7" height="1"></Box>
            <Box borderRadius="50%" backgroundColor="gray.100" width="16" height="16" display="flex" justifyContent="center" alignItems="center">
                <Heading color="gray.500">3</Heading>
            </Box>
        </Center>
        <Heading color="brand.200" textAlign="center" mt="7">
                Payment
        </Heading>
        <Text color="gray.400" textAlign="center" mt="2">
            Kindly follow the instructions below
        </Text>
        </Box>
        <Flex direction="coloumn" alignItems="center" justifyContent="center">
            <SimpleGrid>    
                <Text color="brand.200" fontSize="2xl">
                    Transfer Pembayaran
                </Text>
                <Text color="brand.200" fontSize="2xl">
                    Tax: <b>10%</b>
                </Text>
                <Text color="brand.200" fontSize="2xl">
                    Sub total: <b>Rp4.000.000</b>
                </Text>
                <Text color="brand.200" fontSize="2xl">
                    Total: <b>Rp4.400.000</b>
                </Text>
                <WrapItem color="brand.200">
                    <Image src="/bca.png" objectFit="cover" width="60px" height="35px"/>
                        <Text ml="2" mt="1">
                        Bank Central Asia<br></br>
                        2208 1996<br></br>
                        BuildWith Andi
                        </Text>
                </WrapItem>
                <WrapItem color="brand.200">
                    <Image src="/mandiri.png" objectFit="cover" width="60px" height="35px"/>
                        <Text ml="2" mt="1">
                        Bank Mandiri<br></br>
                        2208 1996<br></br>
                        BuildWith Andi
                        </Text>
                </WrapItem>
            </SimpleGrid> 
            <Divider orientation="vertical" m="7" height="350px"/>
            <SimpleGrid ml="-12">
                <Box mt="20">
                    <Text color="brand.200" fontSize="2xl">
                        Dibayar oleh:
                    </Text>
                    <Text color="brand.200" fontSize="2xl">
                        Nama: Andi Usman Balo
                    </Text>
                    <Text color="brand.200" fontSize="2xl">
                        Email: AndiKeren123@gmail.com
                    </Text>
                    <Text color="brand.200" fontSize="2xl">
                        No.Telp: 082175864157
                    </Text>
                </Box>
            </SimpleGrid>
        </Flex>
        </Container>
    </Flex>
    );
  };