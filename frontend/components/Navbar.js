import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';

import {Link} from 'react-scroll'
import {data} from './header.data';
import React from "react";
// import Login from "./Login";
import Logout from "./Logout";
import Vapes from "./Vapes";
import Logo from "../assets/cvnavbar.svg";
import MobileDrawer from './mobile-drawer';
const Navbar = () => {
  // const [navActive, setNavActive] = useState(null);
  // const [activeIdx, setActiveIdx] = useState(-1);
  // const router = useRouter();
  // const [windowDimension, setWindowDimension] = useState(null);
  // const [isOpen, setOpen] = useState(false);

 

  return (
    
      <chakra.header id="header" position="absolute">
        <Flex
          w="100%"
          px="6"
          py="5"
          align="center"
          justify="space-between"
          
        >
         
          <Image src={Logo.src} h="50px" />
     
          <HStack as="header" spacing="5"  display={{ base: "none", md: "flex" }}>
            {data.map((item, i) => (
              <Link key={i}>
                <Button variant="nav"> {item.name} </Button>
              </Link>
            ))}
          </HStack>
  
          {/* <HStack>
            <Button>
              CryptoVapes
            </Button> */}
            <MobileDrawer />
          {/* </HStack> */}
          
        </Flex>
      </chakra.header>
   );
};

export default Navbar;
