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

export default function EditProfile(props) {
  console.log(props);
  const router = useRouter();
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: props.user.name,
    phoneNumber: props.user.phoneNumber,
    dob: props.user.dob,
  });

  const { name, phoneNumber, dob } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditProfile = async () => {
    try {
      const res = await axios.put(`/api/user/${props.session.user.id}`, {
        ...formData,
      });

      setFormData({
        name: "",
        phoneNumber: "",
        dob: "",
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
              <Input type="file" accept="image/*" />
            </Flex>
          </Box>
          <Box flex="1">
            <FormControl mb="3">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                isDisabled
                isReadOnly
                value={props.user.email}
              />
            </FormControl>
            <FormControl mb="3">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb="3">
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb="5">
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                name="dob"
                value={dob}
                onChange={handleChange}
              />
            </FormControl>
            <Button onClick={handleEditProfile}>Update Profile</Button>
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
    name: doc.data().name,
    email: doc.data().email,
    image: doc.data().image,
    phoneNumber: doc.data().phoneNumber,
    dob: doc.data().dob,
  };

  return {
    props: {
      session,
      user,
    },
  };
}
