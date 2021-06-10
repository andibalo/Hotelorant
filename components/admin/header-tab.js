import { Flex, Stack, Heading } from "@chakra-ui/react";
import Link from "next/link";

export const HeaderTab = ({ route }) => {
  return (
    <Flex justifyContent="center">
      <Stack direction="row" spacing="20">
        {route === "home" ? (
          <Link href="/admin">
            <Heading
              fontSize="2xl"
              color="brand.200"
              fontWeight="semibold"
              borderBottomWidth="3px"
              borderColor="brand.100"
              cursor="pointer"
            >
              Hotels
            </Heading>
          </Link>
        ) : (
          <Link href="/admin">
            <Heading
              fontSize="2xl"
              color="brand.200"
              fontWeight="semibold"
              cursor="pointer"
            >
              Hotels
            </Heading>
          </Link>
        )}
        {route === "booking-list" ? (
          <Link href="/admin/booking-list">
            <Heading
              fontSize="2xl"
              color="brand.200"
              fontWeight="semibold"
              borderBottomWidth="3px"
              borderColor="brand.100"
              cursor="pointer"
            >
              Booking List
            </Heading>
          </Link>
        ) : (
          <Link href="/admin/booking-list">
            <Heading
              fontSize="2xl"
              color="brand.200"
              fontWeight="semibold"
              cursor="pointer"
            >
              Booking List
            </Heading>
          </Link>
        )}
      </Stack>
    </Flex>
  );
};
