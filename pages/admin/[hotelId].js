import { useState } from "react";
import { Navbar } from "../../components/navbar";
import { Container } from "../../components/atoms/container";
import {
  Heading,
  Box,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  CheckboxGroup,
  FormHelperText,
  NumberInputField,
  Input,
  NumberInput,
  Textarea,
  Select,
  Checkbox,
  Button as ChakraButton,
  Stack,
  Flex,
  Image,
  Icon,
} from "@chakra-ui/react";
import { Button } from "../../components/atoms/button";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import axios from "axios";
import { AiOutlineFileImage } from "@react-icons/all-files/ai/AiOutlineFileImage";
import { storage } from "../../utils/firebase/index";
import { useRouter } from "next/router";
import db from "../../utils/db";

const MAX_IMG_UPLOAD = 3;

export default function EditHotel(props) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    images: [],
    name: props.hotel.name,
    description: props.hotel.description,
    rooms: props.hotel.rooms,
    price: props.hotel.price,
    location: props.hotel.location,
    hasTv: props.hotel.hasTv,
    hasAc: props.hotel.hasAc,
    hasWifi: props.hotel.hasWifi,
    hasFridge: props.hotel.hasFridge,
  });

  const [facilitiesCheckbox, setFacilitiesCheckbox] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [uploadImages, setUploadImages] = useState([]);

  const {
    images,
    name,
    description,
    rooms,
    price,
    location,
    hasTv,
    hasAc,
    hasWifi,
    hasFridge,
  } = formData;

  const setCheckboxDefaultValue = () => {
    const defaultValue = [];

    if (hasFridge) {
      defaultValue.push("refrigerator");
    }

    if (hasTv) {
      defaultValue.push("tv");
    }

    if (hasAc) {
      defaultValue.push("ac");
    }

    if (hasWifi) {
      defaultValue.push("wifi");
    }

    return defaultValue;
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/hotel", {
        ...formData,
        hasTv: facilitiesCheckbox.includes("tv") ? true : false,
        hasWifi: facilitiesCheckbox.includes("wifi") ? true : false,
        hasAc: facilitiesCheckbox.includes("ac") ? true : false,
        hasFridge: facilitiesCheckbox.includes("refrigerator") ? true : false,
      });

      setFormData({
        images: [],
        name: "",
        description: "",
        rooms: 1,
        price: 0,
        location: "jakarta",
        hasTv: false,
        hasAc: false,
        hasWifi: false,
        hasFridge: false,
      });

      setPreviewImages([]);

      router.replace("/admin");
    } catch (error) {
      console.log(error);
    }
  };

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
            images: [...images, downloadURL],
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

  const renderImageStrip = () => {
    let imageStrips = [];

    if (previewImages.length > 0) {
      previewImages.forEach((img, i) => {
        imageStrips.push(
          <Image
            boxSize="150px"
            objectFit="cover"
            borderRadius="xl"
            src={img}
            alt={"image-" + i}
            key={i}
          />
        );
      });
    }

    if (previewImages.length < MAX_IMG_UPLOAD) {
      imageStrips.push(
        <Flex
          key="placeholderimg"
          alignItems="center"
          justifyContent="center"
          bg="gray.200"
          width="150px"
          height="150px"
          borderRadius="xl"
        >
          <Icon as={AiOutlineFileImage} boxSize="8" />
        </Flex>
      );
    }

    return imageStrips;
  };

  const handleCheckboxChange = (value) => {
    setFacilitiesCheckbox([...facilitiesCheckbox, ...value]);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Link href="/admin">
          <ChakraButton
            cursor="pointer"
            as="a"
            variant="ghost"
            leftIcon={<ArrowLeftIcon />}
            mb="5"
          >
            Back
          </ChakraButton>
        </Link>
        <Heading color="brand.200" fontSize="5xl" mb="5">
          Edit Hotel
        </Heading>
        <Box>
          <Stack direction="row" spacing="5">
            {renderImageStrip()}
          </Stack>

          <FormControl mb="3" mt="3">
            <FormLabel>Upload Product Image</FormLabel>
            <Input
              type="file"
              onChange={(e) => handleChooseImage(e)}
              isDisabled={previewImages.length === MAX_IMG_UPLOAD}
            />
            <FormHelperText>Maximum of 3 images</FormHelperText>
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
            <FormLabel>Rooms</FormLabel>
            <NumberInput defaultValue={rooms} max={99} min={1}>
              <NumberInputField
                name="rooms"
                value={rooms}
                onChange={handleChange}
              />
            </NumberInput>
            <FormHelperText>Max: 99</FormHelperText>
          </FormControl>
          <FormControl mb="3">
            <FormLabel>Price</FormLabel>
            <NumberInput defaultValue={price} min={0}>
              <NumberInputField
                name="price"
                value={price}
                onChange={handleChange}
              />
            </NumberInput>
          </FormControl>
          <FormControl mb="3">
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="3">
            <FormLabel>Location</FormLabel>
            <Select name="location" onChange={handleChange} value={location}>
              <option value="jakarta">Jakarta</option>
              <option value="tangerang">Tangerang</option>
              <option value="bekasi">Bekasi</option>
              <option value="bogor">Bogor</option>
              <option value="depok">Depok</option>
            </Select>
          </FormControl>
          <FormControl mb="5">
            <FormLabel>Facilities</FormLabel>
            <CheckboxGroup
              onChange={(value) => handleCheckboxChange(value)}
              defaultValue={setCheckboxDefaultValue()}
            >
              <VStack alignItems="start">
                <Checkbox value="refrigerator">Refrigerator</Checkbox>
                <Checkbox value="ac">AC</Checkbox>
                <Checkbox value="wifi">Wifi</Checkbox>
                <Checkbox value="tv">TV</Checkbox>
              </VStack>
            </CheckboxGroup>
          </FormControl>
          <Button onClick={handleSubmit}>Edit</Button>
        </Box>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const session = await getSession({ req: context.req });

  // if (session && !session.user.isAdmin) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: true,
  //     },
  //   };
  // }

  const hotelRef = db.collection("hotels").doc(context.query.hotelId);
  const doc = await hotelRef.get();

  if (!doc.exists) {
    return {
      notFound: true,
    };
  }

  const hotel = {
    id: doc.id,
    name: doc.data().name,
    description: doc.data().description,
    price: doc.data().price,
    rooms: doc.data().rooms,
    location: doc.data().location,
    images: doc.data().images,
    hasTv: doc.data().hasTv,
    hasWifi: doc.data().hasWifi,
    hasFridge: doc.data().hasFridge,
    hasAc: doc.data().hasAc,
  };

  return {
    props: {
      hotel,
    },
  };
}
