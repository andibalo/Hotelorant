import { useState, useEffect } from "react";
import { Navbar } from "../../components/navbar";
import {
  Center,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
  SimpleGrid,
  Text,
  Image,
  Box,
  Flex,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { Container } from "../../components/atoms/container";
import { Button } from "../../components/atoms/button";
import db from "../../utils/db/index";
import { formatRupiah } from "../../utils/functions";
import moment from "moment";
import axios from "axios";
import { useRouter } from "next/router";

export default function Booking(props) {
  console.log(props);

  const router = useRouter();
  const { name, price, location, images, id } = props.hotel;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    rooms: 1,
    checkInDate: moment(new Date()).format("YYYY-MM-DD"),
    checkOutDate: moment(new Date()).add(1, "days").format("YYYY-MM-DD"),
    nights: 1,
  });

  const { email, phoneNumber, rooms, checkInDate, checkOutDate, nights } =
    formData;

  useEffect(() => {
    if (checkOutDate !== "") {
      const endDate = moment(new Date(checkOutDate));
      const daysDiff = endDate.diff(moment(new Date(checkInDate)), "days");
      console.log(endDate.diff(moment(new Date(checkInDate)), "days"));
      setFormData({
        ...formData,
        nights: daysDiff,
      });
    }
  }, [checkInDate, checkOutDate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/booking", {
        ...formData,
        totalPrice: price * rooms * nights,
        hotelId: id,
      });
      // console.log(res);
      router.replace(`/invoice/${res.data.booking.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Center>
          <Box
            borderRadius="50%"
            backgroundColor="gray.100"
            width="16"
            height="16"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Heading color="gray.500">1</Heading>
          </Box>
          <Box backgroundColor="gray.100" width="7" height="1"></Box>
          <Box
            borderRadius="50%"
            backgroundColor="gray.100"
            width="16"
            height="16"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Heading color="gray.500">2</Heading>
          </Box>
          <Box backgroundColor="gray.100" width="7" height="1"></Box>
          <Box
            borderRadius="50%"
            backgroundColor="gray.100"
            width="16"
            height="16"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Heading color="gray.500">3</Heading>
          </Box>
        </Center>

        <Heading mt="7" color="brand.200" mb="5" fontSize="4xl" align="center">
          Booking Information
        </Heading>
        <Text color="grey.500" isTruncated align="center">
          Please fill up the blank fields
        </Text>
        <Flex direction="column">
          <Stack direction="row" spacing="5" mt="30">
            <Box flex="1">
              <Box
                h="250px"
                w="full"
                position="left"
                overflow="hidden"
                borderRadius="xl"
                mb="3"
              >
                <Image src={images[0]} w="full" h="full" objectFit="cover" />
              </Box>
              <SimpleGrid columns={2}>
                <Box>
                  <Text
                    color="brand.200"
                    fontSize="2xl"
                    textTransform="capitalize"
                  >
                    {name}
                  </Text>
                  <Text
                    color="gray.500"
                    fontSize="lg"
                    textTransform="capitalize"
                  >
                    {location}
                  </Text>
                </Box>
                <Box>
                  <Text color="brand.200" fontSize="xl">
                    {`${formatRupiah(price)} / Night`}
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Divider orientation="vertical" m="7" height="355px" />

            <Box flex="1" mt="10" flex="1">
              <FormControl mb="3" align="center">
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb="3">
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
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
              <Box mt="120px" align="center">
                <Button onClick={handleSubmit}>Continue to Book</Button>
              </Box>
              <Box mt="20px" align="center">
                <Button isDisabled>Cancel</Button>
              </Box>
            </Box>

            <Divider orientation="vertical" m="7" height="355px" />

            <Box flex="1" mt="10" flex="1">
              <FormControl mb="3">
                <FormLabel>How many rooms are you booking?</FormLabel>
                <NumberInput
                  step={1}
                  defaultValue={1}
                  min={1}
                  max={31}
                  value={rooms}
                  onChange={(value) =>
                    setFormData({ ...formData, rooms: value })
                  }
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl mb="3">
                <FormLabel>Check In Date</FormLabel>
                <Input
                  type="date"
                  name="checkInDate"
                  value={checkInDate}
                  onChange={handleDateChange}
                />
              </FormControl>
              <FormControl mb="3">
                <FormLabel>Check Out Date</FormLabel>
                <Input
                  min={moment(new Date(checkInDate), "YYYY-MM-DD")
                    .add(1, "days")
                    .format("YYYY-MM-DD")}
                  type="date"
                  name="checkOutDate"
                  value={checkOutDate}
                  onChange={handleDateChange}
                />
              </FormControl>
              <FormControl mb="3">
                <FormLabel>Nights</FormLabel>
                <Text>{formData.nights}</Text>
              </FormControl>
              <FormControl mb="3">
                <FormLabel>Total price</FormLabel>
                <Text fontSize="5xl" color="#1ABC9C">
                  {formatRupiah(price * rooms * nights)}
                </Text>
              </FormControl>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const hotelRef = db.collection("hotels").doc(context.query.hotelId);
  const doc = await hotelRef.get();

  if (!doc.exists) {
    return {
      notFound: true,
    };
  }

  const hotel = {
    ...doc.data(),
    id: doc.id,
    timestamp: doc.data().timestamp._seconds,
  };

  return {
    props: {
      hotel,
    },
  };
}
