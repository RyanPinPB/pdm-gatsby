import React from "react"
import { Link, Heading, AspectRatio, Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Img from "gatsby-image"

const MotionButton = motion.custom(Button)

const Project = ({ title, projLink, desc, imgSrc, imgAlt, ...rest }) => {
  return (
    <Link
      className={`project-container`}
      href={projLink}
      isExternal
      position="relative"
      shadow="md"
      {...rest}
    >
      <Heading
        as="h3"
        zIndex="2"
        color="brand.900"
        bg={{ base: "rgba(26, 32, 44, .8)", md: "rgba(26, 32, 44, 0)" }}
        position="absolute"
        top={{ base: "0", md: "5" }}
        py={{ base: "4", md: "0" }}
        textAlign={{ base: "center", md: "unset" }}
        left={{ base: "0", md: "5" }}
        w={{ base: "100%", md: "unset" }}
        fontSize="2xl"
        fontWeight="900"
      >
        {title}
      </Heading>
      <AspectRatio as="figure" maxW="100%" ratio={0.75}>
        <Img
          className="project-image"
          fluid={imgSrc}
          alt={imgAlt}
          style={{
            objectFit: "cover",
            maxWidth: "100%",
            position: "aboslute",
          }}
        />
      </AspectRatio>
      <MotionButton
        bg="rgba(26, 32, 44, .8)"
        color="white"
        zIndex="2"
        position="absolute"
        bottom="5"
        left="5"
        size="lg"
        transition=" backgroundColor .250s ease-in-out, transform 0s linear"
        _hover={{ bg: "rgba(26, 32, 44, .7)" }}
        _active={{ bg: "rgba(26, 32, 44, 1)" }}
      >
        View
      </MotionButton>
    </Link>
  )
}

export default Project
