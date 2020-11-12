import React from "react"
import {
  Box,
  Button,
  Icon,
  useColorMode,
  Text,
  Flex,
  // Link as ChakraLink,
} from "@chakra-ui/core"

import { SiteLink as Link } from "./Link"

import MenuMotion from "./menu/MenuMotion"
import MenuToggle from "./menu/MenuToggle"
import { useCycle } from "framer-motion"

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isOpen, toggleOpen] = useCycle(false, true)

  // console.log("header.js: colorMode=" + colorMode)

  const bgColor = {
    light: "rgba(255,255,255,.6)",
    dark: "rgba(26, 32, 44, .6)",
  }
  const color = { light: "brand.400", dark: "brand.900" }

  return (
    <Box
      className="site-header"
      position="fixed"
      d="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      pb={"4"}
      pt={
        props.transformedHeader ? ["4", "4", "4", "4"] : ["4", "4", "12", "8"]
      }
      transition="padding-top .3s ease-in-out .6s"
      as="header"
      borderBottom={
        props.transformedHeader
          ? colorMode === "light"
            ? "0.1rem solid rgba(0, 0, 0, 0.1)"
            : "0.1rem solid rgba(255, 255, 255, 0.1)"
          : "0.1rem solid rgba(0, 0, 0, 0)"
      }
      zIndex="100"
      // bg={
      //   colorMode === "light" ? "rgba(255,255,255,.6)" : "rgba(26, 32, 44, .6)"
      // }
      bg={bgColor[colorMode]}
    >
      <MenuMotion
        menuOpen={isOpen}
        toggleMenu={toggleOpen}
        headerActive={props.transformedHeader}
      />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        transition="padding .3s ease-in-out .6s"
        px={
          props.transformedHeader
            ? ["4", "4", "12", "20"]
            : ["4", "4", "12", "8"]
        }
        maxW={{ xl: "1530px" }}
      >
        <Link
          className="logo-container"
          position="relative"
          display="flex"
          width="fit-content"
          height="24px"
          line-height="1"
          href="/"
        >
          <Icon
            w="6"
            h="6"
            name="logo"
            // color={colorMode === "light" ? "brand.400" : "brand.900"}
            color={color[colorMode]}
          />
          <Text
            as="span"
            position="absolute"
            className="logo-text"
            display="flex"
            width="fit-content"
            fontSize="1.2rem"
            fontWeight="700"
            height="24px"
            lineHeight="1"
            content="PEARSON"
            transform="matrix(0, 0, 0, 0, 8, 10)"
            // color={colorMode === "light" ? "rgba(26, 32, 44, 1)" : "brand.900"}
            color={color[colorMode]}
            opacity="0"
            transition="transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s"
          >
            PEARSON
          </Text>
        </Link>
        <Flex
          position="relative"
          className="header-button-container"
          justify="center"
          align="center"
        >
          <MenuToggle menuOpen={isOpen} toggle={toggleOpen} />
          <Button
            className="color-mode-toggle"
            pl="0"
            pr="0"
            w="25px"
            minWidth="15px"
            h="25px"
            bg="transparent"
            onClick={toggleColorMode}
            aria-label="Color mode toggle"
          >
            {colorMode === "light" ? (
              <Icon width="23px" height="23px" name="moon" />
            ) : (
              <Icon width="23px" height="23px" name="sun" />
            )}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
