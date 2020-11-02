import React from "react"
import Layout from "../components/layout"
import { Text, Heading, Flex, Stack, useColorMode } from "@chakra-ui/core"
import "../assets/services.scss"
import SEO from "../components/seo"
import FeaturedImage from "../assets/images/pearson-digital-marketing.png"

const Services = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <SEO
        title="Services | Pearson Digital Marketing"
        description="New websites, digital campaigns to help business owners get customers, branding, PPC - Pearson Digital Marketing gives free consultations"
        image={FeaturedImage}
      />
      <Heading
        as="h1"
        id="services-watermark"
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
        Services
      </Heading>
      <Stack pt={["12", "16", "20"]} spacing={["12", "16", "20"]}>
        <Flex as="section" direction="column">
          <Heading>Free Consultation</Heading>
          <Text maxWidth="600px">
            Talk to us about your situation and get our honest and free opinion.
            We have over 15 years of marketing experience. It doesn't matter if
            you are a small business trying to survive or a big corporations who
            wants to grow and become more efficient, we can help you.
          </Text>
        </Flex>
        <Flex as="section" direction="column" alignItems="flex-end">
          <Heading>Web Development</Heading>
          <Text maxWidth="600px">
            Your website is one of the first things your customer's will look at
            to help them decide if they want to work with you. Web development
            is constantly changing and making sure your customers interact with
            a beautiful, helpful and persuasive website can change the entire
            image of your business.
          </Text>
        </Flex>
        <Flex as="section" direction="column">
          <Heading>Content</Heading>
          <Text maxWidth="600px">
            Content is king when it comes to digital marketing. If your brand
            new website doesn't have text, images and/or video that helps and
            persuades a user and google to like your business, you're wasting
            people's time.
          </Text>
        </Flex>
        <Flex as="section" direction="column" alignItems="flex-end">
          <Heading>SEO</Heading>
          <Text maxWidth="600px">
            Search engine optimization helps your customers find your content
            and website. Each section of each page of your website should be
            optimized so that the content is helpful for users and so that
            search engines can easily understand and recommend it for search
            queries.
          </Text>
        </Flex>
        <Flex as="section" direction="column">
          <Heading>Ads - Lead Generation</Heading>
          <Text maxWidth="600px">
            Ads can land customers on your site quickly and are used to increase
            phone calls, leads and sales. Ads are easily scalable by adjusting
            your budget and can be optimized for specific audiences. There are
            many platforms for ads, but the common ones are: Google, Facebook,
            Twitter, Instagram and Amazon.
          </Text>
        </Flex>
        <Flex as="section" direction="column" alignItems="flex-end">
          <Heading>Email Marketing</Heading>
          <Text maxWidth="600px">
            Once you have a database of clients and leads, email marketing is a
            cost efficient method to keep your brand top of mind. It doesn't
            matter if you are a service based business or an ecommerce site,
            email promotion can get fast results and direct clicks to your
            website.
          </Text>
        </Flex>
      </Stack>
    </Layout>
  )
}

export default Services
