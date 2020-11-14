import React, { useEffect, useRef } from "react"
import {
  Box,
  Text,
  useColorMode,
  Heading,
  Image,
  Stack,
  ButtonGroup,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/core"
// import Img from "gatsby-image"
import { motion } from "framer-motion"
import "../assets/home.scss"
import { SiteLink as Link } from "../components/Link"
import Layout from "../components/layout"
import Project from "../components/project"
import useWindowDimensions from "../utils/window-dimensions"
import SEO from "../components/seo"

//images for intro section and project section
import Pbhomes from "../assets/images/projects/pbh-desktop-phone-desk.jpg"
import Bishop from "../assets/images/projects/bishop-iMac-blue.png"
import Ravenous from "../assets/images/projects/ravenous-macbook-desk.png"
import Travel from "../assets/images/projects/travel-imac-laptop-light.png"
import Chiggy from "../assets/images/projects/chiggybank.jpg"
import SamHeadshot from "../assets/images/sam-headshot-fade.png"
import RyanHeadshot from "../assets/images/ryan-headshot-fade.png"
import FeaturedImage from "../assets/images/pearson-digital-marketing.png"

const ArrowLink = motion.custom(Link)
const WiggleArrowIcon = motion.custom(Icon)
const ServicesBox = motion.custom(Box)

const Index = () => {
  const { colorMode } = useColorMode()
  const constraintsRef = useRef(null)
  const { width } = useWindowDimensions()
  // setting up monster's eye movement in Vision section
  // console.log("index.js colorMode=" + colorMode)
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

  const bgColor = {
    light: "#EDF2F7",
    dark: "rgba(255,255,255,0.08)",
  }
  const color = { light: "brand.400", dark: "brand.900" }

  return (
    <Layout>
      <SEO
        title="Web Development and Marketing | Pearson Digital Marketing"
        description="Need a new website? Need leads? Free consultation for learning about what options are available"
        // image="/assets/images/pearson-digital-marketing.png"
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
            align="baseline"
            as="figure"
            maxW="225px"
            flex="1 1 13%"
          >
            <Image
              w="100%"
              h="auto"
              objectFit="contain"
              alt="Sam Pearson"
              src={SamHeadshot}
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
            {/* The right Pearson for the job. */}
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
          <ButtonGroup spacing="8" py="4">
            <Link href="/projects" _hover={{ textDecoration: "none" }}>
              <Button
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                size="lg"
              >
                View Projects
              </Button>
            </Link>
            <Link
              className="contact-button"
              aria-label="Contact Us"
              href="/contact"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                d={{ base: "none", md: "inline-flex" }}
                size="lg"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
              >
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
            objectFit="contain"
            alt="Sam Pearson"
            src={SamHeadshot}
          />
        </Flex>
      </Flex>
      {/* Project section  */}
      <Box py={["12", "16", "20"]} as="section" className="projects">
        <Flex as="header" justify="space-between" align="center">
          <Heading size="2xl">Projects</Heading>
          <Link href="/projects" _hover={{ textDecoration: "none" }}>
            <Button
              rightIcon="arrow-forward"
              size="lg"
              bg={bgColor[colorMode]}
              color={color[colorMode]}
            >
              View all
            </Button>
          </Link>
        </Flex>
        <Stack mt={12} spacing={12}>
          <Project
            title="Pacific Beach Homes"
            projLink="https://pacificbeachhomes.com"
            desc="The future can be even brighter but a goal without a plan is just a wish"
            imgSrc={Pbhomes}
            imgAlt="Pacific Beach Homes Real Estate"
          />
          <Project
            title="R.H. Bishop Books"
            projLink="https://www.rhbishopbooks.com/"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
            imgSrc={Bishop}
            imgAlt="R.H. Bishop Books"
          />
          <Project
            title="Ravenous"
            projLink="https://ravenoussearch.netlify.app/"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
            imgSrc={Ravenous}
            imgAlt="Ravenous"
          />
          <Project
            title="Travel"
            projLink="https://travel.ryanpearson.website/"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
            imgSrc={Travel}
            imgAlt="Travel"
          />
          <Project
            title="Chiggy Bank"
            projLink="https://chiggybank.herokuapp.com/"
            desc="Chiggy Bank is a piggy bank for chickens. Test your theories on investing with fake money."
            imgSrc={Chiggy}
            imgAlt="Chiggy Bank"
          />
        </Stack>
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
              We provide custom website development for any type of business.
              This includes a free consultation and feedback on your current
              digital footprint. After you have a beautiful and fast website, we
              provide content, SEO and lead acquisition services. This can
              include Google Ads, Facebook Ads, social media management and
              landing page configuration.
            </Text>
            <Link href="/services" _hover={{ textDecoration: "none" }}>
              <Button
                size="lg"
                rightIcon="arrow-forward"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
              >
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
              bg={colorMode === "light" ? "black" : "white"}
              // cursor="grab"
              borderRadius="30px"
              width="150px"
              height="150px"
              // drag
              // dragConstraints={constraintsRef}
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
              <Button
                size="lg"
                rightIcon="arrow-forward"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
              >
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
              name="arrow-forward"
            />
          </ArrowLink>
        </Flex>
      </Box>
    </Layout>
  )
}

export default Index
