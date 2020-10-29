import * as React from "react"
import { motion } from "framer-motion"
import { MenuItem } from "./MenuItem"
import { List } from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../../utils/get-url-path"

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
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <NavList position="relative" flexDirection="column" variants={variants}>
      {wpMenu.menuItems.nodes.map((page, index) => {
        if (page.parentId) {
          return null
        }

        const path = page?.connectedNode?.node?.uri ?? page.url
        return (
          <MenuItem i={index} key={index} url={normalizePath(path)}>
            {page.label}
          </MenuItem>
        )
      })}
    </NavList>
  )
}

export default Navigation
