import React from "react"

import Layout from "../components/layout"
import Project from "../components/project"

import Pbhomes from "../assets/images/projects/pbh-desktop-phone-desk.jpg"
import Bishop from "../assets/images/projects/bishop-iMac-blue.png"
import Ravenous from "../assets/images/projects/ravenous-macbook-desk.png"
import Travel from "../assets/images/projects/travel-imac-laptop-light.png"
import { Stack, Heading, useColorMode } from "@chakra-ui/core"
import "../assets/projects.scss"

const Projects = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <Heading
        as="h1"
        id="projects-watermark"
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
        Projects
      </Heading>
      <Stack mt={12} spacing={12}>
        <Project
          title="Pacific Beach Homes"
          projLink="/"
          desc="The future can be even brighter but a goal without a plan is just a wish"
          imgSrc={Pbhomes}
          imgAlt="Pacific Beach Homes Real Estate"
        />
        <Project
          title="R.H. Bishop Books"
          projLink="/"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
          imgSrc={Bishop}
          imgAlt="R.H. Bishop Books"
        />
        <Project
          title="Ravenous"
          projLink="/"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
          imgSrc={Ravenous}
          imgAlt="Ravenous"
        />
        <Project
          title="Travel"
          projLink="/"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
          imgSrc={Travel}
          imgAlt="Travel"
        />
      </Stack>
    </Layout>
  )
}

export default Projects
