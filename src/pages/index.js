import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import {
  Box,
  useColorMode,
  CSSReset,
  ThemeProvider,
  // Text,
  Heading,
} from "@chakra-ui/core"

import customTheme from "../theme/theme"

// import SEO from "../components/seo";

const Index = () => {
  const { colorMode } = useColorMode()
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        {/* <SEO
      title="Home"
      description="I love solving problems, learning new things, and helping people. By day, I'm VP of Development at The Digital Ring, a full-service digital marketing agency in Madison, Wisconsin 🧀."
      image=""
    /> */}
        <Box
          as="section"
          h="90vh"
          d="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="span">The right Pearson for the Job</Heading>
          <Heading as="h1">
            San Diego Website and Digital Marketing Company
          </Heading>
          <Heading as="span">
            Pearsonable websites and digital marketing services
          </Heading>
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default Index
