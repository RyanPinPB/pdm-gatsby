import React from "react"
import { Heading, Flex } from "@chakra-ui/react"
import Layout from "../components/layout"
import { Image } from "@chakra-ui/react"
import Bernie from "../assets/images/bernie.png"

const NotFound = (data) => (
  <Layout>
    <Flex direction="column" align="center" justify="center" py="20">
      <Heading as="h1" size="xl">
        Sorry, we can't find that page
      </Heading>
      <Image
        boxSize="250px"
        objectFit="contain"
        src={Bernie}
        alt="Bernie Sanders innoguration"
      />
    </Flex>
  </Layout>
)

export default NotFound
