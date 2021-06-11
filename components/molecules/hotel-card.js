import { Box, Text, Heading, Center, Image } from "@chakra-ui/react";
import Link from "next/link";
import { formatRupiah } from "../../utils/functions";

export const HotelCard = ({ hotel, isCompact = false }) => {
  const { name, location, images, price, id } = hotel;
  if (isCompact) {
    return (
      <Box maxH="250px">
        <Box
          h="full"
          w="full"
          position="relative"
          borderRadius="3xl"
          overflow="hidden"
          mb="3"
        >
          <Image src={images[0]} h="full" w="full" objectFit="cover" />
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
                  {`${formatRupiah(price)}`}
                </Box>
                /night
              </Text>
            </Center>
          </Box>
          <Box position={"absolute"} bottom="0" left="10px" p="3">
            <Heading
              as="h5"
              fontSize="lg"
              color="white"
              textTransform="capitalize"
            >
              {name}
            </Heading>
            <Text color="white" textTransform="capitalize">
              {location}
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Link href={`/hotel/${id}`}>
      <Box minH="2xs" cursor="pointer">
        <Box
          maxH="200px"
          h="full"
          w="full"
          position="relative"
          borderRadius="3xl"
          overflow="hidden"
          mb="3"
        >
          <Image src={images[0]} h="full" w="full" objectFit="cover" />
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
                  {`${formatRupiah(price)}`}
                </Box>
                /night
              </Text>
            </Center>
          </Box>
        </Box>
        <Box>
          <Heading
            as="h5"
            fontSize="lg"
            color="brand.200"
            textTransform="capitalize"
          >
            {name}
          </Heading>
          <Text color="gray.500" textTransform="capitalize">
            {location}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};
