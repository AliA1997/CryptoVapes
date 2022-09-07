import { Text } from "@chakra-ui/react";


export const CryptoVapesText = ({ children, chakraUIStyles }) => (
    <Text color="black.100" {...chakraUIStyles}>
        {children}
    </Text>
);
//Set default styles, and overwrite them with chakraUIStyles if they are any.
export const CryptoVapesCurrencyText = ({ children, chakraUIStyles }) => (
    <Text color="black.100" {...chakraUIStyles}>
        {children}
    </Text>
);