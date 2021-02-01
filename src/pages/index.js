import React, { useEffect, useRef } from "react"
import {
  Box,
  Text,
  Heading,
  Stack,
  ButtonGroup,
  Button,
  Flex,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { ArrowForwardIcon } from "@chakra-ui/icons"

import "../assets/home.scss"
import { SiteLink as Link } from "../components/Link"
import Layout from "../components/layout"
import Project from "../components/project"
import useWindowDimensions from "../utils/window-dimensions"
import SEO from "../components/seo"
import FeaturedImage from "../assets/images/pearson-digital-marketing.png"

const ArrowLink = motion.custom(Link)
const WiggleArrowIcon = motion.custom(ArrowForwardIcon)
const ServicesBox = motion.custom(Box)

export const query = graphql`
  query {
    ryanHeadshot: file(relativePath: { eq: "ryan-headshot-fade.png" }) {
      childImageSharp {
        fluid(maxWidth: 265, maxHeight: 295) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    samHeadshot: file(relativePath: { eq: "sam-headshot-fade.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pbHomes: file(relativePath: { eq: "projects/pbh-desktop-phone-desk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bishop: file(relativePath: { eq: "projects/bishop-iMac-blue.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ravenous: file(relativePath: { eq: "projects/ravenous-macbook-desk.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    travel: file(
      relativePath: { eq: "projects/travel-imac-laptop-light.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    chiggy: file(relativePath: { eq: "projects/chiggybank.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Index = ({ data }) => {
  const constraintsRef = useRef(null)
  const { width } = useWindowDimensions()
  // setting up monster's eye movement in Vision section
  useEffect(() => {
    if (width >= 993) {
      let mouseContainer = document.querySelector("#smooth-scroll")
      const eyeFollow = (e) => {
        let eyes = document.querySelector(".eyes")
        let mouseX = eyes.getBoundingClientRect().left
        let mouseY = eyes.getBoundingClientRect().top
        let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY)
        let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180
        eyes.style.transform = `rotate(${rotationDegrees}deg)`
      }

      mouseContainer.addEventListener("mousemove", eyeFollow)
      return () => {
        mouseContainer.removeEventListener("mousemove", eyeFollow)
      }
    }
  }, [width])

  return (
    <Layout>
      <SEO
        title="Web Development and Marketing | Pearson Digital Marketing"
        description="Need a new website? Need leads? Free consultation for learning about what options are available"
        image={FeaturedImage}
      />
      {/* Intro hero/banner section  */}
      <Flex
        as="section"
        className="intro"
        pb={["12", "16", "20"]}
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
          <Img
            className="ryan-pearson"
            fluid={data.ryanHeadshot.childImageSharp.fluid}
            loading="eager"
            alt="Ryan Pearson"
            style={{
              display: "flex",
              alignItems: "baseline",
              maxWidth: "265px",
              flex: "1 1 20%",
            }}
          />
          <Flex
            d={{ xl: "none" }}
            className="sam-pearson"
            align="baseline"
            as="figure"
            maxW="225px"
            flex="1 1 13%"
          >
            <Img
              className="sam-pearson"
              fluid={data.samHeadshot.childImageSharp.fluid}
              alt="Sam Pearson"
              loading="eager"
              style={{
                display: "flex",
                alignItems: "baseline",
                maxWidth: "225px",
                width: "100%",
              }}
            />
          </Flex>
        </Stack>
        <Stack
          className="intro-content-container"
          w={{ base: "100%", xl: "60%" }}
          mx="auto"
          align="center"
        >
          <Text
            fontSize="2xl"
            lineHeight="1.1"
            pt="8"
            color="brand.600"
            as="span"
            textAlign="center"
          >
            Your customers deserve an amazing online experience.
          </Text>
          <Heading
            size="2xl"
            py="4"
            as="h1"
            lineHeight={["1.1", "1.1", "1.2", "1"]}
            textAlign="center"
            id="banner-text"
          >
            Digital Marketing &<br />
            Web Development
          </Heading>
          <Text
            fontSize="2xl"
            lineHeight="1.1"
            pb="4"
            color="brand.600"
            as="span"
            textAlign="center"
            mt=".5rem"
          >
            websites, content, seo, ppc and social media management
          </Text>
          <ButtonGroup spacing={{ base: "none", md: "8" }} py="4">
            <Link href="/projects" _hover={{ textDecoration: "none" }}>
              <Button size="lg">View Projects</Button>
            </Link>
            <Link
              className="contact-button"
              aria-label="Contact Us"
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
          d={{ base: "none", xl: "flex" }}
          w={{ base: "0%", xl: "17%" }}
        >
          <Img
            fluid={data.samHeadshot.childImageSharp.fluid}
            alt="Sam Pearson"
            loading="eager"
            style={{
              width: "100%",
              maxWidth: "400px",
            }}
          />
        </Flex>
      </Flex>

      {/* Project section  */}
      <Box py={["12", "16", "20"]} as="section" className="projects">
        <Flex as="header" justify="space-between" align="center">
          <Heading size="2xl">Projects</Heading>
          <Link href="/projects" _hover={{ textDecoration: "none" }}>
            <Button rightIcon={<ArrowForwardIcon />} size="lg">
              View all
            </Button>
          </Link>
        </Flex>
        <Stack mt={12} spacing={12}>
          <Project
            title="Pacific Beach Homes"
            projLink="https://pacificbeachhomes.com"
            desc="The future can be even brighter but a goal without a plan is just a wish"
            imgSrc={data.pbHomes.childImageSharp.fluid}
            imgAlt="Pacific Beach Homes Real Estate"
          />
          <Project
            title="R.H. Bishop Books"
            projLink="https://www.rhbishopbooks.com/"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
            imgSrc={data.bishop.childImageSharp.fluid}
            imgAlt="R.H. Bishop Books"
          />
          <Project
            title="Ravenous"
            projLink="https://ravenoussearch.netlify.app/"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
            imgSrc={data.ravenous.childImageSharp.fluid}
            imgAlt="Ravenous"
          />
          <Project
            title="Travel"
            projLink="https://travel.ryanpearson.website/"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
            imgSrc={data.travel.childImageSharp.fluid}
            imgAlt="Travel"
          />
          <Project
            title="Chiggy Bank"
            projLink="https://chiggybank.herokuapp.com/"
            desc="Chiggy Bank is a piggy bank for chickens. Test your theories on investing with fake money."
            imgSrc={data.chiggy.childImageSharp.fluid}
            imgAlt="Chiggy Bank"
          />
        </Stack>
        <Flex
          mt={["24", "32", "40"]}
          // ml={[0, 0, "32"]}
          justifyContent="center"
        >
          <Link href="/projects" _hover={{ textDecoration: "none" }}>
            <Button rightIcon={<ArrowForwardIcon />} size="lg">
              View all Projects
            </Button>
          </Link>
        </Flex>
      </Box>
      {/* Services section  */}
      <Box py={["12", "16", "20"]} as="section" className="services">
        <Heading size="2xl">Services</Heading>
        <Flex wrap="wrap">
          <Stack mt={[0, 0, "16"]} ml={[0, 0, "32"]}>
            <Text
              pt={["8", "8", "0"]}
              pb={["4", "4", "8"]}
              maxWidth={{ base: "100%", lg: "600px" }}
            >
              We provide custom website development for any type or size of
              business. This includes a free consultation and feedback on your
              current digital footprint. After you have a beautiful and fast
              website, we provide content, SEO and lead acquisition services.
              This can include Google Ads, Facebook Ads, social media management
              and landing page configuration.
            </Text>
            <Link href="/services" _hover={{ textDecoration: "none" }}>
              <Button size="lg" rightIcon={<ArrowForwardIcon />}>
                Our services
              </Button>
            </Link>
          </Stack>
          <Box
            d={{ base: "none", lg: "flex" }}
            flexGrow="1"
            flexShrink="1"
            justifyContent="center"
            alignItems="center"
            position="relative"
            ref={constraintsRef}
          >
            <ServicesBox
              bg="currentColor"
              borderRadius="30px"
              width="150px"
              height="150px"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                repeatDelay: 1,
              }}
            />
          </Box>
        </Flex>
      </Box>
      {/* Vision section */}
      <Box
        py={["12", "16", "20"]}
        as="section"
        position="relative"
        className="vision"
      >
        <Heading size="2xl">Vision</Heading>
        <Flex wrap="wrap">
          <Stack mt={[0, 0, "16"]} ml={[0, 0, "32"]}>
            <Text
              pt={["8", "8", "0"]}
              pb={["4", "4", "8"]}
              maxWidth={{ base: "100%", lg: "600px" }}
            >
              We believe your brand should have Beyoncé-like quality in it's
              presence on the internet. If someone finds your business on a
              screen, they should remember it. When they remember your brand and
              visit your company site, they should be impressed. When leads are
              impressed, they should have a high conversion rate and share your
              brand with friends, providing residual marketing.
            </Text>
            <Link href="/vision" _hover={{ textDecoration: "none" }}>
              <Button size="lg" rightIcon={<ArrowForwardIcon />}>
                Our vision
              </Button>
            </Link>
          </Stack>
          <Box
            d={{ base: "none", lg: "flex" }}
            flexGrow="1"
            flexShrink="1"
            justifyContent="center"
            alignItems="center"
            fontSize="10vmin"
            position="relative"
            className="ufo"
          >
            <div className="monster">
              <div className="body">
                <div className="ear"></div>
                <div className="ear"></div>
                <div className="vampi-mouth">
                  <div className="vampi-tooth"></div>
                </div>
              </div>
              <div className="eye-lid">
                <div className="eyes">
                  <div className="eye"></div>
                </div>
              </div>
            </div>
          </Box>
        </Flex>
      </Box>
      {/* Contact section  */}
      <Box py={["12", "16", "20"]} as="section" className="contact">
        <Heading size="2xl">Contact Us</Heading>
        <Flex
          mt={["16", "16", "24"]}
          mb={["8", "12", "20"]}
          direction="column"
          justify="center"
          align="center"
        >
          <Text as="span" color="brand.600">
            NEED SOMETHING?
          </Text>
          <ArrowLink
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
            />
          </ArrowLink>
        </Flex>
      </Box>
    </Layout>
  )
}

export default Index

// export const query = graphql`
//   query MyQuery {
//     file(relativePath: { eq: RyanHeadshot }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
