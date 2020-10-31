import React from "react"

import { useColorMode, Heading, Flex } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Thanks = () => {
  const { colorMode } = useColorMode()

  return (
    <Layout>
      <SEO
        title="Thanks | Pearson Digital Marketing"
        description="Form submission received. Thank you for contacting Pearson Digital Marketing."
        // image={FeaturedImage}
      />
      <Heading
        as="h1"
        id="thanks"
        position={{ base: "relative", md: "absolute" }}
        textAlign="center"
        color={{
          base: "",
          md:
            colorMode === "light" ? "rgba(0, 0, 0, 0)" : "rgba(255,255,255,1)",
        }}
        opacity={{ base: 1, md: ".03" }}
        lineHeight="1.1"
        top={{ base: "0", md: "50%" }}
        left={{ base: "0", md: "50%" }}
        transform={{ base: "translate3D(0)", md: "translate3D(-50%,-50%,0)" }}
      >
        THANK YOU
      </Heading>
      <Flex>Form submission received. Please continue to browse the site</Flex>
    </Layout>
  )
}

export default Thanks
