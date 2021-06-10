import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Divider,
  Center,
} from "@chakra-ui/react";
import { HeaderTab } from "../../components/admin/header-tab";
import { Container } from "../../components/atoms/container";
import { Navbar } from "../../components/navbar";
import Image from "next/image";

export default function BookingList() {
  return (
    <div>
      <Navbar />
      <Container>
        <Heading color="#152C5B;" fontSize="5xl">
          Hello, Admin
        </Heading>
        <HeaderTab route="booking-list" />
        <Stack>
        <Center>
          <Stack mt="16">
            <Flex>
              <Center>
                <Image src="/ritz.png" width="361px" height="181px" />
              </Center>
              <Center width="500px">
                <SimpleGrid>
                  <Stack direction="row" mb="7">
                    <Text color="#152C5B;" fontSize="2xl">
                        Book at
                    </Text>
                    <Center>
                      <Text color="#B0B0B0;" fontSize="1xl">
                        15 Jan 2021 / 11AM - 12 PM
                      </Text>
                    </Center>
                  </Stack>
                  <Box>
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
            </Flex>
          </Stack>
          <Divider orientation="vertical" mt="16" ml="10" mr="10" height="150px"/>
          <Stack width="350px">
            <SimpleGrid columns={2} spacing={16} mt="14">
                  <Box>
                    <Text color="#152C5B;" fontSize="2xl">
                      Date
                    </Text>
                    <Text color="#B0B0B0;" fontSize="2l">
                      20 Jan - 22 Jan 2021
                    </Text>
                  </Box>
                <Box>
                  <Text color="#152C5B;" fontSize="2xl">
                    Room
                  </Text>
                  <Text color="#B0B0B0;" fontSize="2l">
                    1 Room
                  </Text>
                </Box>
              </SimpleGrid>
              <Text color="#152C5B;" fontSize="2xl">
                  Total <b>Rp4.400.000</b>
              </Text>
              <Stack direction="row" spacing={7} pl="5">
                  <Text color="#152C5B;" fontSize="2xl">
                  Payment
                </Text>
                <Text color="#3252DF;" fontSize="2xl">
                  <b>Successful</b>
                </Text>
              </Stack>
          </Stack>
          </Center>
        </Stack>
        <Stack>
          <Center>
          <Stack mt="16">
            <Flex>
              <Center>
                <Image src="/royal.png" width="361px" height="181px" />
              </Center>
              <Center width="500px">
                <SimpleGrid mr="10">
                  <Stack direction="row" mb="7">
                    <Text color="#152C5B;" fontSize="2xl">
                        Book at
                    </Text>
                    <Center>
                      <Text color="#B0B0B0;" fontSize="1xl">
                        15 Jan 2021 / 11AM - 12 PM
                      </Text>
                    </Center>
                  </Stack>
                  <Box>
                    <Text color="#152C5B;" fontSize="2xl">
                        Nama: Hernando Martin
                    </Text>
                    <Text color="#152C5B;" fontSize="2xl">
                        Email: martin123@gmail.com
                    </Text>
                    <Text color="#152C5B;" fontSize="2xl">
                        No.Telp: 082248179175
                    </Text>
                  </Box>
                </SimpleGrid>
              </Center>
            </Flex>
          </Stack>
          <Divider orientation="vertical" mt="16" ml="10" mr="10" height="150px"/>
          <Stack width="350px">
            <SimpleGrid columns={2} spacing={16} mt="14">
                  <Box>
                    <Text color="#152C5B;" fontSize="2xl">
                      Date
                    </Text>
                    <Text color="#B0B0B0;" fontSize="2l">
                      17 Okt - 24 Okt 2021
                    </Text>
                  </Box>
                <Box>
                  <Text color="#152C5B;" fontSize="2xl">
                    Room
                  </Text>
                  <Text color="#B0B0B0;" fontSize="2l">
                    2 Room
                  </Text>
                </Box>
            </SimpleGrid>
              <Text color="#152C5B;" fontSize="2xl">
                  Total <b>Rp9.800.000</b>
              </Text>
              <Stack direction="row" spacing={7} pl="5">
                  <Text color="#152C5B;" fontSize="2xl">
                  Payment
                </Text>
                <Text color="#3252DF;" fontSize="2xl">
                  <b>Successful</b>
                </Text>
              </Stack>
          </Stack>
          </Center>
        </Stack>
      </Container>
    </div>
  );
}
