import React from "react"
import { Box } from "@chakra-ui/core"
import { motion } from "framer-motion"

const LoaderBox = motion.custom(Box)

const Loader = () => {
  const loaderVariants = {
    start: {
      opacity: 1,
      transform: "translateY(0)",
      transition: { duration: 1 },
    },
    finish: {
      opacity: 1,
      transform: "translateY(-100%)",
      transition: { duration: 1, delay: 1 },
    },
  }
  return (
    <LoaderBox
      initial="start"
      animate="finish"
      variants={loaderVariants}
      position="absolute"
      top="0"
      zIndex="100"
      h="100vh"
      w="100vw"
      bg="white"
      className="loader"
    ></LoaderBox>
  )
}

export default Loader
