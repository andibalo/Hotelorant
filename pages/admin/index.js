import { useState } from "react";
import { Center, Heading, Box } from "@chakra-ui/react";
import { HeaderTab } from "../../components/admin/header-tab";
import { Container } from "../../components/atoms/container";
import { Navbar } from "../../components/navbar";
import { Fab } from "../../components/atoms/fab";
import { HotelRow } from "../../components/admin/hotel-row";
import db from "../../utils/db/index";
import axios from "axios";

export default function AdminHome(props) {
  const [hotels, setHotels] = useState(props.hotels);

  const fetchHotels = async () => {
    try {
      const res = await axios.get("/api/hotel");
      console.log(res);
      setHotels(res.data.hotels);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteHotelRow = async (hotelId) => {
    try {
      const res = await axios.delete(`/api/hotel/${hotelId}`);

      console.log(res);
      await fetchHotels();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Fab />
      <Navbar />
      <Container>
        <Heading color="brand.200" fontSize="5xl">
          Hello, Admin
        </Heading>
        <HeaderTab route="home" />
        <Box mb="16"></Box>
        {hotels && hotels.length > 0 ? (
          hotels.map((hotel) => {
            return (
              <HotelRow
                key={hotel.id}
                hotel={hotel}
                handleDeleteHotelRow={handleDeleteHotelRow}
              />
            );
          })
        ) : (
          <Center mt="10">
            <Heading fontSize="xl" fontWeight="normal">
              No hotels yet, create one by clicking the + icon
            </Heading>
          </Center>
        )}
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const hotels = [];
  const hotelsRef = db.collection("hotels");
  const snapshot = await hotelsRef.orderBy("timestamp", "desc").get();

  snapshot.forEach((doc) => {
    hotels.push({
      id: doc.id,
      name: doc.data().name,
      locaton: doc.data().location,
      description: doc.data().description,
      images: doc.data().images,
    });
  });

  return {
    props: {
      hotels,
    },
  };
}
