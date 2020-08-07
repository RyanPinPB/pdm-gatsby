import * as React from "react"
import { motion } from "framer-motion"
import { MenuItem } from "./MenuItem"
import { List } from "@chakra-ui/core"

const variants = {
  open: {
    display: "flex",
    transition: {
      display: { delay: 0 },
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    display: "none",
    transition: {
      display: { delay: 1 },
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const NavList = motion.custom(List)

const Navigation = () => {
  return (
    <NavList position="relative" flexDirection="column" variants={variants}>
      {pages.map((page, index) => (
        <MenuItem i={index} key={index}>
          {page}
        </MenuItem>
      ))}

      {/* {itemIds.map((i) => (
        <MenuItem i={i} key={i}>
          Testing
        </MenuItem>
      ))} */}
    </NavList>
  )
}

// const itemIds = [0, 1, 2, 3, 4]

const pages = ["home", "projects", "services", "vision", "contact"]

// const pages = [
//   { name: "Home", path: "/" },
//   { name: "Projects", path: "/projects" },
//   { name: "Services", path: "/services" },
//   { name: "Vision", path: "/vision" },
//   { name: "Contact", path: "/contact" },
// ]

// const paths = ["/", "/projects", "/services", "/vision", "/contact"]

export default Navigation
