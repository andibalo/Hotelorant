import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { Container } from "../components/atoms/container";
import { SearchBox } from "../components/molecules/search-box";
import { HighlyRated } from "../components/home/highly-rated";
import { MostPicked } from "../components/home/most-picked";
import { MostAffordable } from "../components/home/most-affordable";
import { Footer } from "../components/footer";
import db from "../utils/db/index";

export default function Home(props) {
  const { affordableHotels, mostBookedHotels, highlyRatedHotels } = props;

  return (
    <div>
      <Navbar />
      <Container>
        <SearchBox />
        <Box mb="10"></Box>
        <HighlyRated hotels={affordableHotels} />
        <MostPicked hotels={mostBookedHotels} />
        <MostAffordable hotels={affordableHotels} />
      </Container>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const affordableHotels = [];
  const highlyRatedHotels = [];
  const mostBookedHotels = [];

  const hotelsRef = db.collection("hotels");

  const affordableSnapshot = await hotelsRef
    .orderBy("price", "asc")
    .limit(4)
    .get();

  const mostBookedSnapshot = await hotelsRef
    .orderBy("bookedCount", "desc")
    .limit(4)
    .get();

  affordableSnapshot.forEach((doc) => {
    affordableHotels.push({
      ...doc.data(),
      id: doc.id,
      timestamp: doc.data().timestamp._seconds,
    });
  });

  mostBookedSnapshot.forEach((doc) => {
    mostBookedHotels.push({
      ...doc.data(),
      id: doc.id,
      timestamp: doc.data().timestamp._seconds,
    });
  });

  return {
    props: {
      affordableHotels,
      mostBookedHotels,
      highlyRatedHotels,
    },
  };
}
