import { Container as ChakraContainer } from "@chakra-ui/react";

export const Container = ({ children, noPads }) => {
  return (
    <ChakraContainer maxW="container.xl" py={noPads ? "0" : "20"}>
      {children}
    </ChakraContainer>
  );
};
