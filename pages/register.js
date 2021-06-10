import { useState } from "react";
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
  Image as ChakraImage,
} from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { Button } from "../components/atoms/button";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { storage } from "../utils/firebase/index";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";

const MAX_IMG_UPLOAD = 1;

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });
  const [previewImages, setPreviewImages] = useState([]);

  const { name, email, phoneNumber, dob, password, confirmPassword } = formData;

  const handleUploadImage = async (uploadImage) => {
    console.log(uploadImage);

    let metadata = {
      contentType: uploadImage.type,
    };

    const uploadTask = storage
      .ref(`images/${uploadImage.name}}`)
      .put(uploadImage, metadata);

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      function (error) {
        // Handle unsuccessful uploads
      },
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log("File available at", downloadURL);

          setFormData({
            ...formData,
            image: downloadURL,
          });
          return Promise.resolve();
        });
      }
    );
  };

  const handleChooseImage = (e) => {
    console.log(e.target.files);

    // setUploadImages([...uploadImages, e.target.files[0]]);

    setPreviewImages([
      ...previewImages,
      URL.createObjectURL(e.target.files[0]),
    ]);

    handleUploadImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/auth/signup", {
        ...formData,
      });

      setFormData({
        image: "",
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        dob: "",
      });

      setPreviewImages([]);

      router.replace("/");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const renderImageStrip = () => {
    let imageStrips = [];

    if (previewImages.length > 0) {
      previewImages.forEach((img, i) => {
        imageStrips.push(<Avatar size="xl" mb="3" src={img} />);
      });
    }

    if (previewImages.length < MAX_IMG_UPLOAD) {
      imageStrips.push(<Avatar size="xl" mb="3" />);
    }

    return imageStrips;
  };

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
                <Box as="span" color="brand.100">
                  <Link href="/login">Log into your account</Link>
                </Box>
              </Text>
            </Box>
            <Box>
              <FormControl mb="3">
                <FormLabel>Avatar</FormLabel>
                {renderImageStrip()}
                <Input
                  type="file"
                  onChange={(e) => handleChooseImage(e)}
                  isDisabled={previewImages.length === MAX_IMG_UPLOAD}
                  accept="image/*"
                />
                <FormHelperText>*optional</FormHelperText>
              </FormControl>
              <Stack direction="row" spacing="5">
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
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing="5">
                <FormControl mb="3">
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl mb="3">
                  <FormLabel>Date of birth</FormLabel>
                  <Input
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={handleChange}
                  />
                </FormControl>
              </Stack>
              <FormControl mb="3">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb="3">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </FormControl>
              <Button onClick={handleSubmit}>Register</Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Register;

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
