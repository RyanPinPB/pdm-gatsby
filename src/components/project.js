import React from "react"
import { Link, Heading, AspectRatioBox, Button, Image } from "@chakra-ui/core"
import { motion } from "framer-motion"

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
        position="absolute"
        top="5"
        left="5"
        fontSize="2xl"
        fontWeight="900"
      >
        {title}
      </Heading>
      <AspectRatioBox as="figure" maxW="100%" ratio={0.75}>
        <Image src={imgSrc} alt={imgAlt} objectFit="cover" />
      </AspectRatioBox>
      <MotionButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        bg="rgba(26, 32, 44, .8)"
        color="white"
        zIndex="2"
        position="absolute"
        bottom="5"
        left="5"
        size="lg"
        transition=" backgroundColor .250s ease-in-out, transform 0s linear"
        _hover={{ bg: "rgba(26, 32, 44, 1)" }}
        _active={{ bg: "rgba(26, 32, 44, 1)" }}
      >
        View
      </MotionButton>
    </Link>
  )
}

export default Project
