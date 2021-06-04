import { Box, Heading, Text, Flex, Stack, SimpleGrid } from "@chakra-ui/react";
import { SectionWrapper } from "../atoms/section-wrapper";

export const HighlyRated = () => {
  return (
    <SectionWrapper>
      <Heading fontSize="2xl" color="brand.200" mb="3">
        Highly Rated
      </Heading>
      <Stack direction="row" spacing="5" h="md">
        <Flex flex="0.6">
          <Box bg="red" w="full">
            test
          </Box>
        </Flex>
        <Box flex="1">
          <SimpleGrid columns={2} spacing={5} h="full">
            <Box bg="tomato" h="full"></Box>
            <Box bg="tomato" h="full"></Box>
            <Box bg="tomato" h="full"></Box>
            <Box bg="tomato" h="full"></Box>
          </SimpleGrid>
        </Box>
      </Stack>
    </SectionWrapper>
  );
};
