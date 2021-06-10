import {
  Flex,
  Center,
  WrapItem,
  Divider,
  SimpleGrid,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Navbar } from "../../components/navbar";
import { Button } from "../../components/atoms/button";
import { Container } from "../../components/atoms/container";
import Image from "next/image";
import { ChatIcon, PhoneIcon, StarIcon, SunIcon } from "@chakra-ui/icons";

export default function Invoice() {
  return (
    <Flex minH="100vh" flexDirection="column">
      <Navbar />
      <Container>
        <Center>
          <Box>
            <Heading color="#152C5B;" fontSize="6xl" mr="56">
              INVOICE
            </Heading>
            <Text color="#B0B0B0;">15 Jan 2021 / 11 AM - 12 PM</Text>
            <br></br>
            <Text color="#152C5B;" fontSize="3xl">
              Ritz Carlton
            </Text>
            <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            <WrapItem color="#B0B0B0;" fontSize="2l" mt="2">
              <SunIcon color="red.200" mr="2" />
              Jl. DR. Ide Anak Agung Gde Agung Jl. Mega Kuningan<br></br>
              Barat No.1, Kuningan, Jakarta.
            </WrapItem>
            <WrapItem color="#B0B0B0;" fontSize="2l" mt="2">
              <ChatIcon color="orange.300" mr="2" />
              adeza.hamzah@ritzcarlton.com
            </WrapItem>
            <WrapItem color="#B0B0B0;" fontSize="2l" mt="2">
              <PhoneIcon color="green.300" mr="2" />
              +62 21 2551 8888
            </WrapItem>
            <br></br>
            <SimpleGrid columns={2}>
              <Box h="10">
                <Text color="#152C5B;" fontSize="2xl">
                  Date
                </Text>
                <Text color="#B0B0B0;" fontSize="2l">
                  20 Jan - 22 Jan 2021
                </Text>
              </Box>
              <Box h="10">
                <Text color="#152C5B;" fontSize="2xl">
                  Room
                </Text>
                <Text color="#B0B0B0;" fontSize="2l">
                  1 Room
                </Text>
              </Box>
            </SimpleGrid>
            <br></br>
            <br></br>
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
          </Box>
          <Divider orientation="vertical" m="7" height="575px" />
          <SimpleGrid>
            <Box h="296px" w="475px" position="relative" overflow="hidden">
              <Image src="/login.png" layout="fill" objectFit="cover" />
            </Box>
            <Box mt="20">
              <Text color="#152C5B;" fontSize="2xl">
                Dibayar oleh:
              </Text>
              <Text color="#152C5B;" fontSize="2xl">
                Nama: Andi Usman Balo
              </Text>
              <Text color="#152C5B;" fontSize="2xl">
                Email: AndiKeren123@gmail.com
              </Text>
              <Text color="#152C5B;" fontSize="2xl">
                No.Telp: 082175864157
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
        <Flex justifyContent="center">
          <Button>Back to Home</Button>
        </Flex>
      </Container>
    </Flex>
  );
}
