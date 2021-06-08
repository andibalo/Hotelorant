import { Navbar } from "../../components/navbar";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
  Button as ChakraButton,
  Center,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container } from "../../components/atoms/container";
import { Button } from "../../components/atoms/button";
import Image from "next/image";
import { HotelCard } from "../../components/molecules/hotel-card";
import { Footer } from "../../components/footer";

export default function HotelDetail() {
  return (
    <div>
      <Navbar />
      <Container>
        <Box>
          <Text>Home / Ritz Carlton</Text>
        </Box>
        <Center mb="5">
          <Box textAlign="center">
            <Heading color="brand.200">Ritz Carlton</Heading>
            <Text color="gray.500">Jakarta, Indonesia</Text>
          </Box>
        </Center>
        <Box h="sm" mb="10">
          <Box
            h="full"
            w="full"
            position="relative"
            borderRadius="3xl"
            overflow="hidden"
            mb="3"
          >
            <Image src="/placeholder.png" layout="fill" objectFit="cover" />
          </Box>
        </Box>

        <Stack direction="row" spacing="5" mb="20">
          <Box flex="1">
            <Box mb="5">
              <Heading color="brand.200" fontSize="xl">
                Ritz Carlton
              </Heading>
              <Text color="gray.500">Hotel bintang 5</Text>
            </Box>
            <Box>
              <Text mb="3">
                Jl. DR. Ide Anak Agung Gde Agung Jl. Mega Kuningan Barat No.1,
                Kuningan, Kuningan Tim., Kecamatan Setiabudi, Jakarta, Daerah
                Khusus Ibukota Jakarta 12950•(021) 25518888
              </Text>
              <Text>
                With an exceptional location near Jakarta Convention Center,
                upscale shopping and embassies, The Ritz-Carlton Jakarta, Mega
                Kuningan is ideal for business and leisure travel. Enjoy 5-star
                luxury and sensory experiences inspired by Indonesia’s historic
                spice trade, including Pan-Asian cuisine, indigenous spa
                rituals, personalized service and even signature cinnamon ice
                cream for children in the Ritz Kids program.
              </Text>
            </Box>
          </Box>
          <Box flex="1">
            <Box
              borderRadius="xl"
              borderWidth="1px"
              borderColor="gray.300"
              h="full"
              p="5"
            >
              test
            </Box>
          </Box>
        </Stack>
        <Box>
          <Heading color="brand.200" fontSize="xl" mb="3">
            Around The Hotel
          </Heading>
          <SimpleGrid columns="4" spacing="5" h="xs">
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </SimpleGrid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
