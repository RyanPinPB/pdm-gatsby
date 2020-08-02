import React, { Fragment } from "react"
import {
  Flex,
  Stack,
  Link,
  Text,
  Divider,
  List,
  ListItem,
  Box,
} from "@chakra-ui/core"

const Footer = () => {
  return (
    <Fragment>
      <Divider mb={["4", "4", "12"]} />
      <Flex
        wrap="wrap"
        justify="space-between"
        id="footer"
        my={["16", "16", "24"]}
        px={["4", "4", "12", "20"]}
        as="footer"
      >
        <Box as="nav" className="footer-nav" mb={["16", "16", "0"]}>
          <List className="footer-nav-list" styleType="none">
            <ListItem>
              <Link href="/projects">Projects</Link>
            </ListItem>
            <ListItem>
              <Link href="/services">Services</Link>
            </ListItem>
            <ListItem>
              <Link href="/vision">Vision</Link>
            </ListItem>
            <ListItem>
              <Link href="/contact">Contact</Link>
            </ListItem>
          </List>
        </Box>
        <Stack>
          <Text fontWeight="bold">Pearson Digital Marketing</Text>
          <Text>Pacific Beach, San Diego CA</Text>
          <Link href="mailto:ryanpinpb@gmail.com">RyanPinPB@gmail.com</Link>
          <Link href="tel:8587408495">(858) 740-8495</Link>
        </Stack>
      </Flex>
    </Fragment>
  )
}

export default Footer
