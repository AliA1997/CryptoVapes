import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";

const WalletCard = ({ url, index }) => (
    <Box
        key={index}
        height="10vh"
        width="30%"
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(${url})`}
        onDrag={e => console.log("e", e)}
    />
);

export default function VapeCard({ vape })  {
    return (
        <>
            <HStack></HStack>
            <HStack></HStack>
        </>
    )
}