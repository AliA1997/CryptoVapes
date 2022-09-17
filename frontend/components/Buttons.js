import { Button } from "@chakra-ui/react";

export const CryptoVapesButton = (props) => (
  <Button
    mt="1.5em"
    colorScheme="teal"
    bg="linear-gradient(98.27deg, #1bbc9d 11.84%, #70E2CC 11.85%, #fca364 93.59%)"
    borderRadius="100px"
    height={{ base: "4em", lg: "60px" }}
    minWidth="152.46px"
    borderColor="#FFFFFF"
    border="2px"
    fontFamily="Nunito"
    fontWeight="700"
    fontSize="2em"
    textColor={"white"}
    _hover={{
      bgColor: "#1bbc9d",
      textColor: "#FFFFFF",
    }}
    variant="ghost"
    {...props}
  >
    {props.children}
  </Button>
);
