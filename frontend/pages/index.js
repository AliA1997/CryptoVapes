import { useEffect, useState } from "react";

import { Box, Flex, Image, Stack, VStack } from "@chakra-ui/react";

import {
  CryptoVapesRouteContainer,
  CryptoVapesResponsveRow,
  CryptoVapesDisplayVapesForSale,
} from "../components/Containers";
import {
  CryptoVapesPaneTitleText,
  CryptoVapesPaneSubtitleText,
  CryptoVapesText,
} from "../components/Typography";
import { vapes } from "../constants/sample-data";

/** LOOK AT THE CODING GUIDELINES on how to create pages. */
export default function Home() {
  const [newestVapes, setNewestVapes] = useState([]);
  const [popularVapes, setPopularVapes] = useState([]);
  useEffect(() => {
    async function getNewestVapes() {}
    async function getPopularVapes() {}

    getNewestVapes();
    getPopularVapes();
  }, []);

  return (
    <CryptoVapesRouteContainer>
      <Box id="container-fluid" height="80vh" width="100%">
        <Box id="background">
          <Box className="cube-entity vape"></Box>
          <Box className="cube-entity accessory"></Box>
          <Box className="cube-entity vape"></Box>
          <Box className="cube-entity accessory"></Box>
          <Box className="cube-entity vape"></Box>
          <Box className="cube-entity accessory"></Box>
          <Box className="cube-entity vape"></Box>
          <Box className="cube-entity accessory"></Box>
          <Box className="cube-entity vape"></Box>
          <Box className="cube-entity accessory"></Box>
          <Box className="cube-entity vape"></Box>
        </Box>
        <Box position="absolute" top="35vh" w="100%">
          <CryptoVapesText
            marginX="auto"
            textAlign="center"
            fontSize="2.5em"
            fontWeight="900"
          >
            Welcome to CryptoVapes
          </CryptoVapesText>
          <CryptoVapesText
            marginX="auto"
            textAlign="center"
            fontSize="1.75em"
            fontWeight="400"
          >
            Buy vapes with your crypto or fiat currency.
          </CryptoVapesText>
        </Box>
      </Box>
      <CryptoVapesDisplayVapesForSale title="Newest Vapes" vapes={vapes} />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        minHeight="80vh"
        w="100%"
        paddingY="2vw"
        paddingX="10vw"
      >
        <Image
          src="https://res.cloudinary.com/aa1997/image/upload/v1663440531/bitcoin-pane-1.svg"
          alt="Bitcoin Pane 1"
          h="90%"
          w="50%"
        />
        <VStack textAlign="center">
          <CryptoVapesPaneTitleText>
            Purchase vapes wholesale
          </CryptoVapesPaneTitleText>
          <CryptoVapesPaneSubtitleText>
            Use crypto for real merchandise.
          </CryptoVapesPaneSubtitleText>
        </VStack>
      </Flex>
      <CryptoVapesDisplayVapesForSale
        title="Most Popular Vapes"
        vapes={popularVapes}
      />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        minHeight="80vh"
        w="100%"
        paddingY="2vw"
        paddingX="10vw"
      >
        <Image
          src="https://res.cloudinary.com/aa1997/image/upload/v1663441772/crypto-pane-2.svg"
          alt="Bitcoin Pane 1"
          h="90%"
          w="50%"
        />
        <VStack textAlign="center">
          <CryptoVapesPaneTitleText>
            Invested crypto for goods
          </CryptoVapesPaneTitleText>
          <CryptoVapesPaneSubtitleText>
            Use ethereum, bitcoin and usdc for vapes and vape accessories.
          </CryptoVapesPaneSubtitleText>
        </VStack>
      </Flex>
    </CryptoVapesRouteContainer>
  );
}
