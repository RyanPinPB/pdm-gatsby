import React from "react"

import { useColorMode, Heading, Flex } from "@chakra-ui/core"
import Layout from "../components/layout"
import FormikForm from "../components/FormikForm"
import "../assets/contact.scss"

const Contact = () => {
  const { colorMode } = useColorMode()
  const handleSubmit = () => {
    console.log("form submitted")
  }
  return (
    <Layout>
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
        <FormikForm handleSubmit={handleSubmit} />
      </Flex>
    </Layout>
  )
}

export default Contact
