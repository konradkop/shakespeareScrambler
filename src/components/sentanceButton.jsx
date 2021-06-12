
import { Button } from "@chakra-ui/react"

function SentanceButton(props) {
  return (
    <>
        <Button isLoading={props.loading} onClick={props.generateSentance} colorScheme="telegram">
        Generate the Scrambled Word!
        </Button>
    </>
  );
}

export default SentanceButton;
