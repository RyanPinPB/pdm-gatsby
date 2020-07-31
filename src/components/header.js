import React from "react"
import { Box, Button, Icon, useColorMode } from "@chakra-ui/core"
import { Link } from "gatsby"
import Menu from "./menu"

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      className="site-header"
      position="fixed"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      p="4"
      top="0"
      as="header"
      borderBottom="black"
      zIndex="100"
    >
      <Link className="logo-container" to="/">
        <Icon
          w="6"
          h="6"
          name="logo"
          color={colorMode === "light" ? "brand.100" : "brand.900"}
        />
      </Link>
      <Box as="nav">
        <Menu />
      </Box>
      <Button w="6" h="6" bg="transparent" onClick={toggleColorMode}>
        {colorMode === "light" ? <Icon name="moon" /> : <Icon name="sun" />}
      </Button>
    </Box>
  )
}

export default Header
