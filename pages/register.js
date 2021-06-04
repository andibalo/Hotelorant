import {
  Flex,
  Box,
  Input,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Avatar,
  Stack,
} from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { Button } from "../components/atoms/button";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <Flex minH="100vh" flexDirection="column">
      <Navbar />
      <Flex flex="1">
        <Box flex="1">
          <Box h="full" w="full" position="relative" overflow="hidden">
            <Image src="/register.png" layout="fill" objectFit="cover" />
          </Box>
        </Box>
        <Box flex="1">
          <Box p="14">
            <Box mb="10">
              <Heading color="brand.200" fontSize="7xl" mb="3">
                Register
              </Heading>
              <Text color="brand.200">
                Already have an account?{" "}
                <Box as="span" color="brand.300">
                  <Link href="/login">Log into your account</Link>
                </Box>
                , it takes less then a minute
              </Text>
            </Box>
            <Box>
              <FormControl mb="3">
                <FormLabel>Avatar</FormLabel>
                <Avatar size="xl" mb="3" />
                <Input type="file" />
                <FormHelperText>*optional</FormHelperText>
              </FormControl>

              <Stack direction="row" spacing="5">
                <FormControl mb="3">
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl mb="3">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing="5">
                <FormControl mb="3">
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl mb="3">
                  <FormLabel>Date of birth</FormLabel>
                  <Input type="date" />
                </FormControl>
              </Stack>
              <FormControl mb="3">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl mb="3">
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button>Register</Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Register;
