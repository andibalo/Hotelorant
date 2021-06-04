import {
  Box,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

export const Brand = () => {
  return (
    <Link href="/">
      <Text
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
        fontFamily={"heading"}
        color={useColorModeValue("gray.800", "white")}
        fontSize="lg"
        cursor="pointer"
      >
        Hote
        <Box as="span" color="brand.100" fontWeight="semibold">
          lorant.
        </Box>
      </Text>
    </Link>
  );
};
