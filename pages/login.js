import { useRef } from "react";
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
import { signIn, getSession } from "next-auth/client";
import { useRouter } from "next/router";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();

  const handleLogin = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result.error) {
      router.replace("/");
    }
  };

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
                <Input type="email" ref={emailRef} />
              </FormControl>
              <FormControl mb="3">
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={passwordRef} />
              </FormControl>
              <Button onClick={handleLogin}>Login</Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
