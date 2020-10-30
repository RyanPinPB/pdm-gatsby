import React from "react"

import { useColorMode, Heading, Flex } from "@chakra-ui/core"
import Layout from "../components/layout"
import FormikForm from "../components/FormikForm"
import "../assets/contact.scss"
import SEO from "../components/seo"

const Contact = () => {
  const { colorMode } = useColorMode()

  // const encode = (data) => {
  //   return Object.keys(data)
  //       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //       .join("&");
  // }

  const handleSubmit = (e) => {
    console.log("form submitted")
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact-form", ...this.state })
    // })
    //   .then(() => console.log("Form submitted successfully"))
    //   .catch(error => alert(error));

    e.preventDefault()
  }
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
        <FormikForm handleSubmit={handleSubmit} />
      </Flex>
    </Layout>
  )
}

export default Contact
