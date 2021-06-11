import { useState } from "react";
import { Navbar } from "../../components/navbar";
import {
  Box,
  Flex,
  Heading,
  Button as ChakraButton,
  Center,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Container } from "../../components/atoms/container";
import { Button } from "../../components/atoms/button";
import { getSession } from "next-auth/client";
import db from "../../utils/db/index";
import { BookedRow } from "../../components/molecules/booked-row";

export default function BookingList(props) {
  console.log(props);
  const [bookings, setBookings] = useState(props.bookings);

  return (
    <div>
      <Navbar />
      <Container>
        <Heading color="brand.200" mb="5" fontSize="2xl" align="left">
          Booked Hotel
        </Heading>
        <Flex direction="column">
          <Box>
            {bookings && bookings.length > 0 ? (
              bookings.map((booking) => (
                <BookedRow key={booking.id} booking={booking} />
              ))
            ) : (
              <Center>
                <Heading fontSize="xl">No Bookings Yet</Heading>
              </Center>
            )}
          </Box>
        </Flex>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  const bookings = [];
  const bookingsRef = db.collection("bookings");
  const snapshot = await bookingsRef
    .where("userId", "==", session.user.id)
    .get();

  snapshot.forEach((doc) => {
    bookings.push({
      ...doc.data(),
      id: doc.id,
      dateIssued: doc.data().dateIssued._seconds,
      timestamp: doc.data().timestamp._seconds,
    });
  });

  const hotelsRef = db.collection("hotels");

  const newBookingsPromises = bookings.map(async (booking) => {
    const hotelDoc = await hotelsRef.doc(booking.hotelId);

    const hotelData = (await hotelDoc.get()).data();

    return {
      ...booking,
      hotel: {
        ...hotelData,
        timestamp: hotelData.timestamp._seconds,
      },
    };
  });

  const newBookings = await Promise.all(newBookingsPromises);

  return {
    props: {
      bookings: newBookings,
    },
  };
}
