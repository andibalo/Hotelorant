import {
    Flex,
    Center,
    Stack,
    WrapItem,
    Divider,
    SimpleGrid,
    Box,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react";
  import { Navbar } from "../components/navbar";
  import { Container } from "../components/atoms/container";
  import { Button } from "../components/atoms/button";
  import Image from "next/image";
  
export default function Invoice (){
    return (
      <Flex minH="100vh" flexDirection="column">
        <Navbar />
        <Container>
        <Box>
        <Center>
            <Box borderRadius="50%" backgroundColor="#E5E5E5;" width="16" height="16" display="flex" justifyContent="center" alignItems="center">
                <Heading color="#898989;">1</Heading>
            </Box>
            <Box backgroundColor="#E5E5E5;" width="7" height="1">
            </Box>
            <Box borderRadius="50%" backgroundColor="#E5E5E5;" width="16" height="16" display="flex" justifyContent="center" alignItems="center">
                <Heading color="#898989;">2</Heading>
            </Box>
            <Box backgroundColor="#E5E5E5;" width="7" height="1"></Box>
            <Box borderRadius="50%" backgroundColor="#E5E5E5;" width="16" height="16" display="flex" justifyContent="center" alignItems="center">
                <Heading color="#898989;">3</Heading>
            </Box>
        </Center>
        <Heading color="#152C5B;" textAlign="center" mt="7">
                Payment
        </Heading>
        <Text color="#B0B0B0;" textAlign="center" mt="2">
            Kindly follow the instructions below
        </Text>
        </Box>
        <Flex direction="row" alignItems="center" justifyContent="center" mr="-20">
            <SimpleGrid mr="20">    
                <Text color="#152C5B;" fontSize="2xl">
                    Transfer Pembayaran
                </Text>
                <Text color="#152C5B;" fontSize="2xl">
                    Tax: <b>10%</b>
                </Text>
                <Text color="#152C5B;" fontSize="2xl">
                    Sub total: <b>Rp4.000.000</b>
                </Text>
                <Text color="#152C5B;" fontSize="2xl">
                    Total: <b>Rp4.400.000</b>
                </Text>
                <WrapItem color="#152C5B;">
                    <Image src="/bca.png" objectFit="cover" width="60px" height="35px"/>
                        <Text ml="2" mt="1">
                        Bank Central Asia<br></br>
                        2208 1996<br></br>
                        BuildWith Andi
                        </Text>
                </WrapItem>
                <WrapItem color="#152C5B;">
                    <Image src="/mandiri.png" objectFit="cover" width="60px" height="35px"/>
                        <Text ml="2" mt="1">
                        Bank Mandiri<br></br>
                        2208 1996<br></br>
                        BuildWith Andi
                        </Text>
                </WrapItem>
            </SimpleGrid>
            <Stack height="350px">
                <Divider orientation="vertical" m="7" />
            </Stack>
            <Box ml="20">
                <FormControl mb="3">
                        <FormLabel color="#152C5B;">Upload Bukti Transfer</FormLabel>
                        <Input type="file"/>
                </FormControl>
                <FormControl mb="3">
                    <FormLabel color="#152C5B;">Asal Bank</FormLabel>
                        <Input type="text" placeholder="Please type here ..." />
                </FormControl>
                <FormControl mb="3">
                    <FormLabel color="#152C5B;">Nama Pengirim</FormLabel>
                        <Input type="text" placeholder="Please type here ..."/>
                </FormControl>
            </Box>
        </Flex>
        <Flex justifyContent="center">
            <Stack direction="column" spacing={3}>
                <Button>Continue to Book</Button>
                <Button>Cancel</Button>
            </Stack>
            
        </Flex>
        </Container>
    </Flex>
    );
  };