import React, { Fragment } from "react"
import {
  Button,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/core"

const MenuModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Fragment>
      <Button bg="transparent" onClick={onOpen}>
        MENU
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pearson Digital Marketing</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Link href="/projects">PROJECTS</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/contact">CONTACT</Link>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default MenuModal
