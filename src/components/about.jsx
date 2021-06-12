
import React from 'react'; 
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    UnorderedList,
    ListItem,
    Text
  } from "@chakra-ui/react"

function About() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <>
      <Button  ref={btnRef} colorScheme="blackAlpha" onClick={onOpen} width="fit-content">
        About
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            About
          <Text color="grey" fontSize="sm">React, Chakra-ui, Express, GCP- BigQuery</Text>
          </DrawerHeader>
            <DrawerBody>
            <br />
            <Text fontSize="xl">How to Use:</Text>
            <br/>
            <UnorderedList spacing="5">
                <ListItem>Pick one of Shakespeare's works from the dropdown</ListItem>
                <ListItem>Generate the word by clicking on the blue button</ListItem>
                <ListItem>Try to guess the word</ListItem>
                <ListItem>Check your guess by using the unscramble button</ListItem>
            </UnorderedList>
            </DrawerBody>
            <Text fontSize="ml" margin="5%">Thanks for checking this app out!</Text>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="linkedin" onClick={()=> window.location.href = 'https://www.linkedin.com/in/konradkopko/'}>Go to my Linkedin</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default About