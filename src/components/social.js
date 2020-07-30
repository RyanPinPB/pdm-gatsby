import React from "react"
import { Box, Link, Button } from "@chakra-ui/core"
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"

const Social = () => {
  return (
    <Box position="fixed" left="4" bottom="4" d="flex" flexDirection="column">
      <Link py="1" href="facebook.com" isExternal>
        <Button rounded="50%" as={FiFacebook} />
      </Link>
      <Link py="1" href="instagram.com" isExternal>
        <Button as={FiInstagram} rounded="50%" />
      </Link>
      <Link py="1" href="twitter.com" isExternal>
        <Button _hover={{ color: "white" }} as={FiTwitter} rounded="50%" />
      </Link>
    </Box>
  )
}

export default Social
