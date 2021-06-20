import { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container } from "../../components/atoms/container";
import { Button } from "../../components/atoms/button";
import Link from "next/link";
import { getSession } from "next-auth/client";
import db from "../../utils/db/index";
import axios from "axios";
import { useRouter } from "next/router";

export default function ChangePassword(props) {
  const router = useRouter();
  const toast = useToast();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const { currentPassword, newPassword, confirmNewPassword } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdatePassword = async () => {
    try {
      const res = await axios.put(
        `/api/user/password/${props.session.user.id}`,
        {
          currentPassword,
          newPassword,
        }
      );

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });

      toast({
        title: "Profile Updated",
        description: "Your profile has been successfuly updated.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      router.replace("/");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Link href="/">
          <ChakraButton
            as="a"
            leftIcon={<ArrowBackIcon />}
            variant="outline"
            mb="8"
            cursor="pointer"
          >
            Back
          </ChakraButton>
        </Link>

        <Heading color="brand.200" mb="5" fontSize="4xl">
          Change Password
        </Heading>
        <Stack direction="row">
          <Box flex="1">
            <FormControl mb="3">
              <FormLabel>Current Password</FormLabel>
              <Input
                type="password"
                name="currentPassword"
                value={currentPassword}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb="3">
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb="5">
              <FormLabel>Confirm New Password</FormLabel>
              <Input
                type="password"
                name="confirmNewPassword"
                value={confirmNewPassword}
                onChange={handleChange}
              />
            </FormControl>
            <Button onClick={handleUpdatePassword}>Update Password</Button>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  console.log(session);
  const userRef = db.collection("users").doc(session.user.id);

  const doc = await userRef.get();

  console.log(doc.data());

  const user = {
    ...doc.data(),
    timestamp: doc.data().timestamp._seconds,
  };

  return {
    props: {
      session,
      user,
    },
  };
}
