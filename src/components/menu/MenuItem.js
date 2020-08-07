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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

export const MenuItem = ({ i, children }) => {
  const { colorMode } = useColorMode()
  const style = { border: `2px solid ${colors[i]}` }
  return (
    <motion.li
      className="motion-menu-li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style} />
      <LinkMotion
        // href={`${url[i]}`}
        // href="/"
        color={colorMode === "light" ? "white" : "black"}
        width="fit-content"
        fontSize={["3rem", "4rem", "5rem", "6rem"]}
        fontWeight="700"
        flex="1"
      >
        {children}
      </LinkMotion>
    </motion.li>
  )
}
