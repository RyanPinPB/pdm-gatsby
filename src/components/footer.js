import React, { Fragment } from "react"
import {
  Flex,
  Stack,
  Text,
  Divider,
  List,
  ListItem,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/core"

// import { SiteLink } from "./Link"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Fragment>
      <Divider mb={["4", "4", "12"]} />
      <Flex
        wrap="wrap"
        justify="space-between"
        id="footer"
        py={["16", "16", "24"]}
        px={["4", "4", "12", "20"]}
        maxW={{ xl: "1525px" }}
        mx={{ xl: "auto" }}
        as="footer"
      >
        <Box as="nav" className="footer-nav" mb={["16", "16", "0"]}>
          <List pr="4" className="footer-nav-list" styleType="none">
            <ListItem>
              <Link to="/projects">Projects</Link>
            </ListItem>
            <ListItem>
              <Link to="/services">Services</Link>
            </ListItem>
            <ListItem>
              <Link to="/vision">Vision</Link>
            </ListItem>
            <ListItem>
              <Link to="/contact">Contact</Link>
            </ListItem>
          </List>
        </Box>
        <Stack>
          <Text fontWeight="bold">Pearson Digital Marketing</Text>
          <Text>Pacific Beach, San Diego CA</Text>
          <ChakraLink href="mailto:Ryan@PearsonDigitalMarketing.com">
            Ryan@PearsonDigitalMarketing.com
          </ChakraLink>
          <ChakraLink href="tel:8587408495">(858) 740-8495</ChakraLink>
        </Stack>
      </Flex>
    </Fragment>
  )
}

export default Footer
