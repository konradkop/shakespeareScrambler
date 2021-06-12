import React, { useState } from 'react';
import { Button, Collapse, Text } from "@chakra-ui/react"

function UnscrambleButton(props) {


  return (
    <>
        <Button onClick={props.unscrambleSentance} colorScheme="facebook">
          Unscramble the Word!
        </Button>
    </>
  );
  
}

export default UnscrambleButton;