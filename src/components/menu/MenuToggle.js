import * as React from "react"
// import { motion } from "framer-motion"
import { Button, useColorMode } from "@chakra-ui/core"

const MenuToggle = ({ menuOpen, toggle }) => {
  const { colorMode } = useColorMode()

  const buttonColor =
    colorMode === "dark"
      ? menuOpen
        ? "rgba(0, 0, 0, 1)"
        : "rgba(255,255,255, 1)"
      : !menuOpen
      ? "rgba(26, 32, 44, 1)"
      : "rgba(255,255,255, 1)"

  // const Path = (props) => (
  //   <motion.path
  //     fill="transparent"
  //     strokeWidth="3"
  //     stroke={hamburgerColor}
  //     strokeLinecap="round"
  //     {...props}
  //   />
  // )

  const menuClickHandler = () => {
    if (menuOpen) {
      document.querySelector(".motion-menu-nav").classList.remove("active")
      document.querySelector(".site-header").classList.remove("menu-open")
    } else {
      document.querySelector(".site-header").classList.add("menu-open")
      document.querySelector(".motion-menu-nav").classList.add("active")
    }

    toggle()
  }

  return (
    <Button
      bg="transparent"
      cursor="pointer"
      mt="0px"
      color={buttonColor}
      height="25px"
      pl="1"
      pr="1"
      mr="4"
      lineHeight="1"
      zIndex="10"
      onClick={menuClickHandler}
    >
      MENU
      {/* <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 5 L 20 5", transform: "rotate(0deg)" },
            open: { d: "M 5 18.5 L 19 4.5" },
          }}
        />
        <Path
          d="M 2 12 L 20 12"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 19 L 20 19" },
            open: { d: "M 5 4.5 L 19 18.346" },
          }}
        />
      </svg> */}
    </Button>
  )
}
export default MenuToggle
