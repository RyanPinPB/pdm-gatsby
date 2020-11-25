import React from "react"
import { graphql } from "gatsby"
import { Stack, Heading } from "@chakra-ui/react"

import Layout from "../components/layout"
import Project from "../components/project"
import "../assets/projects.scss"
import SEO from "../components/seo"
import FeaturedImage from "../assets/images/pearson-digital-marketing.png"

export const query = graphql`
  query {
    pbHomes: file(relativePath: { eq: "projects/pbh-desktop-phone-desk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bishop: file(relativePath: { eq: "projects/bishop-iMac-blue.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ravenous: file(relativePath: { eq: "projects/ravenous-macbook-desk.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    travel: file(
      relativePath: { eq: "projects/travel-imac-laptop-light.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    chiggy: file(relativePath: { eq: "projects/chiggybank.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Projects = ({ data }) => {
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
        opacity={{ base: 1, md: ".03" }}
        lineHeight="1.1"
        top={{ base: "0", md: "50%" }}
        left={{ base: "0", md: "50%" }}
        transform={{ base: "translate3D(0)", md: "translate3D(-50%,-50%,0)" }}
      >
        Projects
      </Heading>
      <Stack my={12} spacing={12}>
        <Project
          title="Pacific Beach Homes"
          projLink="https://pacificbeachhomes.com"
          desc="The future can be even brighter but a goal without a plan is just a wish"
          imgSrc={data.pbHomes.childImageSharp.fluid}
          imgAlt="Pacific Beach Homes Real Estate"
        />
        <Project
          title="R.H. Bishop Books"
          projLink="https://www.rhbishopbooks.com/"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
          imgSrc={data.bishop.childImageSharp.fluid}
          imgAlt="R.H. Bishop Books"
        />
        <Project
          title="Ravenous"
          projLink="https://ravenoussearch.netlify.app/"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
          imgSrc={data.ravenous.childImageSharp.fluid}
          imgAlt="Ravenous"
        />
        <Project
          title="Travel"
          projLink="https://travel.ryanpearson.website/"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
          imgSrc={data.travel.childImageSharp.fluid}
          imgAlt="Travel"
        />
        <Project
          title="Chiggy Bank"
          projLink="https://chiggybank.herokuapp.com/"
          desc="Chiggy Bank is a piggy bank for chickens. Test your theories on investing with fake money."
          imgSrc={data.chiggy.childImageSharp.fluid}
          imgAlt="Chiggy Bank"
        />
      </Stack>
    </Layout>
  )
}

export default Projects
