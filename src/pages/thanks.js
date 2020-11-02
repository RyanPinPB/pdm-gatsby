import React from "react"

import { Heading, Flex } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedImage from "../assets/images/pearson-digital-marketing.png"

const Thanks = () => {
  return (
    <Layout>
      <SEO
        title="Thanks | Pearson Digital Marketing"
        description="Form submission received. Thank you for contacting Pearson Digital Marketing."
        image={FeaturedImage}
      />
      <Heading
        as="h1"
        pb="4"
        // position={{ base: "relative", md: "absolute" }}
        // position={{ base: "relative", md: "absolute" }}
        textAlign="center"
        // color={{
        //   base: "",
        //   md:
        //     colorMode === "light" ? "rgba(0, 0, 0, 0)" : "rgba(255,255,255,1)",
        // }}
        // opacity={{ base: 1, md: ".03" }}
        lineHeight="1.1"
        // top={{ base: "0", md: "50%" }}
        // left={{ base: "0", md: "50%" }}
        // transform={{ base: "translate3D(0)", md: "translate3D(-50%,-50%,0)" }}
      >
        THANK YOU
      </Heading>
      <Flex justify="center" textAlign="center">
        Form submission received, we will reach out to you soon.
      </Flex>
    </Layout>
  )
}

export default Thanks
