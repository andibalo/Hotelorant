import { Navbar } from "../../components/navbar";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container } from "../../components/atoms/container";
import { Button } from "../../components/atoms/button";

export default function EditProfile() {
  return (
    <div>
      <Navbar />
      <Container>
        <ChakraButton leftIcon={<ArrowBackIcon />} variant="outline" mb="8">
          Back
        </ChakraButton>
        <Heading color="brand.200" mb="5" fontSize="4xl">
          Edit Profile
        </Heading>
        <Stack direction="row" spacing="5">
          <Box flex="0.4">
            <Flex
              direction="column"
              alignItems="center"
              border="1px"
              borderColor="gray.300"
              py="5"
            >
              <Avatar src="dwadwwa" size="2xl" mb="3" />
              <ChakraButton>Change Photo</ChakraButton>
            </Flex>
          </Box>
          <Box flex="1">
            <FormControl mb="3">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl mb="3">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl mb="3">
              <FormLabel>Email</FormLabel>
              <Input type="email" isDisabled isReadOnly />
            </FormControl>
            <FormControl mb="3">
              <FormLabel>Phone Number</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl mb="5">
              <FormLabel>Date of Birth</FormLabel>
              <Input type="date" />
            </FormControl>
            <Button>Update Profile</Button>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
