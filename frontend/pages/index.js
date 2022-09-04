import TopBar from "../components/TopBar";
// import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import LoginOne from "./users/[id]";
import Vapes from "../components/Vapes";
import { CryptoVapesRouteContainer } from "../components/Containers";
import { CryptoVapesCurrencyText } from '../components/Typography';

/** LOOK AT THE CODING GUIDELINES on how to create pages. */
export default function Home() {
  return <CryptoVapesRouteContainer>
    <CryptoVapesCurrencyText>

    </CryptoVapesCurrencyText>
  </CryptoVapesRouteContainer>
}
