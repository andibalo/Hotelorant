import { Box, Input, Heading, Stack, Select } from "@chakra-ui/react";
import { Button } from "../atoms/button";

export const SearchBox = ({
  filters,
  isLoading,
  handleChangeFilters,
  resetFilter,
  handleSearchSubmit,
  searchKey,
  setSearchKey,
}) => {
  const { location, rating, price } = filters;

  return (
    <Box
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="xl"
      p="5"
      boxShadow="lg"
      bg="white"
    >
      <Heading textAlign="center" mb="3" color="brand.200">
        Search Hotel
      </Heading>
      <Stack direction="row" spacing="5" mb="10">
        <Input
          type="text"
          placeholder="Search hotel name"
          focusBorderColor="brand.100"
          size="lg"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <Box>
          <Button size="lg" onClick={handleSearchSubmit}>
            Search
          </Button>
        </Box>
      </Stack>
      <Heading fontSize="lg" color="brand.200" mb="3">
        Filters
      </Heading>
      <Stack direction="row" spacing="3" align="center">
        <Select
          placeholder="Location"
          focusBorderColor="brand.100"
          borderColor="brand.100"
          name="location"
          onChange={(e) => handleChangeFilters(e)}
          value={location}
        >
          <option value="jakarta">Jakarta</option>
          <option value="tangerang">Tangerang</option>
          <option value="depok">Depok</option>
          <option value="bekasi">Bekasi</option>
          <option value="bogor">Bogor</option>
        </Select>
        <Select
          name="rating"
          placeholder="Rating"
          focusBorderColor="brand.100"
          borderColor="brand.100"
          onChange={(e) => handleChangeFilters(e)}
          value={rating}
        >
          <option value="desc">Highest Rated</option>
          <option value="asc">Lowest Rated</option>
        </Select>
        <Select
          name="price"
          focusBorderColor="brand.100"
          borderColor="brand.100"
          value={price}
          onChange={(e) => handleChangeFilters(e)}
        >
          <option value="desc">Highest Price</option>
          <option value="asc">Lowest Price</option>
        </Select>
        <Box flex="0.4">
          <Button
            variant="ghost"
            colorScheme="red"
            px="5"
            onClick={resetFilter}
          >
            Reset
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
