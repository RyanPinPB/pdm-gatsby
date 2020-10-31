import React from "react"

import { useColorMode, Heading, Flex } from "@chakra-ui/core"
import Layout from "../components/layout"
import FormikForm from "../components/FormikForm"
import "../assets/contact.scss"
import SEO from "../components/seo"

const Contact = () => {
  const { colorMode } = useColorMode()

  return (
    <Layout>
      <SEO
        title="Contact | Pearson Digital Marketing"
        description="Contact Pearson Digital Marketing for web development or digital marketing services"
        // image={FeaturedImage}
      />
      <Heading
        as="h1"
        id="contact-us"
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
        CONTACT US
      </Heading>
      <Flex pb="20" justify="center" align="center">
        <FormikForm />
      </Flex>
    </Layout>
  )
}

export default Contact
