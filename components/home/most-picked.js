import { Heading, SimpleGrid } from "@chakra-ui/react";
import { SectionWrapper } from "../atoms/section-wrapper";
import { HotelCard } from "../molecules/hotel-card";

export const MostPicked = ({ hotels }) => {
  return (
    <SectionWrapper>
      <Heading fontSize="2xl" color="brand.200" mb="5">
        Most Booked
      </Heading>
      <SimpleGrid columns="4" spacing="5">
        {hotels &&
          hotels.length > 0 &&
          hotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)}
      </SimpleGrid>
    </SectionWrapper>
  );
};
