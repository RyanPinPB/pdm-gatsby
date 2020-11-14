import * as React from "react"
import { motion } from "framer-motion"
import { useColorMode, Link } from "@chakra-ui/core"

// import Link from "../Link"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const LinkMotion = motion.custom(Link)

//color of the menu items list decoration
// const colors = [
//   "#FF008C",
//   "#D309E1",
//   "#AC1AFF",
//   "#8800FF",
//   "#5500FF",
//   "#0000FF",
// ]
const colors = [
  "rgba(177, 177, 177, 1)",
  "rgba(157, 157, 157, 1)",
  "rgba(137, 137, 137, 1)",
  "rgba(117, 117, 117, 1)",
  "rgba(97, 97, 97, 1)",
  "rgba(77, 77, 77, 1)",
]

export const MenuItem = ({ i, children, url, toggleMenu }) => {
  const { colorMode } = useColorMode()
  const style = { border: `2px solid ${colors[i]}` }

  const closeMenu = () => {
    const social_buttons = document.querySelectorAll(".social-button")
    social_buttons.forEach((button) => {
      colorMode === "dark"
        ? (button.style.stroke = "white")
        : (button.style.stroke = "black")
    })

    document.querySelector(".motion-menu-nav").classList.remove("active")
    document.querySelector(".site-header").classList.remove("menu-open")
    document.querySelector(".color-mode-toggle").style.visibility = "unset"

    toggleMenu()
  }

  return (
    <motion.li
      className="motion-menu-li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style} />
      <LinkMotion
        href={url}
        color={colorMode === "light" ? "white" : "black"}
        width="fit-content"
        fontSize={["3rem", "4rem", "5rem", "6rem"]}
        fontWeight="700"
        textTransform="uppercase"
        flex="1"
        onClick={closeMenu}
      >
        {children}
      </LinkMotion>
    </motion.li>
  )
}
