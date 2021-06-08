import { Navbar } from "../../components/navbar";
import {
    Avatar,
    Center,
    HStack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Divider,
    SimpleGrid,
    Const,
    Text,
    StarIcon,
    Image,
    Badge,
    Box,
    Flex,
    Heading,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Button as ChakraButton,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container } from "../../components/atoms/container";
import { Button } from "../../components/atoms/button";



export default function booking() {

    return (
        <div>
            <Navbar />

            <Container>

                <Center>
                    <Box borderRadius="50%" backgroundColor="gray.100" width="16" height="16" display="flex" justifyContent="center" alignItems="center">
                        <Heading color="gray.500">1</Heading>
                    </Box>
                    <Box backgroundColor="gray.100" width="7" height="1">
                    </Box>
                    <Box borderRadius="50%" backgroundColor="gray.100" width="16" height="16" display="flex" justifyContent="center" alignItems="center">
                        <Heading color="gray.500">2</Heading>
                    </Box>
                    <Box backgroundColor="gray.100" width="7" height="1"></Box>
                    <Box borderRadius="50%" backgroundColor="gray.100" width="16" height="16" display="flex" justifyContent="center" alignItems="center">
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
                        <SimpleGrid>
                            <Box h="250px" w="350px" position="left" overflow="hidden">
                                <Image src="/register.png" layout="fill" objectFit="cover" />
                            </Box>
                            <SimpleGrid columns={2}>
                                <Box>
                                    <Text color="brand.200" fontSize="2xl">
                                        Ritz Carlton
                                </Text>
                                    <Text color="gray.300" fontSize="2l">
                                        Jakarta, Indonesia
                                </Text>
                                </Box>
                                <Box>
                                    <Text color="brand.200" fontSize="xl">
                                        Rp 2.000.000 / 1 Malam
                                </Text>
                                </Box>
                            </SimpleGrid>
                        </SimpleGrid>



                        <Divider orientation="vertical" m="7" height="355px" />



                        <Box flex="1" mt="10">
                            <FormControl mb="3" align="center">
                                <FormLabel>Full Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Email Address</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <Box mt="120px" align="center">
                                <Button>Continue to Book</Button>
                            </Box>
                            <Box mt="20px" align="center">
                                <Button isDisabled>Cancel</Button>
                            </Box>
                        </Box>



                        <Divider orientation="vertical" m="7" height="355px" />



                        <Box flex="1" mt="10">
                            <FormControl mb="3" align="center">
                                <FormLabel>How long you will stay?</FormLabel>
                                <NumberInput step={1} defaultValue={1} min={1} max={31}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Check In Date</FormLabel>
                                <Input type="date"/>
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Check Out Date</FormLabel>
                                <Input type="date"/>
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Room</FormLabel>
                                <NumberInput step={1} defaultValue={1} min={1} max={31}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Total price</FormLabel>
                                <Text fontSize="5xl" color="#1ABC9C">Rp 2.000.000</Text>
                            </FormControl>
                            
                        </Box>


                    </Stack>
                </Flex>
            </Container>
        </div>
    );
}
