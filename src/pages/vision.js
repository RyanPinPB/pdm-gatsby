import React from "react"

import Layout from "../components/layout"
import { Text, Heading, Stack, Flex, useColorMode } from "@chakra-ui/react"
import "../assets/vision.scss"
import SEO from "../components/seo"
import FeaturedImage from "../assets/images/pearson-digital-marketing.png"

const Vision = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <SEO
        title="Vision | Pearson Digital Marketing"
        description="Pearson Digital Marketing's vision for helping business owners achieve an unforgettable digital presence."
        image={FeaturedImage}
      />
      <Heading
        as="h1"
        id="vision-watermark"
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
        Vision
      </Heading>
      <Stack pt={["12", "16", "20"]} spacing={["12", "16", "20"]}>
        <Flex as="section" direction="column">
          <Heading>Easy</Heading>
          <Text maxWidth="600px">
            Running a business takes up so much time. Our goal is to make the
            digital part of your business easy. Remove digital marketing from
            your "To-do list" and focus your time doing what you love: helping
            people with your product or service.
          </Text>
        </Flex>
        <Flex
          as="section"
          direction="column"
          alignItems={["flex-start", "flex-start", "flex-end"]}
        >
          <Heading>Productive</Heading>
          <Text maxWidth="600px">
            Get results and a digital presence that you can be proud of. There
            are so many aspects of the digital world that can be a waste of
            time. Hire experts to make sure you are getting results and not 5
            hours spent on a facebook post that gets 1 like.
          </Text>
        </Flex>
        <Flex as="section" direction="column">
          <Heading>Beautiful</Heading>
          <Text maxWidth="600px">
            You are going to LOVE your new website, content, or email campaigns.
            If it looks boring or outdated, it's a waste of everyone's time. You
            will be proud of what your customers interact with.
          </Text>
        </Flex>
        <Flex
          as="section"
          direction="column"
          alignItems={["flex-start", "flex-start", "flex-end"]}
        >
          <Heading>Helpful</Heading>
          <Text maxWidth="600px">
            We want to help you help your customers. We respond promptly and
            believe in education first, so that everyone is on the same page.
            You will be made aware of current tasks and realistic goals for
            every project.
          </Text>
        </Flex>
        <Flex as="section" direction="column">
          <Heading>Trustworthy</Heading>
          <Text maxWidth="600px">
            If you want an honest opinion, we will give it to you. If we think a
            keyword is too hard to rank for with your budget, we will tell you.
            If you are looking for a specific type of software integrated into
            your website and we cant build it, we will tell you.
          </Text>
        </Flex>
        <Flex
          as="section"
          direction="column"
          alignItems={["flex-start", "flex-start", "flex-end"]}
        >
          <Heading>Resilient</Heading>
          <Text maxWidth="600px">
            High quality websites and content can last for years. While the web
            is constantly changing and it's important to adapt, we will start
            with cornerstone evergreen content and a website that is built to
            withstand the tests of digital time.
          </Text>
        </Flex>
      </Stack>
    </Layout>
  )
}

export default Vision
