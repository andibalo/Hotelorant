import { Flex, Box, Text, Stack, SimpleGrid, Center } from "@chakra-ui/react";
import { Button } from "../atoms/button";
import moment from "moment";
import { formatRupiah } from "../../utils/functions";
import Link from "next/link";

export const BookingListItem = ({ booking }) => {
  const {
    id,
    rooms,
    checkInDate,
    checkOutDate,
    name,
    email,
    phoneNumber,
    totalPrice,
    dateIssued,
  } = booking;

  return (
    <Box
      boxShadow="xl"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="gray.300"
      p="5"
      mb="5"
    >
      <SimpleGrid columns={3} spacing="5">
        <Box flex="1">
          <Stack direction="row" mb="3">
            <Text color="gray.500" fontSize="2xl">
              Booked at
            </Text>
            <Center>
              <Text color="brand.100" fontSize="1xl">
                {moment(dateIssued * 1000).format("DD/MM/YYYY hh:mm:ss A")}
              </Text>
            </Center>
          </Stack>

          <SimpleGrid columns={2} spacing={16}>
            <Box>
              <Text color="#152C5B;" fontSize="2xl">
                Date
              </Text>
              <Text color="gray.500" fontSize="2l">
                {`${moment(checkInDate).format("DD MMM YYYY")} - ${moment(
                  checkOutDate
                ).format("DD MMM YYYY")}`}
              </Text>
            </Box>
            <Box>
              <Text color="#152C5B;" fontSize="2xl">
                Room
              </Text>
              <Text color="gray.500" fontSize="2l">
                {`${rooms} room(s)`}
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Stack flex="1">
          <Flex>
            <SimpleGrid>
              <Stack direction="row" mb="5">
                <Text color="#152C5B;" fontSize="2xl" fontWeight="semibold">
                  Guest Info
                </Text>
              </Stack>
              <Box>
                <Text color="brand.100" fontSize="lg">
                  <Box as="span" color="gray.500">
                    Nama:
                  </Box>{" "}
                  {name}
                </Text>
                <Text color="brand.100" fontSize="lg">
                  <Box as="span" color="gray.500">
                    Email:
                  </Box>{" "}
                  {email}
                </Text>
                <Text color="brand.100" fontSize="lg">
                  <Box as="span" color="gray.500">
                    No.Telp:
                  </Box>{" "}
                  {phoneNumber}
                </Text>
              </Box>
            </SimpleGrid>
          </Flex>
        </Stack>
        <Box flex="1">
          <Text color="#152C5B;" fontSize="2xl">
            Total <b>{formatRupiah(totalPrice)}</b>
          </Text>
          <Stack direction="row" spacing={3} mb="5">
            <Text color="#152C5B;" fontSize="2xl">
              Payment
            </Text>
            <Text color="#3252DF;" fontSize="2xl">
              <b>Successful</b>
            </Text>
          </Stack>
          <Link href={`/invoice/${id}`}>
            <a>
              <Button>View Invoice</Button>
            </a>
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
