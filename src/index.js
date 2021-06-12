import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { Flex, ScaleFade} from "@chakra-ui/react"
import shake from './media/shake.png'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
        <Flex
        h = "100vh"
        w = "100vw"
        backgroundImage ={shake}
        backgroundSize="120vh"
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        backgroundColor="#f6f6f6"
        direction="column"
        align="left"
        >
        <ScaleFade initialScale={0.2} in={true}>
          <Flex 
            marginTop="1vh">
               <App />
           </Flex>
        </ScaleFade>
      </Flex>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

