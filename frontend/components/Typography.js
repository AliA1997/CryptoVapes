import { Text } from "@chakra-ui/react";

//Set default styles, and overwrite them with chakraUIStyles if they are any.
export const CryptoVapesCurrencyText = ({ children, chakraUIStyles }) => (
    <Text color="black.100" {...chakraUIStyles}>
        {children}
    </Text>
);