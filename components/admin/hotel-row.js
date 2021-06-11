import {
  Box,
  Text,
  Stack,
  SimpleGrid,
  Center,
  Image,
  Icon,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete";
import { AiOutlineEdit } from "@react-icons/all-files/ai/AiOutlineEdit";
import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";
import Link from "next/link";

export const HotelRow = ({ hotel, handleDeleteHotelRow }) => {
  const { name, description, location, images, id } = hotel;
  return (
    <Box mt="10" h="250px">
      <SimpleGrid columns={3} spacing="5" h="full">
        <Center borderRadius="xl" overflow="hidden">
          <Image src={images[0]} w="full" h="full" objectFit="cover" />
        </Center>
        <Box>
          <Text>
            <Text color="brand.200" fontSize="3xl" textTransform="capitalize">
              {name}
            </Text>
            <Text color="brand.200" fontSize="1xl" textTransform="capitalize">
              {location}
            </Text>
            <Text color="#B0B0B0;" fontSize="1xl" mb="5">
              {description}
            </Text>
            <Box>
              <StarIcon color="yellow.300" w={6} h={6} mr="1" />
              <StarIcon color="yellow.300" w={6} h={6} mr="1" />
              <StarIcon color="yellow.300" w={6} h={6} mr="1" />
              <StarIcon color="yellow.300" w={6} h={6} mr="1" />
              <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            </Box>
          </Text>
        </Box>
        <Center>
          <SimpleGrid columns={3} spacing={5}>
            <Link href={`/hotel/${id}`}>
              <a>
                <Icon as={AiOutlineFileSearch} w={8} h={8} color="brand.200" />
              </a>
            </Link>
            <Link href={`/admin/${id}`}>
              <a>
                <Icon as={AiOutlineEdit} w={8} h={8} color="yellow.500" />
              </a>
            </Link>
            <Box onClick={() => handleDeleteHotelRow(id)} cursor="pointer">
              <Icon as={AiOutlineDelete} w={8} h={8} color="red.500" />
            </Box>
          </SimpleGrid>
        </Center>
      </SimpleGrid>
    </Box>
  );
};
