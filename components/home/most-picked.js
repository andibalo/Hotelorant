import { Heading, SimpleGrid } from "@chakra-ui/react";
import { SectionWrapper } from "../atoms/section-wrapper";
import { HotelCard } from "../molecules/hotel-card";

export const MostPicked = () => {
  return (
    <SectionWrapper>
      <Heading fontSize="2xl" color="brand.200" mb="5">
        Most Booked
      </Heading>
      <SimpleGrid columns="4" spacing="5">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </SimpleGrid>
    </SectionWrapper>
  );
};
