import { Navbar } from "../../components/navbar";

import {
  Avatar,
  Center,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
  SimpleGrid,
  Const,
  Text,
  Image,
  Badge,
  Box,
  Flex,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons";
import { Container } from "../../components/atoms/container";
import { Button } from "../../components/atoms/button";

export default function BookingList() {
  return (
    <div>
      <Navbar />

      <Container>
        <Heading color="brand.200" mb="5" fontSize="2xl" align="left">
          Booked Hotel
        </Heading>

        <Flex direction="column">
          <Box
            pt="6"
            color="#B0B0B0"
            w="1200px"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <Stack direction="row" spacing="5" mt="5">
              <Box
                mr="10"
                h="250px"
                w="150px"
                position="left"
                overflow="hidden"
              >
                <Image
                  borderRadius="10%"
                  src="/register.png"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>

              <Box w="700px" h="200">
                <Text color="brand.200" fontSize="2xl">
                  Ritz Carlton
                </Text>
                <Text color="gray.300" fontSize="2l">
                  Jl. DR. Ide Anak Agung Gde Agung Jl. Mega Kuningan Barat No.1
                  Kuningan, Jakarta.
                </Text>

                <Box mt="2" mb="2">
                  <StarIcon color="yellow.300" w="6" h="6" mr="1"></StarIcon>
                  <StarIcon color="yellow.300" w="6" h="6" mr="1"></StarIcon>
                  <StarIcon color="yellow.300" w="6" h="6" mr="1"></StarIcon>
                  <StarIcon color="yellow.300" w="6" h="6" mr="1"></StarIcon>
                  <StarIcon color="yellow.300" w="6" h="6" mr="1"></StarIcon>
                </Box>

                <SimpleGrid columns={2}>
                  <Box h="10">
                    <Text color="brand.200" fontSize="2xl">
                      Date
                    </Text>
                    <Text color="gray.300" fontSize="2l">
                      20 Jan - 22 Jan 2021
                    </Text>
                  </Box>
                  <Box h="10">
                    <Text color="brand.200" fontSize="2xl">
                      Room
                    </Text>
                    <Text color="gray.300" fontSize="2l">
                      1 Room
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>

              <Divider orientation="vertical" m="7" height="150px" />

              <Box>
                <Text color="gray.300" fontsize="2l" align="center">
                  15 Jan 2021
                </Text>
                <Text color="brand.200" fontSize="xl" align="center">
                  Andi Usman Balo
                </Text>
                <Text mt="10" color="#1ABC9C" fontSize="2xl" align="center">
                  Rp 4.000.000
                </Text>
                <Text color="#3252DF" fontSize="2l" align="center">
                  Lunas
                </Text>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </div>
  );
}
