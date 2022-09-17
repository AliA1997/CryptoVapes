import { Text } from "@chakra-ui/react";


export const CryptoVapesText = (props) => (
    <Text color="black.100" {...props}>
        {props.children}
    </Text>
);

export const CryptoVapesPaneTitleText = (props) => (
    <CryptoVapesText fontSize="3vw" fontWeight="900" color="black.100" {...props}>
        {props.children}
    </CryptoVapesText>
);

export const CryptoVapesPaneSubtitleText = (props) => (
    <CryptoVapesText fontSize="2vw" fontWeight="900" color="black.100" {...props}>
        {props.children}
    </CryptoVapesText>
);
//Set default styles, and overwrite them with chakraUIStyles if they are any.
export const CryptoVapesCurrencyText = (props) => (
    <Text color="black.100" fontWeight="bold" fontSize="0.7em" {...props}>
        {props.children}
    </Text>
);