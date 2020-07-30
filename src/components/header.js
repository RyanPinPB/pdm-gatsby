import React from "react"
import { Box, Button, Icon, useColorMode } from "@chakra-ui/core"
import { Link } from "gatsby"
import Menu from "./menu"

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      position="fixed"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      px="4"
      flex
      as="header"
      borderBottom="black"
    >
      <Link to="/">
        <Box maxW={50}>
          <Icon
            w="6"
            h="6"
            name="logo"
            color={colorMode === "light" ? "brand.100" : "brand.900"}
          />
        </Box>
      </Link>
      <Box as="nav">
        <Menu />
      </Box>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <Icon name="moon" /> : <Icon name="sun" />}
      </Button>
    </Box>
  )
}

export default Header
