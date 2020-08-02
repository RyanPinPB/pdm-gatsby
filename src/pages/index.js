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
  Flex,
  AspectRatioBox,
} from "@chakra-ui/core"
// import scrollTo from "gatsby-plugin-smoothscroll"

import Layout from "../components/layout"

import Pbhomes from "../assets/images/projects/pbh-desktop-phone-desk.jpg"
import Bishop from "../assets/images/projects/bishop-iMac-blue.png"
import Ravenous from "../assets/images/projects/ravenous-macbook-desk.png"
import Travel from "../assets/images/projects/travel-imac-laptop-light.png"
import SamHeadshot from "../assets/images/sam-headshot-fade.png"
import RyanHeadshot from "../assets/images/ryan-headshot-fade.png"
import customTheme from "../theme/theme"

const Index = () => {
  // const { colorMode } = useColorMode()

  function Project({ title, projLink, desc, imgSrc, imgAlt, ...rest }) {
    return (
      <Link
        className={`project-container`}
        href={projLink}
        position="relative"
        shadow="md"
        {...rest}
      >
        <Heading
          as="h3"
          zIndex="2"
          color="brand.900"
          position="absolute"
          top="5"
          left="5"
          fontSize="2xl"
        >
          {title}
        </Heading>
        <AspectRatioBox as="figure" maxW="100%" ratio={0.75}>
          <Image src={imgSrc} alt={imgAlt} objectFit="cover" />
        </AspectRatioBox>
        <Button
          bg="rgba(26, 32, 44, .8)"
          color="white"
          zIndex="2"
          position="absolute"
          bottom="5"
          left="5"
          size="lg"
        >
          VIEW
        </Button>
      </Link>
    )
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        {/* Intro hero/banner section  */}
        <Flex
          as="section"
          className="intro"
          pt={["20", "20", "32"]}
          w="100%"
          maxWidth="1525px"
          mx="auto"
          justify="center"
          align="flex-end"
          wrap="wrap"
        >
          <Stack
            className="intro-image-container-one"
            w="100%"
            justify="space-evenly"
            align="flex-end"
            isInline
          >
            <Flex
              className="ryan-pearson"
              align="baseline"
              as="figure"
              maxW="265px"
              flex="1 1 20%"
            >
              <Image
                width="100%"
                height="auto"
                objectFit="cover"
                alt="Ryan Pearson"
                src={RyanHeadshot}
              />
            </Flex>
            <Flex
              d={["flex", "flex", "flex", "none"]}
              className="sam-pearson"
              as="figure"
              flex="1 1 13%"
              maxW="225px"
            >
              <Image
                w="100%"
                maxW="225px"
                h="auto"
                objectFit="cover"
                alt="Sam Pearson"
                src={SamHeadshot}
              />
            </Flex>
          </Stack>
          <Stack className="intro-content-container" minW="320px">
            <Text pt="8" color="brand.600" as="span">
              The right Pearson for the job
            </Text>
            <Heading
              size="2xl"
              py="4"
              as="h1"
              lineHeight={["1.1", "1.1", "1.2"]}
            >
              San Diego Web Development and Digital Marketing
            </Heading>
            <Text pb="4" color="brand.600" as="span">
              Pearsonable websites, content, seo, ppc and social media
              management
            </Text>
            <ButtonGroup spacing="8" pt="4">
              <Link href="/projects" _hover={{ textDecoration: "none" }}>
                <Button size="lg">View Projects</Button>
              </Link>
              <Link
                className="contact-button"
                href="/contact"
                _hover={{ textDecoration: "none" }}
              >
                <Button d={["none", "none", "inline-flex"]} size="lg">
                  Contact Us
                </Button>
              </Link>
            </ButtonGroup>
          </Stack>
          <Flex
            className="sam-pearson-pic"
            as="figure"
            flex="1 1 17%"
            maxW="400px"
            d={["none", "none", "none", "flex"]}
          >
            <Image
              w="100%"
              h="auto"
              objectFit="cover"
              alt="Sam Pearson"
              src={SamHeadshot}
            />
          </Flex>
        </Flex>
        {/* Project section  */}
        <Box my={["16", "16", "24"]} as="section" className="projects">
          <Flex as="header" justify="space-between" align="center">
            <Heading size="2xl">Projects</Heading>
            <Link href="/projects" _hover={{ textDecoration: "none" }}>
              <Button rightIcon="arrow-forward" size="lg">
                view all
              </Button>
            </Link>
          </Flex>
          <Stack mt={12} spacing={12}>
            <Project
              title="Pacific Beach Homes"
              projLink="/"
              desc="The future can be even brighter but a goal without a plan is just a wish"
              imgSrc={Pbhomes}
              imgAlt="Pacific Beach Homes Real Estate"
            />
            <Project
              title="R.H. Bishop Books"
              projLink="/"
              desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
              imgSrc={Bishop}
              imgAlt="R.H. Bishop Books"
            />
            <Project
              title="Ravenous"
              projLink="/"
              desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
              imgSrc={Ravenous}
              imgAlt="Ravenous"
            />
            <Project
              title="Travel"
              projLink="/"
              desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
              imgSrc={Travel}
              imgAlt="Travel"
            />
          </Stack>
        </Box>
        {/* Services section  */}
        <Box my={["16", "16", "24"]} as="section" className="services">
          <Heading size="2xl">Services</Heading>
          <Stack mt={[0, 0, "16"]} ml={[0, 0, "32"]}>
            <Text pt={["8", "8", "0"]} pb={["4", "4", "8"]}>
              We provide custom website development for any type of business.
              This includes a free consultation and feedback on your current
              digital footprint. After you have a beautiful and fast website, we
              provide content, SEO and lead acquisition services. This can
              include Google Ads, Facebook Ads, social media management and
              landing page configuration.
            </Text>
            <Link href="/services" _hover={{ textDecoration: "none" }}>
              <Button size="lg" rightIcon="arrow-forward">
                Our services
              </Button>
            </Link>
          </Stack>
        </Box>
        {/* Vision section */}
        <Box my={["16", "16", "24"]} as="section" className="vision">
          <Heading size="2xl">Vision</Heading>
          <Stack mt={[0, 0, "16"]} ml={[0, 0, "32"]}>
            <Text pt={["8", "8", "0"]} pb={["4", "4", "8"]}>
              We believe your brand should have Beyoncé-like quality in it's
              presence on the internet. If someone finds your business on a
              screen, they should remember it. When they remember your brand and
              visit your company site, they should be impressed. When leads are
              impressed, they should have a high conversion rate and share your
              brand with friends, providing residual marketing.
            </Text>
            <Link href="/vision" _hover={{ textDecoration: "none" }}>
              <Button size="lg" rightIcon="arrow-forward">
                Our vision
              </Button>
            </Link>
          </Stack>
        </Box>
        {/* Contact section  */}
        <Box my={["16", "16", "24"]} as="section" className="contact">
          <Heading size="2xl">Contact Us</Heading>
          <Flex
            mt={["16", "16", "24"]}
            direction="column"
            justify="center"
            align="center"
          >
            <Text as="span" color="brand.600">
              NEED SOMETHING?
            </Text>
            <Link
              href="/contact"
              // _hover={{ textDecoration: "none" }}
            >
              <Button
                fontSize={["1.8rem", "2.4rem", "3rem"]}
                lineHeight="1"
                bg="transparent"
                size="xl"
                rightIcon="arrow-forward"
              >
                Let's work together
              </Button>
            </Link>
          </Flex>
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default Index
