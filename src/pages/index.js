import React from "react"
import {
  Box,
  Text,
  // useColorMode,
  CSSReset,
  ThemeProvider,
  Heading,
  Image,
  Stack,
  ButtonGroup,
  Button,
  Link,
} from "@chakra-ui/core"
// import scrollTo from "gatsby-plugin-smoothscroll"

import Layout from "../components/layout"

import SamHeadshot from "../assets/images/sam-headshot-fade.png"
import RyanHeadshot from "../assets/images/ryan-headshot-fade.png"
import customTheme from "../theme/theme"

const Index = () => {
  // const { colorMode } = useColorMode()
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        <Box
          as="section"
          minHeight="90vh"
          d="flex"
          flexDirection="column"
          className="intro"
        >
          <Stack
            pt="32"
            w="100%"
            justify="space-between"
            align="baseline"
            isInline
          >
            <Image
              w="200px"
              h="auto"
              objectFit="cover"
              alt="Ryan Pearson"
              src={RyanHeadshot}
            />
            <Image
              w="170px"
              h="auto"
              objectFit="cover"
              alt="Sam Pearson"
              src={SamHeadshot}
            />
          </Stack>
          <Text pt="4" color="brand.600" as="span">
            The right Pearson for the Job
          </Text>
          <Heading py="4" as="h1">
            San Diego Web Development and Digital Marketing Company
          </Heading>
          <Text pb="4" color="brand.600" as="span">
            Pearsonable websites and online services
          </Text>
          <ButtonGroup>
            <Link href="/projects" _hover={{ textDecoration: "none" }}>
              <Button>View Projects</Button>
            </Link>
            <Link href="/contact" _hover={{ textDecoration: "none" }}>
              <Button>Contact Us</Button>
            </Link>
          </ButtonGroup>
        </Box>
        <Box my="10" as="section" className="projects">
          <Heading>Projects</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            velit cumque debitis voluptatum, perferendis quidem quaerat nostrum
            aut deleniti alias dolore ipsum nemo aliquid tempora veritatis odio
            in cum sunt natus! Odit nesciunt nostrum magnam pariatur tempora
            laboriosam vel ipsum.
          </Text>
        </Box>
        <Box my="10" as="section" className="services">
          <Heading>Services</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            velit cumque debitis voluptatum, perferendis quidem quaerat nostrum
            aut deleniti alias dolore ipsum nemo aliquid tempora veritatis odio
            in cum sunt natus! Odit nesciunt nostrum magnam pariatur tempora
            laboriosam vel ipsum.
          </Text>
        </Box>
        <Box my="10" as="section" className="vision">
          <Heading>Vision</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            velit cumque debitis voluptatum, perferendis quidem quaerat nostrum
            aut deleniti alias dolore ipsum nemo aliquid tempora veritatis odio
            in cum sunt natus! Odit nesciunt nostrum magnam pariatur tempora
            laboriosam vel ipsum.
          </Text>
        </Box>
        <Box my="10" as="section" className="contact">
          <Heading>Contact</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            velit cumque debitis voluptatum, perferendis quidem quaerat nostrum
            aut deleniti alias dolore ipsum nemo aliquid tempora veritatis odio
            in cum sunt natus! Odit nesciunt nostrum magnam pariatur tempora
            laboriosam vel ipsum.
          </Text>
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default Index
