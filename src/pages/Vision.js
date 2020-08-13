import React from "react"

import Layout from "../components/layout"
import { Text, Heading, Stack, Flex, useColorMode } from "@chakra-ui/core"
import "../assets/vision.scss"
const Vision = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod
            tenetur? Ullam natus est vero cumque, quaerat officia harum.
            Molestias ea enim exercitationem voluptatibus illum vero impedit
            repellendus velit, consequatur quam quidem iure repudiandae laborum
            minus. Dicta eos iusto sed.
          </Text>
        </Flex>
        <Flex as="section" direction="column">
          <Heading>Productive</Heading>
          <Text maxWidth="600px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod
            tenetur? Ullam natus est vero cumque, quaerat officia harum.
            Molestias ea enim exercitationem voluptatibus illum vero impedit
            repellendus velit, consequatur quam quidem iure repudiandae laborum
            minus. Dicta eos iusto sed.
          </Text>
        </Flex>
        <Flex as="section" direction="column">
          <Heading>Beautiful</Heading>
          <Text maxWidth="600px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod
            tenetur? Ullam natus est vero cumque, quaerat officia harum.
            Molestias ea enim exercitationem voluptatibus illum vero impedit
            repellendus velit, consequatur quam quidem iure repudiandae laborum
            minus. Dicta eos iusto sed.
          </Text>
        </Flex>
        <Flex as="section" direction="column">
          <Heading>Helpful</Heading>
          <Text maxWidth="600px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod
            tenetur? Ullam natus est vero cumque, quaerat officia harum.
            Molestias ea enim exercitationem voluptatibus illum vero impedit
            repellendus velit, consequatur quam quidem iure repudiandae laborum
            minus. Dicta eos iusto sed.
          </Text>
        </Flex>
        <Flex as="section" direction="column">
          <Heading>Benevolent</Heading>
          <Text maxWidth="600px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod
            tenetur? Ullam natus est vero cumque, quaerat officia harum.
            Molestias ea enim exercitationem voluptatibus illum vero impedit
            repellendus velit, consequatur quam quidem iure repudiandae laborum
            minus. Dicta eos iusto sed.
          </Text>
        </Flex>
        <Flex as="section" direction="column">
          <Heading>Resilient</Heading>
          <Text maxWidth="600px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod
            tenetur? Ullam natus est vero cumque, quaerat officia harum.
            Molestias ea enim exercitationem voluptatibus illum vero impedit
            repellendus velit, consequatur quam quidem iure repudiandae laborum
            minus. Dicta eos iusto sed.
          </Text>
        </Flex>
      </Stack>
    </Layout>
  )
}

export default Vision
