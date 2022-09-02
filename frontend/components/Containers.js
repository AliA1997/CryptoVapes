import { Box, Flex } from "@chakra-ui/react";

export const CryptoVaoesColumn = ({ children }) => (
  <Flex flexDir="column" w="100%">{children}</Flex>
);

export const CryptoVapesResponsveRow = ({ children }) => (
  <Flex flexDir={{ base: "column", lg: "row" }} w="100%">{children}</Flex>
);

export const CryptoVapesRouteContainer = ({ children }) => (
    <Box>
        {children}
    </Box>
);