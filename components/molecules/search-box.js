import { Box, Input, Heading, Stack } from "@chakra-ui/react";
import { Button } from "../atoms/button";

export const SearchBox = () => {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="xl"
      p="5"
      boxShadow="lg"
      bg="white"
    >
      <Heading textAlign="center" mb="3" color="brand.200">
        Search Hotel
      </Heading>
      <Stack direction="row" spacing="5">
        <Input
          type="text"
          placeholder="Search hotel name"
          focusBorderColor="brand.100"
          size="lg"
        />
        <Box>
          <Button h="full">Search</Button>
        </Box>
      </Stack>
    </Box>
  );
};
