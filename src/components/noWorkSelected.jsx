import React from 'react';
import { Text } from "@chakra-ui/react"

function NoWorkSelected(props) {
  return (
        <Text display={props.hideNoWorkSelected} fontSize="sm" borderRadius="2.5vw" opacity="90%" color="red">
          Please select a work!
        </Text>
  );
}

export default NoWorkSelected;