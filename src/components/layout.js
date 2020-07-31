import React, { Fragment, useEffect } from "react"
import { Box } from "@chakra-ui/core"
// import Scrollbar from "smooth-scrollbar"

import Social from "./social"
import Header from "./header"

import "../assets/style.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  // Triggers for smooth scrolling

  // useEffect(() => {
  //   Scrollbar.init(document.querySelector("#smooth-scroll"), {
  //     damping: 0.1,
  //     renderByPixels: true,
  //   })

  //   document
  //     .body
  //     .addEventListener("scroll", handleScroll)

  //   document
  //     .querySelector(".scroll-content")
  //     .addEventListener("change", () => console.log("scrolling"))
  //   return () => {
  //     document
  //       .querySelector(".scroll-content")
  //       .removeEventListener("change", console.log("scrolling"))
  //   }
  // }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    document.querySelector("svg").style.overflow = "visible"
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    let scrollPosition = window.scrollY
    if (scrollPosition > 60) {
      console.log("add active")
      document.querySelector(".site-header").classList.add("active")
    } else {
      console.log("remove active")
      document.querySelector(".site-header").classList.remove("active")
    }
  }

  return (
    <Fragment>
      <Header />
      <div
        id="smooth-scroll"
        style={{
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <Box as="main" mx="16" mb={100}>
          {children}
        </Box>
        <Footer />
      </div>
      <Box as="aside">
        <Social />
      </Box>
    </Fragment>
  )
}

export default Layout
