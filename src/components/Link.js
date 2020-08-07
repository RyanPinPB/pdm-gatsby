import React from "react"
import { Link as ChakraLink } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"

const OutboundLink = ChakraLink

export const SiteLink = React.forwardRef(({ ...props }, ref) => {
  // props.color = props.color ?? "gray.500"
  // props._hover = props._hover ?? {}
  // props._hover.color = props._hover.color ?? "gray.800"

  const internal = /^\.?\/(?!\/)/.test(props.href || "")
  const asProps = { as: internal ? GatsbyLink : OutboundLink }
  if (internal) {
    asProps.to = props.href
  }
  asProps.ref = ref
  return <ChakraLink {...asProps} {...props} />
})
