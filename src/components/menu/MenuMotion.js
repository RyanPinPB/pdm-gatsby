import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useColorMode } from "@chakra-ui/core"

import useWindowDimensions from "../../utils/window-dimensions"
import Navigation from "./Navigation.js"
import "./menu-styles.css"

const MenuMotion = (props) => {
  const [circleOrigin, setCircleOrigin] = useState("26px 24px")
  const containerRef = useRef(null)
  const { height } = useWindowDimensions()
  const { colorMode } = useColorMode()

  // adjusting menu background color by color mode
  const sidebarColor =
    colorMode === "dark" ? "rgba(255,255,255,.8)" : "rgba(26, 32, 44, .8)"

  // define animation for the background
  const sidebar = {
    open: {
      clipPath: `circle(${height * 2 + 200}px at ${circleOrigin})`,
      backgroundColor: sidebarColor,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: `circle(0px at ${circleOrigin})`,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  useEffect(() => {
    //find the circle part of the logo
    const logoCircle = document.querySelector(".logo-circle")
    setTimeout(() => {
      // get x and y positions of the logo circle
      const logoCircleXPosition =
        Math.round(logoCircle.getBoundingClientRect().x) + 6.5
      //adding 6.5px to each x and y position to get approximate center of circle
      const logoCircleYPosition =
        Math.round(logoCircle.getBoundingClientRect().y) + 6.5
      // update location of logo circle each change of header state
      setCircleOrigin(`${logoCircleXPosition}px ${logoCircleYPosition}px`)
      // find circle location after 1 second due to the animation timing of the header logo
    }, 1000)
  }, [props.headerActive])

  return (
    <motion.nav
      // className="motion-menu-nav"
      position="absolute"
      width="100vw"
      height="100vh"
      d="flex"
      justifyContent="center"
      alignItems="center"
      initial={false}
      animate={props.menuOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="menu-background" variants={sidebar} />
      <Navigation />
    </motion.nav>
  )
}

export default MenuMotion
