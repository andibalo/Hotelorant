import { useState, useEffect } from "react";
import { Box, Center, Flex, Heading, Spinner } from "@chakra-ui/react";
import { Navbar } from "../../components/navbar";
import { Container } from "../../components/atoms/container";
import { SearchBox } from "../../components/molecules/search-box";
import { Footer } from "../../components/footer";
import db from "../../utils/db/index";
import { SearchResultRow } from "../../components/molecules/search-result-row";
import axios from "axios";

export default function Hotels(props) {
  const [hotels, setHotels] = useState(props.hotels);
  const [isLoading, setIsLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    rating: "",
    price: "desc",
  });

  const { location, rating, price } = filters;

  const fetchHotels = async () => {
    setIsLoading(true);

    let url = "/api/hotel";

    url = url.concat(searchKey !== "" ? `/${searchKey}` : "/null");
    url = url.concat(location !== "" ? `/${location}` : "/null");
    url = url.concat(rating !== "" ? `/${rating}` : "/null");
    url = url.concat(price !== "" ? `/${price}` : "/null");

    console.log(url);
    try {
      const res = await axios.get(url);

      console.log(res);

      setHotels(res.data.hotels);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, [filters]);

  const resetFilter = () => {
    setFilters({
      location: "",
      rating: "",
      price: "desc",
    });
  };

  const handleSearchSubmit = async () => {
    resetFilter();
    setIsLoading(true);

    try {
      let url = `/api/hotel/${searchKey}/null/null/null`;

      const res = await axios.get(url);

      console.log(res);

      setHotels(res.data.hotels);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Navbar />
      <Container>
        <SearchBox
          filters={filters}
          isLoading={isLoading}
          handleChangeFilters={handleChangeFilters}
          resetFilter={resetFilter}
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          handleSearchSubmit={handleSearchSubmit}
        />
        <Box mb="20"></Box>
        {isLoading && (
          <Flex justifyContent="center" minH="md">
            <Spinner size="xl" color="brand.100" />
          </Flex>
        )}
        {!isLoading &&
          hotels &&
          hotels.length > 0 &&
          hotels.map((hotel) => (
            <SearchResultRow key={hotel.id} hotel={hotel} />
          ))}

        {!isLoading && hotels && hotels.length <= 0 && (
          <Center minH="2xs">
            <Heading fontSize="xl">No Hotels Found</Heading>
          </Center>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const hotels = [];

  const hotelsRef = db.collection("hotels");

  const snapshot = await hotelsRef.limit(10).get();

  snapshot.forEach((doc) => {
    hotels.push({
      ...doc.data(),
      id: doc.id,
      timestamp: doc.data().timestamp._seconds,
    });
  });

  return {
    props: {
      hotels,
    },
  };
}
