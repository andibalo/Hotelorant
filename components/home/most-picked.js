import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { SectionWrapper } from "../atoms/section-wrapper";

export const MostPicked = () => {
  return (
    <SectionWrapper>
      <Heading fontSize="2xl" color="brand.200" mb="3">
        Most Booked
      </Heading>
      <SimpleGrid columns="4" spacing="5" h="xs">
        <Box bg="tomato" h="full">
          test
        </Box>
        <Box bg="tomato" h="full">
          test
        </Box>
        <Box bg="tomato" h="full">
          test
        </Box>
        <Box bg="tomato" h="full">
          test
        </Box>
      </SimpleGrid>
    </SectionWrapper>
  );
};
