import { Stack, Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "../atoms/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <Stack direction="row" spacing="10" minH="80vh">
      <Box flex="1" alignSelf="center">
        <Box mb="5">
          <Heading color="brand.200" fontSize="5xl" mb="3">
            Forget Busy Work, Start Your Vacation
          </Heading>
          <Text color="gray.500" fontSize="xl">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </Text>
        </Box>
        <Button size="lg">Learn More</Button>
      </Box>
      <Box flex="1">
        <Box
          h="full"
          w="full"
          position="relative"
          borderTopStartRadius="100px"
          borderTopEndRadius="xl"
          borderBottomEndRadius="100px"
          borderBottomStartRadius="xl"
          overflow="hidden"
          mb="3"
        >
          <Image src="/hero-img.png" layout="fill" objectFit="cover" />
        </Box>
      </Box>
    </Stack>
  );
};
