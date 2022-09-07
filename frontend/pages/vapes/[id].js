import Link from "next/link";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import {
  CryptoVapesColumn,
  CryptoVapesColumnFlexStart,
} from "../../components/Containers";
import { HStack } from "@chakra-ui/react";
import Carousel from "../../components/Carousel";
import { useEffect } from "react";

const VapeInfo = ({ id }) => {
  const [vapeInfo, setVapeInfo] = useState(undefined);
  useEffect(() => {
    async function getVapeInfo() {}
    getVapeInfo();
  }, []);

  return (
    <CryptoVapesColumn>
      <HStack justifyContent="space-between" h="80vh">
        <Carousel images={vapeInfo.images} />
        <CryptoVapesColumnFlexStart></CryptoVapesColumnFlexStart>
      </HStack>
    </CryptoVapesColumn>
  );
};

export default VapeInfo;
