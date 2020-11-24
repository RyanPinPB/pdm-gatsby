import React from "react"
import { Link, Button, Flex, useColorMode } from "@chakra-ui/react"
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"

const Social = () => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      className="social-icons"
      as="aside"
      position="fixed"
      width="fit-content"
      left="5"
      bottom={[".65rem", ".65rem", "1.95rem", "1.3rem"]}
      d={["none", "none", "none", "flex"]}
      flexDirection="column"
      zIndex="100"
    >
      <Link href="https://www.facebook.com/PearsonDigitalMarketing" isExternal>
        <Button
          className="social-button"
          bg="transparent"
          variant="solid"
          p="2"
          rounded="50%"
          as={FiFacebook}
          aria-label="Pearson Digital Marketing Facebook"
          fill={colorMode === "light" ? "black" : "white"}
        />
      </Link>
      <Link href="https://www.instagram.com/pearsondigitalmarketing" isExternal>
        <Button
          // className="social-button"
          bg="transparent"
          p="2"
          variant="solid"
          as={FiInstagram}
          aria-label="Pearson Digital Marketing Instagram"
          rounded="50%"
          fill={colorMode === "light" ? "black" : "white"}
          stroke={colorMode === "light" ? "white" : "black"}
        />
      </Link>
      <Link href="https://twitter.com/digital_pearson" isExternal>
        <Button
          className="social-button"
          bg="transparent"
          p="2"
          variant="solid"
          fill={colorMode === "light" ? "black" : "white"}
          as={FiTwitter}
          aria-label="Pearson Digital Marketing Twitter"
          rounded="50%"
        />
      </Link>
    </Flex>
  )
}

export default Social
