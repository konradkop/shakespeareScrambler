import React from 'react';
import { Text } from "@chakra-ui/react"

function ScrambledSentance(props) {
  return (
        <Text fontSize="20vw" borderRadius="2.5vw" opacity="90%">
          {props.scrambledSentanceValues}
        </Text>
  );
}

export default ScrambledSentance;