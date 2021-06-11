import { Box, Heading } from "@chakra-ui/react";
import { HeaderTab } from "../../components/admin/header-tab";
import { Container } from "../../components/atoms/container";
import { Navbar } from "../../components/navbar";
import { getSession } from "next-auth/client";
import db from "../../utils/db/index";
import { BookingListItem } from "../../components/admin/booking-list-item";

export default function BookingList(props) {
  console.log(props);
  const { bookings } = props;
  return (
    <div>
      <Navbar />
      <Container>
        <Heading color="#152C5B;" fontSize="5xl">
          Hello, Admin
        </Heading>
        <HeaderTab route="booking-list" />
        <Box mb="12" />
        {bookings &&
          bookings.length > 0 &&
          bookings.map((booking) => (
            <BookingListItem key={booking.id} booking={booking} />
          ))}
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session && !session.user.isAdmin) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  const bookings = [];
  const bookingsRef = db.collection("bookings");
  const snapshot = await bookingsRef.orderBy("timestamp", "desc").get();

  snapshot.forEach((doc) => {
    bookings.push({
      ...doc.data(),
      id: doc.id,
      dateIssued: doc.data().dateIssued._seconds,
      timestamp: doc.data().timestamp._seconds,
    });
  });

  return {
    props: {
      bookings,
    },
  };
}
