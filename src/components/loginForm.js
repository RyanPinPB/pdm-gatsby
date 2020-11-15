import React from "react"
import {
  Input,
  Stack,
  InputGroup,
  Icon,
  InputLeftElement,
  FormControl,
  Button,
  FormHelperText,
} from "@chakra-ui/react"

const loginForm = () => {
  return (
    <form action="submit">
      <Stack spacing={3}>
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
          colorScheme="blue"
        >
          Login
        </Button>
        <FormHelperText textAlign="center">Welcome Home!</FormHelperText>
      </Stack>
    </form>
  )
}

export default loginForm
