import {
  Flex,
  Box,
  Input,
  Heading,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { Button } from "../components/atoms/button";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <Flex minH="100vh" flexDirection="column">
      <Navbar />
      <Flex flex="1">
        <Box flex="1">
          <Box h="full" w="full" position="relative" overflow="hidden">
            <Image src="/login.png" layout="fill" objectFit="cover" />
          </Box>
        </Box>
        <Box flex="1">
          <Box p="14">
            <Box mb="10">
              <Heading color="brand.200" fontSize="7xl" mb="3">
                Login
              </Heading>
              <Text color="brand.200">
                Don't have an account?{" "}
                <Box as="span" color="brand.100">
                  <Link href="/register">Create an account</Link>
                </Box>
              </Text>
            </Box>
            <Box>
              <FormControl mb="3">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl mb="3">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button>Login</Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
