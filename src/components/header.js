import React from "react"
import { Box, Button, Icon, useColorMode, Text, Flex } from "@chakra-ui/core"

import { Link } from "gatsby"
// import MenuContainer from "./menuContainer"
import MenuDrawer from "./menuDrawer"
// import Menu from "./menu"

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      className="site-header"
      position="fixed"
      d="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      py={["4", "4", "12", "8"]}
      top="0"
      as="header"
      borderBottom="black"
      zIndex="100"
      bg={
        colorMode === "light" ? "rgba(255,255,255,.6)" : "rgba(26, 32, 44, .6)"
      }
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        px={["4", "4", "12", "8"]}
        maxW={{ xl: "1530px" }}
      >
        <Link className="logo-container" to="/">
          <Icon
            w="6"
            h="6"
            name="logo"
            color={colorMode === "light" ? "brand.100" : "brand.900"}
          />
          <Text as="span" position="absolute" className="logo-text">
            PEARSON
          </Text>
        </Link>
        {/* <Box as="nav">
      <Menu />
      </Box> */}
        <Flex
          className="header-button-container"
          justify="center"
          align="center"
        >
          {/* <MenuContainer /> */}
          <MenuDrawer />
          <Button w="6" h="6" bg="transparent" onClick={toggleColorMode}>
            {colorMode === "light" ? <Icon name="moon" /> : <Icon name="sun" />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
