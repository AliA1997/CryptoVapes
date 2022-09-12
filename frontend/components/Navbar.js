import Link from "next/link";
// import {NextImage} from "next/image";
// import React, { useState, useEffect } from "react";
import Logo from "../assets/cvnavbar.svg";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
// import {selectUser} from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import NextImage from "next/image";
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

// import Login from "./Login";
import Logout from "./Logout";
import Vapes from "./Vapes";
import {
  useColorMode,
  Switch,
  Flex,
  HamburgerIcon,
  CloseIcon,
  Button,
  createStylesContext,
  StylesProvider,
  useStyles,
  chakra,
  useChakra,
} from "@chakra-ui/react";
import { useState } from "react";

import NextLink from "next/link";
import { userR } from "../redux/slices/userSlice";
import LoginOne from "../pages/users/[id]";
import { store } from "../redux/slices";
import { login, userReducer, selectUser } from "../redux/slices/userSlice";
// import { makeStyles } from "@material-ui/core/styles";

const MENU_LIST = [
  //   { text: "Home", href: "/" },
  { name: "Vapes", Link: "/vapes" },
  { name: "Accessories", Link: "/accessories" },
  { name: "Account", Link: "/account" },
  { name: "Register", Link: "/register" },
  { name: "Login", Link: "/users/1" },
];
const Navbar = () => {
  // const [navActive, setNavActive] = useState(null);
  // const [activeIdx, setActiveIdx] = useState(-1);
  // const router = useRouter();
  // const [windowDimension, setWindowDimension] = useState(null);
  // const [isOpen, setOpen] = useState(false);

  const [active, setActive] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

    return (
        
        
        <Flex pos="relative">
        {/* <Flex> */}
               <NextImage
               pos="sticky"
  src={Logo}
  width={180}
  height={180}
  objectPosition="absolute"
  top="1rem"
  w="auto"
  h="auto"
  borderWidth={7}
  borderStyle="solid"
/> 


         {/* <Image src={Logo} />  */}
         <Flex
                pos="fixed"
                top="1rem"
                right="1rem"
                >
                      {/* <div className={classes.main}>
       <div className={classes.container}>
      <div className={classes.wrapper}>
           <Image src={Logo} />
           <div onClick={() => setActive(!active)}>
             <div
               className={active ? classes.activeHamburger : classes.hamburger}
             />
          </div>
         </div>
       </div>
       </div> */}
                    
                  
        <NextLink href="/vapes" passHref>
            <Button 
            as="a"
            variant="ghost"
            aria-label="Vapes"
            my={5}
            w="100%"
            >
                Vapes
            </Button>
          </NextLink>
          <NextLink href="/accessories" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Accessories"
              my={5}
              w="100%"
            >
              Accessories
            </Button>
          </NextLink>
          <NextLink href="/account" passHref>
            <Button as="a" variant="ghost" aria-label="Account" my={5} w="100%">
              Account
            </Button>
          </NextLink>
          <NextLink href="/register" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Register"
              my={5}
              w="100%"
            >
              Register
            </Button>
          </NextLink>
          <NextLink href="/users/1" passHref>
            <Button as="a" variant="ghost" aria-label="Login" my={5} w="100%">
              Login
            </Button>
        </NextLink>
        <NextLink href="/users/1" passHref>
            <Button 
            as="a"
            variant="ghost"
            aria-label="Login"
            my={5}
            w="100%"
            >
                Login
            </Button>
        </NextLink>
                    
                </Flex>
                <Flex pos="relative">
        <Switch 
        pos="fixed"
        top="0.5"
        bottom="2.0"
        right="1rem"
        color="blue"
        isChecked={isDark}
        onChange={toggleColorMode}
        />
        </Flex>
        </Flex>
        
        
        
       
    )
  // );
};

export default Navbar;
