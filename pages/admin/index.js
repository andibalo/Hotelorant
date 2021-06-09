import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { HeaderTab } from "../../components/admin/header-tab";
import { Container } from "../../components/atoms/container";
import { Navbar } from "../../components/navbar";
import Image from "next/image";
import { StarIcon } from "@chakra-ui/icons";

export default function AdminHome() {
  return (
    <div>
      <Navbar />
      <Container>
        <Heading color="#152C5B;" fontSize="5xl">
          Hello, Admin
        </Heading>
        <HeaderTab route="home" />
        <Stack mt="16">
            <Flex>
              <Center mr="10">
                <Image src="/ritz.png" width="361px" height="181" />
              </Center>   
              <Center w="550px">
                <Text>
                  <Text color="#152C5B;" fontSize="3xl">
                    The Ritz-Carlton
                  </Text>
                  <Text color="#152C5B;" fontSize="1xl">
                    Jakarta
                  </Text>
                  <Text color="#B0B0B0;" fontSize="1xl">
                  With an exceptional location near Jakarta Convention Center, upscale shopping and embassies, The Ritz-Carlton Jakarta, Mega Kuningan is ideal for business and leisure travel. Enjoy 5-star luxury and sensory experiences inspired by Indonesia’s historic spice trade, including Pan-Asian cuisine, indigenous spa rituals, personalized service and even signature cinnamon ice cream for children in the Ritz Kids program.
                  </Text>
                  <Box>
                    <StarIcon color="yellow.300" w={6} h={6} mr="1"/>
                    <StarIcon color="yellow.300" w={6} h={6} mr="1"/>
                    <StarIcon color="yellow.300" w={6} h={6} mr="1"/>
                    <StarIcon color="yellow.300" w={6} h={6} mr="1"/>
                    <StarIcon color="yellow.300" w={6} h={6} mr="1"/>
                  </Box>
                </Text>
              </Center>
              <Center ml="20">
                <SimpleGrid columns={3} spacing={5}>
                <Box>
                  <Image src="/details.png" width="37px" height="48px"/>
                  </Box>
                  <Box>
                  <Image src="/edit.png" width="44px" height="47px"/>
                  </Box>
                  <Box>
                  <Image src="/delete.png" width="45px" height="45px"/>
                  </Box>
                </SimpleGrid>
              </Center>
              </Flex>
        </Stack>
        <Stack mt="16">
            <Flex>
              <Center mr="10">
                <Image src="/royal.png" width="361px" height="181" />
              </Center>   
              <Center w="550px">
                <Text>
                  <Text color="#152C5B;" fontSize="3xl">
                    Royal Palm
                  </Text>
                  <Text color="#152C5B;" fontSize="1xl">
                    Jakarta Barat
                  </Text>
                  <Text color="#B0B0B0;" fontSize="1xl">
                  Royal Palm Hotel is designed and operated to be customer service satisfaction oriented & quality lounging place with indulging variety of food and beverage. Strategic location and easy access from Soekarno-Hatta International Airport by free airport shuttle and surrounded by shopping malls, movie theatre, culinary area and hospital. Providing new technology through free highspeed wifi internet connection in the rooms, function rooms and ballroom which can be utilized for wedding, meeting and conference.
                  </Text>
                  <Box>
                    <StarIcon color="yellow.300" w={6} h={6} mr="1"/>
                    <StarIcon color="yellow.300" w={6} h={6} mr="1"/>
                    <StarIcon color="yellow.300" w={6} h={6} mr="1"/>
                    <StarIcon color="yellow.300" w={6} h={6} mr="1"/>
                    <StarIcon color="yellow.300" w={6} h={6} mr="1"/>
                  </Box>
                </Text>
              </Center>
              <Center ml="20">
                <SimpleGrid columns={3} spacing={5}>
                <Box>
                  <Image src="/details.png" width="37px" height="48px"/>
                  </Box>
                  <Box>
                  <Image src="/edit.png" width="44px" height="47px"/>
                  </Box>
                  <Box>
                  <Image src="/delete.png" width="45px" height="45px"/>
                  </Box>
                </SimpleGrid>
              </Center>
              </Flex>
        </Stack>
      </Container>
    </div>
  );
}
