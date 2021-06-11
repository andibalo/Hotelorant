import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { SectionWrapper } from "../atoms/section-wrapper";
import { HotelCard } from "../molecules/hotel-card";
import Image from "next/image";

export const HighlyRated = ({ hotels }) => {
  return (
    <SectionWrapper>
      <Heading fontSize="2xl" color="brand.200" mb="5">
        Highly Rated
      </Heading>
      <Stack direction="row" spacing="5" minH="md">
        <Flex flex="0.6">
          <Box
            h="full"
            w="full"
            position="relative"
            borderRadius="3xl"
            overflow="hidden"
            mb="3"
          >
            <Image src="/placeholder.png" layout="fill" objectFit="cover" />
            <Box
              bg="secondary.100"
              height="40px"
              minW="50%"
              position="absolute"
              borderBottomLeftRadius="xl"
              top="0"
              right="0"
            >
              <Center alignItems="center" h="full">
                <Text color="white">
                  <Box as="span" fontWeight="semibold">
                    Rp. 150rb
                  </Box>
                  /night
                </Text>
              </Center>
            </Box>
            <Box position={"absolute"} bottom="0" left="10px" p="3">
              <Heading as="h5" fontSize="lg" color="white">
                Place
              </Heading>
              <Text color="white">Test</Text>
            </Box>
          </Box>
        </Flex>
        <Box flex="1">
          <SimpleGrid columns={2} spacing={5} h="full">
            {hotels &&
              hotels.length > 0 &&
              hotels.map((hotel) => <HotelCard isCompact hotel={hotel} />)}
          </SimpleGrid>
        </Box>
      </Stack>
    </SectionWrapper>
  );
};
