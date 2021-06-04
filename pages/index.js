import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { Container } from "../components/atoms/container";
import { SearchBox } from "../components/molecules/search-box";
import { HighlyRated } from "../components/home/highly-rated";
import { MostPicked } from "../components/home/most-picked";
import { MostAffordable } from "../components/home/most-affordable";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <SearchBox />
        <Box mb="10"></Box>
        <HighlyRated />
        <MostPicked />
        <MostAffordable />
      </Container>
      <Footer />
    </div>
  );
}
