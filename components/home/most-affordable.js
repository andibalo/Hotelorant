import { Heading, SimpleGrid } from "@chakra-ui/react";
import { SectionWrapper } from "../atoms/section-wrapper";
import { HotelCard } from "../molecules/hotel-card";

export const MostAffordable = ({ hotels }) => {
  return (
    <SectionWrapper>
      <Heading fontSize="2xl" color="brand.200" mb="5">
        Affordable Price
      </Heading>
      <SimpleGrid columns="4" spacing="5" h="xs">
        {hotels &&
          hotels.length > 0 &&
          hotels.map((hotel) => <HotelCard hotel={hotel} />)}
      </SimpleGrid>
    </SectionWrapper>
  );
};
