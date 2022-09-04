import { useColorMode, Switch, Flex } from "@chakra-ui/react";
import { useState } from "react";
import {HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
import NextLink from "next/link"
export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <Flex>
            <Flex
                pos="fixed"
                top="1rem"
                right="1rem"
                >
                    <Flex>
                    {/* { name: "Vapes", Link: "/vapes" },
  { name: "Accessories", Link: "/accessories" },
  { name: "Account", Link: "/account" },
  { name: "Register", Link: "/register" },
  { name: "Login", Link: "/users/1" }, */}
        <NextLink href="/vapes" passHref>
            <Button 
            as="a"
            variant="ghost"
            aria-label="Vapes"
            my={5}
            w="100%"
            >
                Dapes
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
            <Button 
            as="a"
            variant="ghost"
            aria-label="Account"
            my={5}
            w="100%"
            >
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
                </Flex>
        <Switch 
        pos="fixed"
        top="1rem"
        right="1rem"
        color="blue"
        isChecked={isDark}
        onChange={toggleColorMode}
        />
        </Flex>
        
       
    )
}