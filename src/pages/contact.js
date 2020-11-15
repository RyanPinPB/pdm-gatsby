import React from "react"

import { Heading, Flex } from "@chakra-ui/react"
import Layout from "../components/layout"
import FormikForm from "../components/FormikForm"
import "../assets/contact.scss"
import SEO from "../components/seo"
import FeaturedImage from "../assets/images/pearson-digital-marketing.png"

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact | Pearson Digital Marketing"
        description="Contact Pearson Digital Marketing in San Diego for web development or digital marketing services"
        image={FeaturedImage}
      />
      <Heading
        as="h1"
        id="contact-us"
        position={{ base: "relative", md: "absolute" }}
        textAlign="center"
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
