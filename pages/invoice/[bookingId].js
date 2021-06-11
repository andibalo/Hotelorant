import {
  Flex,
  Center,
  Divider,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { Navbar } from "../../components/navbar";
import { Button } from "../../components/atoms/button";
import { Container } from "../../components/atoms/container";
import db from "../../utils/db/index";
import moment from "moment";
import { formatRupiah } from "../../utils/functions";
import Link from "next/link";
import { getSession } from "next-auth/client";

export default function Invoice(props) {
  console.log(props);
  const { booking, hotel } = props;
  return (
    <Flex minH="100vh" flexDirection="column">
      <Navbar />
      <Container>
        <Center>
          <Box>
            <Heading color="#152C5B;" fontSize="6xl" mr="56">
              INVOICE
            </Heading>
            <Text color="#B0B0B0;">{`Issued at ${moment(
              booking.dateIssued * 1000
            ).format("DD/MM/YYYY hh:mm:ss A")}`}</Text>
            <br></br>
            <Box mb="3">
              <Text color="brand.200" fontSize="3xl" textTransform="capitalize">
                {hotel.name}
              </Text>
              <Text color="gray.500" textTransform="capitalize">
                {hotel.location}
              </Text>
            </Box>

            {/* <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            <StarIcon color="yellow.300" w={6} h={6} mr="1" />
            <WrapItem color="#B0B0B0;" fontSize="2l" mt="2">
              <SunIcon color="red.200" mr="2" />
              Jl. DR. Ide Anak Agung Gde Agung Jl. Mega Kuningan<br></br>
              Barat No.1, Kuningan, Jakarta.
            </WrapItem>
            <WrapItem color="#B0B0B0;" fontSize="2l" mt="2">
              <ChatIcon color="orange.300" mr="2" />
              adeza.hamzah@ritzcarlton.com
            </WrapItem>
            <WrapItem color="#B0B0B0;" fontSize="2l" mt="2">
              <PhoneIcon color="green.300" mr="2" />
              +62 21 2551 8888
            </WrapItem> */}

            <SimpleGrid columns={2}>
              <Box h="10">
                <Text color="#152C5B;" fontSize="2xl">
                  Date
                </Text>
                <Text color="gray.500" fontSize="2l">
                  {`${moment(booking.checkInDate).format(
                    "DD MMM YYYY"
                  )} - ${moment(booking.checkOutDate).format("DD MMM YYYY")}`}
                </Text>
                <Text color="gray.500" fontSize="2l" fontWeight="semibold">
                  {`${booking.nights} night(s)`}
                </Text>
              </Box>
              <Box h="10">
                <Text color="#152C5B;" fontSize="2xl">
                  Room
                </Text>
                <Text color="gray.500" fontSize="2l">
                  {`${booking.rooms} Room(s)`}
                </Text>
              </Box>
            </SimpleGrid>
            <Text color="#152C5B;" fontSize="2xl" mt="16">
              Total: <b>{formatRupiah(booking.totalPrice)}</b>
            </Text>
          </Box>
          <Divider orientation="vertical" m="7" height="575px" />
          <SimpleGrid>
            <Box
              h="296px"
              w="475px"
              position="relative"
              borderRadius="xl"
              overflow="hidden"
            >
              <Image
                src={hotel.images[0]}
                h="full"
                w="full"
                objectFit="cover"
              />
            </Box>
            <Box mt="10">
              <Text color="#152C5B;" fontSize="2xl" mb="3" fontWeight="bold">
                Dibayar oleh
              </Text>
              <Text color="#152C5B;" fontSize="2xl">
                <Box as="span" color="gray.500">
                  Nama:
                </Box>{" "}
                {booking.name}
              </Text>
              <Text color="#152C5B;" fontSize="2xl">
                <Box as="span" color="gray.500">
                  Email:
                </Box>{" "}
                {booking.email}
              </Text>
              <Text color="#152C5B;" fontSize="2xl">
                <Box as="span" color="gray.500">
                  Phone:
                </Box>{" "}
                {booking.phoneNumber}
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
        <Flex justifyContent="center">
          <Link href="/">
            <a>
              <Button>Back to Home</Button>
            </a>
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const bookingRef = db.collection("bookings").doc(context.query.bookingId);
  const doc = await bookingRef.get();

  if (!doc.exists) {
    return {
      notFound: true,
    };
  }

  if (!session.user.isAdmin && doc.data().userId !== session.user.id) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  const booking = {
    ...doc.data(),
    id: doc.id,
    dateIssued: doc.data().dateIssued._seconds,
    timestamp: doc.data().timestamp._seconds,
  };

  const hotelRef = db.collection("hotels").doc(doc.data().hotelId);
  const hotelDoc = await hotelRef.get();

  const hotel = {
    ...hotelDoc.data(),
    id: hotelDoc.id,
    timestamp: doc.data().timestamp._seconds,
  };

  return {
    props: {
      booking,
      hotel,
    },
  };
}
