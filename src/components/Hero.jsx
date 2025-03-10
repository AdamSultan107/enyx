import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import dnaImage from "../assets/heroimage.png"; // Ensure image is in the assets folder

const Hero = () => {
  return (
    <Box bg="white" py={20}>
      <Container maxW="7xl">
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap={10}
        >
          {/* Left Side - Text Content */}
          <Stack spacing={6} maxW={{ base: "100%", md: "50%" }} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h1" size="2xl" fontWeight="bold">
              Transforming Lives <br /> Through Gene Therapy
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Pioneering cutting-edge genetic treatments to cure rare and life-threatening diseases.
            </Text>
            <Box w="100px" h="4px" bg="blue.500"></Box>
            <Button colorScheme="blackAlpha" bg="black" size="lg" _hover={{ bg: "gray.700" }}>
              Learn More
            </Button>
          </Stack>

          {/* Right Side - Image */}
          <Box maxW={{ base: "100%", md: "50%" }}>
            <Image src={dnaImage} alt="DNA Structure" borderRadius="md" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;