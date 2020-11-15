import React from "react"

import Layout from "../components/layout"
import Project from "../components/project"

import Pbhomes from "../assets/images/projects/pbh-desktop-phone-desk.jpg"
import Bishop from "../assets/images/projects/bishop-iMac-blue.png"
import Ravenous from "../assets/images/projects/ravenous-macbook-desk.png"
import Travel from "../assets/images/projects/travel-imac-laptop-light.png"
import Chiggy from "../assets/images/projects/chiggybank.jpg"
import { Stack, Heading, useColorMode } from "@chakra-ui/react"
import "../assets/projects.scss"
import SEO from "../components/seo"
import FeaturedImage from "../assets/images/pearson-digital-marketing.png"

const Projects = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <SEO
        title="Projects | Pearson Digital Marketing"
        description="Projects developed by Pearson Digital Marketing"
        image={FeaturedImage}
      />
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
          projLink="https://pacificbeachhomes.com/"
          desc="Pacific Beach Homes helps buyers and sellers in Pacific Beach, San Diego learn about the processes of buying and selling."
          imgSrc={Pbhomes}
          imgAlt="Pacific Beach Homes Real Estate"
        />
        <Project
          title="R.H. Bishop Books"
          projLink="https://www.rhbishopbooks.com/"
          desc="A modern comedic mystery series"
          imgSrc={Bishop}
          imgAlt="R.H. Bishop Books"
        />
        <Project
          title="Ravenous"
          projLink="https://ravenoussearch.netlify.app/"
          desc="Find food and other businesses nearby, ranked by reviews"
          imgSrc={Ravenous}
          imgAlt="Ravenous"
        />
        <Project
          title="Travel"
          projLink="https://travel.ryanpearson.website/"
          desc="View places and people of interest"
          imgSrc={Travel}
          imgAlt="Travel"
        />
        <Project
          title="Chiggy Bank"
          projLink="https://chiggybank.herokuapp.com/"
          desc="Chiggy Bank is a piggy bank for chickens. Test your theories on investing with fake money."
          imgSrc={Chiggy}
          imgAlt="Chiggy Bank"
        />
      </Stack>
    </Layout>
  )
}

export default Projects
