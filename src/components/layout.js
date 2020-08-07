import React, { Fragment, useEffect, useState } from "react"
import { Box } from "@chakra-ui/core"
import Scrollbar from "smooth-scrollbar"

import Social from "./social"
import Header from "./header"
import Footer from "./footer"
import "../assets/style.css"

const Layout = ({ children }) => {
  const [headerActive, setHeaderActive] = useState(false)

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
    <Fragment>
      <Header transformedHeader={headerActive} />
      <Social />
      <div
        id="smooth-scroll"
        style={{
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <Box
          as="main"
          className="page-content"
          px={["4", "4", "12", "20"]}
          mx={{ xl: "auto" }}
          maxW={{ xl: "1525px" }}
        >
          {children}
        </Box>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
