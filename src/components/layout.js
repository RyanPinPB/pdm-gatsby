import React from "react"
import { Box } from "@chakra-ui/core"

import Social from "./social"
import Header from "./header"

import "../assets/style.css"

const Layout = ({ children }) => (
  <div>
    <Header />

    <Box mx="4" mb={100}>
      {children}
    </Box>
    <Box>
      <Social />
    </Box>
  </div>
)

export default Layout
