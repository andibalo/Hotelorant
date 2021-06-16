import {
  Divider,
  SimpleGrid,
  Text,
  Image,
  Box,
  Stack,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { formatRupiah } from "../../utils/functions";

export const SearchResultRow = ({ hotel }) => {
  console.log(hotel);

  const { name, address, price, images } = hotel;

  return (
    <Stack direction="row" spacing="5" mt="10">
      <Box h="250px" w="300px" position="left" overflow="hidden">
        <Image
          borderRadius="10%"
          src={hotel.images[0]}
          w="full"
          h="full"
          objectFit="cover"
        />
      </Box>
      <Box w="700px" h="200">
        <Text color="brand.200" fontSize="2xl">
          {name}
        </Text>
        <Text color="gray.500" fontSize="2l">
          {address}
        </Text>

        <Box mt="2" mb="2">
          <StarIcon color="yellow.300" w="6" h="6" mr="1"></StarIcon>
          <StarIcon color="yellow.300" w="6" h="6" mr="1"></StarIcon>
          <StarIcon color="yellow.300" w="6" h="6" mr="1"></StarIcon>
          <StarIcon color="yellow.300" w="6" h="6" mr="1"></StarIcon>
          <StarIcon color="yellow.300" w="6" h="6" mr="1"></StarIcon>
        </Box>
      </Box>

      <Divider orientation="vertical" m="7" height="150px" />

      <Box>
        <Text mt="10" color="gray.500" fontSize="md" align="center">
          Start From
        </Text>
        <Text color="brand.100" fontSize="2xl" align="center">
          {formatRupiah(price)}
        </Text>
        <Text color="gray.900" fontSize="md" align="center">
          Per Night
        </Text>
      </Box>
    </Stack>
  );
};
