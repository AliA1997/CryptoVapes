import { Box, Flex } from "@chakra-ui/react";

export const CryptoVapesColumn = ({ children }) => (
  <Flex flexDir="column" w="100%">
    {children}
  </Flex>
);

export const CryptoVapesColumnFlexStart = ({ children }) => (
  <Flex flexDir="column" w="100%" alignItems="flex-start">
    {children}
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
