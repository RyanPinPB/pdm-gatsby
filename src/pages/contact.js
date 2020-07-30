import React from "react"
import SignupForm from "../components/signupForm"
import LoginForm from "../components/loginForm"
import Logo from "../assets/images/logo192x192.png"

import {
  Box,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorMode,
} from "@chakra-ui/core"

const Contact = () => {
  const { colorMode } = useColorMode()
  return (
    <Box
      bg={colorMode === "light" ? "gray.200" : "gray.600"}
      w="350px"
      p={3}
      boxShadow="sm"
      rounded="lg"
    >
      <Image src={Logo} w="60px" h="60px" mx="auto" mt={12} mb={10} />
      <Tabs variant="line" isFitted m={4}>
        <TabList>
          <Tab>Sign Up</Tab>
          <Tab>Login</Tab>
        </TabList>
        <TabPanels mt={3}>
          <TabPanel>
            <SignupForm />
          </TabPanel>
          <TabPanel>
            <LoginForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Contact
