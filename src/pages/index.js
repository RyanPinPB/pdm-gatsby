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
  Flex,
  Icon,
} from "@chakra-ui/core"

import { motion } from "framer-motion"

import { SiteLink as Link } from "../components/Link"
import Layout from "../components/layout"
import Project from "../components/project"

import Pbhomes from "../assets/images/projects/pbh-desktop-phone-desk.jpg"
import Bishop from "../assets/images/projects/bishop-iMac-blue.png"
import Ravenous from "../assets/images/projects/ravenous-macbook-desk.png"
import Travel from "../assets/images/projects/travel-imac-laptop-light.png"
import SamHeadshot from "../assets/images/sam-headshot-fade.png"
import RyanHeadshot from "../assets/images/ryan-headshot-fade.png"
import customTheme from "../theme/theme"

const ArrowLink = motion.custom(Link)
const WiggleArrowIcon = motion.custom(Icon)

const Index = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        {/* Intro hero/banner section  */}
        <Flex
          as="section"
          className="intro"
          pt={["20", "20", "32", "32", "40"]}
          pb={{ xl: "20" }}
          w="100%"
          maxWidth="1525px"
          mx="auto"
          justify="center"
          align={{ base: "flex-end", xl: "center" }}
          wrap="wrap"
        >
          <Stack
            className="intro-image-container-one"
            w={{ base: "100%", xl: "20%" }}
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
              d={{ xl: "none" }}
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
          <Stack
            className="intro-content-container"
            w={{ base: "100%", xl: "60%" }}
            maxW="700px"
            mx="auto"
            align={{ xl: "center" }}
          >
            <Text pt="8" color="brand.600" as="span">
              The right Pearson for the job
            </Text>
            <Heading
              size="2xl"
              py="4"
              as="h1"
              lineHeight={["1.1", "1.1", "1.2"]}
              textAlign={{ xl: "center" }}
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
                <Button d={{ base: "none", md: "inline-flex" }} size="lg">
                  Contact Us
                </Button>
              </Link>
            </ButtonGroup>
          </Stack>
          <Flex
            className="sam-pearson-pic"
            as="figure"
            maxW="400px"
            d={{ base: "none", xl: "flex" }}
            w={{ base: "0%", xl: "17%" }}
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
                View all
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
        <Box mt={["16", "16", "24"]} as="section" className="contact">
          <Heading size="2xl">Contact Us</Heading>
          <Flex
            my={["16", "16", "24"]}
            direction="column"
            justify="center"
            align="center"
          >
            <Text as="span" color="brand.600">
              NEED SOMETHING?
            </Text>
            <ArrowLink
              initial="rest"
              whileHover="hover"
              animate="rest"
              href="/contact"
              fontSize={["1.8rem", "2.4rem", "3rem"]}
              lineHeight="1"
              textAlign="center"
            >
              Let's work together
              <WiggleArrowIcon
                animate={{ x: "50%" }}
                transition={{
                  yoyo: Infinity,
                  ease: "easeInOut",
                  duration: 0.6,
                }}
                name="arrow-forward"
              />
            </ArrowLink>
          </Flex>
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default Index
