import React from "react"
import {
  Box,
  Button,
  Image,
  Badge,
  Text,
  Stack,
  Icon,
  useColorMode,
} from "@chakra-ui/core"
import pbhomes from "../assets/images/pbhomes.png"

const Card = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "gray.200", dark: "gray.700" }
  const textColor = { light: "gray.500", dark: "gray.100" }
  return (
    <Box
      w="400px"
      rounded="20px"
      overflow="hidden"
      boxShadow="sm"
      bg={bgColor[colorMode]}
    >
      <Image src={pbhomes} alt="Course Cover" />
      <Box p={5}>
        <Stack isInline align="baseline">
          <Badge variant="solid" variantColor="orange" rounded="full" px={2}>
            NEW!
          </Badge>
          <Badge variant="solid" variantColor="orange" rounded="full" px={2}>
            React
          </Badge>
          <Text
            textTransform="uppercase"
            fontSize="sm"
            color="gray.500"
            letterSpacing="wide"
          >
            2 Hours &bull; 12 Lectures
          </Text>
        </Stack>
        <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
          Introduction to chakra-ui
        </Text>
        <Text isTruncated fontWeight="light" fontSize="md">
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Fuga
          officiis corrupti perferendis distinctio <br /> tempora, cupiditate
          unde ex esse nam vero, et <br /> laboriosam expedita necessitatibus
          quae facilis. Possimus quos soluta iusto?
        </Text>
        <Stack isInline justify="space-between" color={textColor[colorMode]}>
          <Text fontWeight="semibold" fontSize="lg">
            $20
          </Text>
          <Box d="flex">
            <Box as="span">
              {Array(4)
                .fill("")
                .map((_, i) => (
                  <Icon key={i} name="star" color="orange.500" />
                ))}
              <Icon name="star" mr={2} />
            </Box>
            <Text as="h3" fontSize="lg" fontWeight="semibold">
              34 Reviews
            </Text>
          </Box>
        </Stack>
        <Box textAlign="center">
          <Button
            variantColor="orange"
            size="lg"
            mt={3}
            boxShadow="sm"
            _hover={{ boxShadow: "md" }}
            _active={{ boxShadow: "lg" }}
          >
            Sign up now!
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
