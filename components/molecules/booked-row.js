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
import moment from "moment";
import { formatRupiah } from "../../utils/functions";

export const BookedRow = ({ booking }) => {
  const {
    name,
    totalPrice,
    dateIssued,
    hotel,
    rooms,
    checkInDate,
    checkOutDate,
  } = booking;

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
          {hotel.name}
        </Text>
        <Text color="gray.500" fontSize="2l">
          {hotel.address}
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
            <Text color="gray.500" fontSize="2l">
              {`${moment(checkInDate).format("DD MMM YYYY")} - ${moment(
                checkOutDate
              ).format("DD MMM YYYY")}`}
            </Text>
          </Box>
          <Box h="10">
            <Text color="brand.200" fontSize="2xl">
              Rooms
            </Text>
            <Text color="gray.500" fontSize="2l">
              {`${rooms} Room(s)`}
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Divider orientation="vertical" m="7" height="150px" />

      <Box>
        <Text color="gray.500" fontSize="2l" align="center">
          {moment(dateIssued * 1000).format("DD MMM YYYY")}
        </Text>
        <Text color="brand.200" fontSize="xl" align="center">
          {name}
        </Text>
        <Text mt="10" color="#1ABC9C" fontSize="2xl" align="center">
          {formatRupiah(totalPrice)}
        </Text>
        <Text color="#3252DF" fontSize="2l" align="center">
          Lunas
        </Text>
      </Box>
    </Stack>
  );
};
