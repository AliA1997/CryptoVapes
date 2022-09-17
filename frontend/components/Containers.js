import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import { CryptoVapesCurrencyText, CryptoVapesPaneTitleText, CryptoVapesText } from "./Typography";
import { CryptoVapesButton } from './Buttons';

export const CryptoVapesDisplayVapesForSale = ({ title, vapes, flexChakraUIProps }) => (
  <CryptoVapesColumnFlexStart paddingX="10vw" paddingY="2vw" height="80vh" width="100%" {...flexChakraUIProps}>
    <CryptoVapesPaneTitleText fontWeight="700">{title}</CryptoVapesPaneTitleText>
    <Flex h="80%" justifyContent="space-between">{vapes && vapes.map(vape => <VapeCard key={vape.id} {...vape} />)}</Flex>
  </CryptoVapesColumnFlexStart>
);

export const CryptoVapesCurrencyBox = ({ cryptoCurrency, currencyImage, price }) => <Flex border="solid 1px #00000" w="33%" h="2em" alignItems="center"><Image h="100%" w="3em" src={currencyImage} alt={cryptoCurrency} marginRight="0.5em" /><CryptoVapesCurrencyText>{price}</CryptoVapesCurrencyText></Flex>

export const VapeCard = ({ id, name, customEthereumPrice, customBitcoinPrice, customUsdcPrice, price, clearancePrice, thumbnail }) => (
  <CryptoVapesColumnFlexStart w="20%" bg="#EEE6E6" borderRadius="20px" padding="30px">
    <Image alignSelf="center" src={thumbnail} alt={name} objectPosition="0 5%" objectFit="cover" height="50%" width="100%" onClick={() => console.log("id", id)} marginBottom="2em" />
    <Flex height="20%" width="100%">
      <CryptoVapesCurrencyBox cryptoCurrency="USDC" currencyImage="https://res.cloudinary.com/aa1997/image/upload/v1663387066/usdc.png" price={customUsdcPrice} />
      <CryptoVapesCurrencyBox cryptoCurrency="Ethereum" currencyImage="https://res.cloudinary.com/aa1997/image/upload/v1663387054/icons8-ethereum-100.png" price={customEthereumPrice} />
      <CryptoVapesCurrencyBox cryptoCurrency="Bitcoin" currencyImage="https://res.cloudinary.com/aa1997/image/upload/v1663387859/golden-bitcoin-coin-mining-crypto-currency-symbol-isolated-transparent-background-107436003-removebg-preview.png" price={customBitcoinPrice} />
    </Flex>
    <CryptoVapesCurrencyText marginTop="20px">
      ${clearancePrice ? clearancePrice : price}
    </CryptoVapesCurrencyText>
    <CryptoVapesText>{name}</CryptoVapesText>
    <CryptoVapesButton> 
      Add To Cart
     </CryptoVapesButton>
  </CryptoVapesColumnFlexStart>
)

export const CryptoVapesColumn = ({ children }) => (
  <Flex flexDir="column" w="100%">
    {children}
  </Flex>
);

export const CryptoVapesColumnFlexStart = (props) => (
  <Flex flexDir="column" w="100%" alignItems="flex-start" {...props}>
    {props.children}
  </Flex>
);

export const CryptoVapesResponsveRow = ({ children, chakraUIProps }) => (
  <Flex flexDir={{ base: "column", lg: "row" }} w="100%" {...chakraUIProps}>
    {children}
  </Flex>
);

export const CryptoVapesRouteContainer = ({ children }) => (
  <Box>{children}</Box>
);
