import React, { Fragment } from "react"
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react"

const MenuDrawer = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Fragment>
      <Button
        bg="transparent"
        size="s"
        type="button"
        onClick={onOpen}
        px="2"
        py="1"
        mr="4"
        lineHeight="1"
      >
        MENU
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <CloseButton onClick={onClose} />
          <DrawerHeader>Pearson Digital Marketing</DrawerHeader>
          <DrawerBody>Menu contents</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  )
}

export default MenuDrawer
