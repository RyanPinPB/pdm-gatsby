import React from "react"
import { Link, Button, ButtonGroup } from "@chakra-ui/core"
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"

const Social = () => {
  return (
    <ButtonGroup
      className="social-icons"
      as="aside"
      position="fixed"
      width="fit-content"
      left="3"
      bottom="6"
      d={["none", "none", "none", "flex"]}
      flexDirection="column"
      spacing="2"
      zIndex="100"
    >
      <Link href="facebook.com" isExternal>
        <Button
          bg="transparent"
          variant="solid"
          size="sm"
          p="2"
          rounded="50%"
          as={FiFacebook}
        />
      </Link>
      <Link href="instagram.com" isExternal>
        <Button
          bg="transparent"
          size="sm"
          p="2"
          variant="solid"
          as={FiInstagram}
          rounded="50%"
        />
      </Link>
      <Link href="twitter.com" isExternal>
        <Button
          bg="transparent"
          size="sm"
          p="2"
          variant="solid"
          //   _hover={{ color: "white" }}
          as={FiTwitter}
          rounded="50%"
        />
      </Link>
    </ButtonGroup>
  )
}

export default Social
