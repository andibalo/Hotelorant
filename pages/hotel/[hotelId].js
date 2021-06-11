import { Navbar } from "../../components/navbar";
import {
  Box,
  Heading,
  Stack,
  SimpleGrid,
  Text,
  Button as ChakraButton,
  Center,
  Image as ChakraImage,
  Flex,
} from "@chakra-ui/react";
import { Container } from "../../components/atoms/container";
import { Button } from "../../components/atoms/button";
import { HotelCard } from "../../components/molecules/hotel-card";
import { Footer } from "../../components/footer";
import Link from "next/link";
import db from "../../utils/db/index";
import Image from "next/image";
import { formatRupiah } from "../../utils/functions";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function HotelDetail(props) {
  console.log(props);

  const {
    id,
    name,
    description,
    price,
    location,
    address,
    images,
    rooms,
    hasAc,
    hasTv,
    hasWifi,
    hasFridge,
    rating,
  } = props.hotel;

  return (
    <div>
      <Navbar />
      <Container>
        <Box>
          <Text>
            <Box as="span" color="gray.500">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Box>{" "}
            &gt;{" "}
            <Box as="span" color="brand.100" textTransform="capitalize">
              {name}
            </Box>
          </Text>
        </Box>
        <Center mb="5">
          <Box textAlign="center">
            <Heading color="brand.200" textTransform="capitalize">
              {name}
            </Heading>
            <Text color="gray.500" textTransform="capitalize">
              {location}
            </Text>
          </Box>
        </Center>
        <Box h="lg" mb="10">
          <Box
            h="full"
            w="full"
            position="relative"
            borderRadius="3xl"
            overflow="hidden"
            mb="3"
          >
            <Carousel responsive={responsive} showDots={true} infinite={true}>
              {images && images.length > 0 ? (
                images.map((imageUrl) => (
                  <Box h="full" position="relative" cursor="pointer">
                    <ChakraImage
                      src={imageUrl}
                      w="full"
                      h="full"
                      objectFit="cover"
                      pointerEvents="none"
                    />
                  </Box>
                ))
              ) : (
                <Box h="full" position="relative">
                  <Image
                    src="/placeholder.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              )}
            </Carousel>
          </Box>
        </Box>

        <SimpleGrid columns={2} spacing="5" mb="20">
          <Box flex="1">
            <Box mb="5">
              <Heading color="brand.100" mb="3">
                {`${formatRupiah(price)} / Night`}
              </Heading>
              <Heading
                color="brand.200"
                fontSize="xl"
                textTransform="capitalize"
              >
                {name}
              </Heading>
              <Text color="gray.500">{address}</Text>
              <Text color="yellow.500">
                {rating && rating.length > 0
                  ? "Hotel bintang 5"
                  : "No rating yet"}
              </Text>
            </Box>
            <Box>
              <Text mb="3">{description}</Text>
            </Box>
          </Box>
          <Box flex="1">
            <Box
              borderRadius="xl"
              borderWidth="1px"
              borderColor="gray.300"
              h="full"
              p="5"
            >
              <Heading textAlign="center" color="brand.200" fontSize="lg">
                Facilities
              </Heading>
              <Stack
                direction="row"
                spacing="10"
                mt="8"
                mb="10"
                justifyContent="center"
              >
                <Box textAlign="center">
                  <Image src="/ic_bedroom.png" width="50px" height="50px" />
                  <Text color="gray.500">{`${rooms} rooms`}</Text>
                </Box>
                {hasWifi && (
                  <Box textAlign="center">
                    <Image src="/ic_wifi.png" width="50px" height="50px" />
                    <Text color="gray.500">Wifi</Text>
                  </Box>
                )}
                {hasTv && (
                  <Box textAlign="center">
                    <Image src="/ic_tv.png" width="50px" height="50px" />
                    <Text color="gray.500">TV</Text>
                  </Box>
                )}
                {hasFridge && (
                  <Box textAlign="center">
                    <Image src="/ic_kulkas.png" width="50px" height="50px" />
                    <Text color="gray.500">Refrigerator</Text>
                  </Box>
                )}
                {hasAc && (
                  <Box textAlign="center">
                    <Image src="/ic_ac.png" width="50px" height="50px" />
                    <Text color="gray.500">AC</Text>
                  </Box>
                )}
              </Stack>
              <Flex justifyContent="center">
                <Link href={`/booking/${id}`}>
                  <a>
                    <Button>Book Now</Button>
                  </a>
                </Link>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
        <Box>
          <Heading color="brand.200" fontSize="xl" mb="3">
            Around The Hotel
          </Heading>
          <SimpleGrid columns="4" spacing="5" h="xs">
            {props.nearbyHotels && props.nearbyHotels.length > 0 ? (
              props.nearbyHotels.map((hotel) => <HotelCard hotel={hotel} />)
            ) : (
              <Heading color="gray.500" fontSize="md">
                No Hotels Found
              </Heading>
            )}
          </SimpleGrid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const nearbyHotels = [];
  const hotelRef = db.collection("hotels").doc(context.query.hotelId);
  const doc = await hotelRef.get();
  let hotelId = doc.id;

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

  const hotelsRef = db.collection("hotels");

  const snapshot = await hotelsRef
    .where("location", "==", doc.data().location)
    .get();

  snapshot.forEach((doc) => {
    if (doc.id !== hotelId) {
      nearbyHotels.push({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp._seconds,
      });
    }
  });

  return {
    props: {
      hotel,
      nearbyHotels,
    },
  };
}
