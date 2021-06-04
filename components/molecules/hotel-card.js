import { Box, Text, Heading, Center } from "@chakra-ui/react";
import Image from "next/image";

export const HotelCard = ({ isCompact = false }) => {
  if (isCompact) {
    return (
      <Box h="full">
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
      </Box>
    );
  }

  return (
    <Box minH="2xs">
      <Box
        maxH="200px"
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
      </Box>
      <Box>
        <Heading as="h5" fontSize="lg" color="brand.200">
          Tabby Town
        </Heading>
        <Text color="gray.500">Gunung Batu, Indonesia</Text>
      </Box>
    </Box>
  );
};
