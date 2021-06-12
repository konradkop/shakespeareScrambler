
import React, { Component, useState } from 'react';
import DropDown from './dropdown'
import SentanceButton from './sentanceButton'
import ScrambledSentance from './scrambledSentance'
import UnscrambleButton from './unscrambleButton'
import NoWorkSelected from './noWorkSelected'
import About from './about'
import { Flex, Heading} from "@chakra-ui/react"

function SubmitForm() {

  const [dropDownValue, setValue] = useState("");
  const [sentanceValues, setSentanceValues] = useState([]);
  const [scrambledSentanceValues, setSentanceScrambled] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hideNoWorkSelected, setNoWorkSelected] = useState("none");

    function shuffle (input) {
      let a = input[0].word.split(""),
          n = a.length;

      for(var i = n - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
      }
      return a.join("");
  }

    function dropDownSelect(event){
      setValue(event.target.value)
    }

    async function  generateSentance() {
      if (dropDownValue !== ""){
        setNoWorkSelected("none")
        setLoading(true)
        let generatedSentance = await fetch('/sentance/'+ dropDownValue)
        generatedSentance = await (await generatedSentance.json())
        setSentanceValues(generatedSentance[0].word)
        setSentanceScrambled(shuffle(generatedSentance))
        setLoading(false)
      }
      else{
        setNoWorkSelected("flex")
      }
  }

  function unscrambleSentance(){
    setSentanceScrambled(sentanceValues)
  }

  return (

    <Flex flexDirection="column" width="100%" height="100%"> 
    <Heading width="100%">
      <Flex flexWrap="wrap" alignItems="center" justifyContent="space-evenly">
        <Flex minWidth="40%">
             <DropDown onChange={dropDownSelect} value="Select the work"/>
        </Flex>
        <Flex direction="column">
          <SentanceButton loading={loading} dropDownValue={dropDownValue} generateSentance={generateSentance}/>
          <NoWorkSelected hideNoWorkSelected={hideNoWorkSelected}/>
        </Flex>
        <Flex>
          <UnscrambleButton sentanceValues={sentanceValues} unscrambleSentance={unscrambleSentance}/>
        </Flex>
        <About/>
      </Flex>
    </Heading>
          <Flex justifyContent="center" align-items="center">
            <ScrambledSentance scrambledSentanceValues={scrambledSentanceValues}/>
          </Flex>
    </Flex>
  );
}

export default SubmitForm;