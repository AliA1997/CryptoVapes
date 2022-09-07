import TopBar from "../components/TopBar";
// import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import LoginOne from "./users/[id]";
import Vapes from "../components/Vapes";
import { Image } from "@chakra-ui/react";
import {
  CryptoVapesRouteContainer,
  CryptoVapesResponsveRow,
} from "../components/Containers";
import { CryptoVapesText } from "../components/Typography";
import { useEffect, useState } from "react";
// import InitialPaneImg1 from "../assets/initial-pane-img-1.svg";
// import InitialPaneImg2 from "../assets/initial-pane-img-2.svg";

const MarketingPaneText = ({ children }) => (
  <CryptoVapesText chakraUIStyles={{ fontSize: "4em" }}>
    {children}
  </CryptoVapesText>
);
const MarketingPaneImg = ({ src, alt }) => (
  <Image src={src} alt={alt} w="20%" h="20vw" />
);
const MarketingPane = ({ image, text }) => (
  <CryptoVapesResponsveRow
    chakraUIProps={{
      borderRadius: "1.5em",
      backgroundColor: "gray.100",
      fontWeight: "bolder",
    }}
  >
    <MarketingPaneText>{text}</MarketingPaneText>
    <MarketingPaneImg src={image} alt={text} />
  </CryptoVapesResponsveRow>
);

/** LOOK AT THE CODING GUIDELINES on how to create pages. */
export default function Home() {
  const [newestVapes, setNewestVapes] = useState([]);
  const [popularVapes, setPopularVapes] = useState([]);
  useEffect(() => {
    async function getNewestVapes() {
      
    }
    async function getPopularVapes() {

    }

    getNewestVapes();
    getPopularVapes();
  }, []);

  return (
    <CryptoVapesRouteContainer>
      <Image src="images/initial-pane-img-1.svg" w="100vw" h="80vh" />
      <MarketingPane
        image="images/initial-pane-img-2.svg"
        text="For the sophicated and beautiful."
      />
    </CryptoVapesRouteContainer>
  );
}
