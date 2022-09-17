// import Vape from "../../assets/vapes.png";
// import Image from "next/image";
import NextImage from "next/image";
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  useColorMode,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
export default function VapeCard({ vape }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="app">
      {/* <Button onClick={toggleColorMode} mt={5}>
         Toggle { colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
      <Box
        w="300px"
        rounded="20px"
        overflow="hidden"
        bg={colorMode === "dark" ? "gray .700" : "gray.200"}
        mt={10}
      >
        <Image src={vape.thmubnail} alt={vape.name} boxSize="200px"></Image>
        <Box p={5}>
          <Stack align="center">
            <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
              {vape.name}
            </Badge>
          </Stack>
          <Stack align="center">
            <Text as="h2" fontWeight="normal" my={2}>
              Top Seller $$$
            </Text>
            <Text fontWeight="light">
              A 6000 puff rechargeable Disposible that we have in 30 different
              flavors
            </Text>
          </Stack>
          <Flex>
            <Spacer />
            <Button variant="solid" colorScheme="green" size="sm">
              Learn More
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

{
  /* //     <div className="vape-product">
    //     Test Vape
    // </div>
} */
}
