import { Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Link from "next/link";

export const Fab = () => {
  return (
    <Link href="/admin/add-hotel">
      <Flex
        cursor="pointer"
        bg="brand.100"
        w="50px"
        h="50px"
        borderRadius="50%"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        right="5%"
        bottom="5%"
        boxShadow="xl"
      >
        <AddIcon color="white" />
      </Flex>
    </Link>
  );
};
