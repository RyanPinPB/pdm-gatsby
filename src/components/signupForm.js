import React from "react"
import {
  Input,
  Stack,
  //   InputLeftAddon,
  InputGroup,
  Icon,
  InputLeftElement,
  FormControl,
  Button,
  Divider,
  FormHelperText,
} from "@chakra-ui/core"

const signupForm = () => {
  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="info" />} />
            <Input
              type="name"
              placeholder="First name"
              aria-label="First name"
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="info" />} />
            <Input type="name" placeholder="Last name" aria-label="Last name" />
          </InputGroup>
        </FormControl>
        <Divider borderColor="gray.300" />
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="email" />} />
            <Input type="email" placeholder="Email" aria-label="Email" />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="lock" />} />
            <Input
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          boxShadow="md"
          _hover={{ boxShadow: "lg" }}
          _active={{ boxShadow: "xl" }}
          variant="solid"
          variantColor="blue"
        >
          Sign up!
        </Button>
        <FormHelperText textAlign="center">
          We will never share your email!
          <br />
          🤞
        </FormHelperText>
      </Stack>
    </form>
  )
}

export default signupForm
