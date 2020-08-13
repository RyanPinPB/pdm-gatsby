import React, { useEffect, useState } from "react"
import { Box, CSSReset, ThemeProvider } from "@chakra-ui/core"
import Scrollbar from "smooth-scrollbar"
import { motion } from "framer-motion"

import customTheme from "../theme/theme"

import Social from "./social"
import Header from "./header"
import Footer from "./footer"
import "../assets/style.css"
// import Loader from "./Loader"

const ScrollContainer = motion.custom(Box)
const ContentContainer = motion.custom(Box)

const Layout = ({ children }) => {
  const [headerActive, setHeaderActive] = useState(false)

  const pageVariants = {
    hidden: {
      opacity: 0,
      // transform: "translateY(100%)",
    },
    visible: {
      opacity: 1,
      // transform: "translateY(0%)",
      transition: { delay: 0.25, duration: 1 },
    },
  }

  useEffect(() => {
    // allow svg logo to transform outside of it's contianer
    document.querySelector("svg").style.overflow = "visible"

    // activate custom smooth scroll
    const customScroll = Scrollbar.init(
      document.querySelector("#smooth-scroll"),
      {
        damping: 0.1,
        renderByPixels: true,
      }
    )

    // function to trigger logo change at scroll y offet of 60
    const handleScroll = () => {
      let scrollPosition = customScroll.offset.y
      if (scrollPosition > 60) {
        document.querySelector(".site-header").classList.add("active")
        setHeaderActive(true)
      } else {
        document.querySelector(".site-header").classList.remove("active")
        setHeaderActive(false)
      }
    }

    //add event listener to custom scroll
    customScroll.addListener(handleScroll)

    return () => {
      customScroll.removeListener(handleScroll)
    }
  }, [])

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {/* <Loader /> */}
      <Header transformedHeader={headerActive} />
      <Social />
      <ScrollContainer
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        id="smooth-scroll"
        h="100vh"
        w="100vw"
        position="relative"
      >
        <ContentContainer
          as="main"
          position="relative"
          className="page-content"
          // pt={["20", "20", "32", "32", "40"]}
          pt="20"
          px={["4", "4", "12", "20"]}
          mx={{ xl: "auto" }}
          maxW={{ xl: "1525px" }}
        >
          {children}
        </ContentContainer>
        <Footer />
      </ScrollContainer>
    </ThemeProvider>
  )
}

export default Layout
