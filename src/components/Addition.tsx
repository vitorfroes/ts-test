import {
  Button,
  Container,
  FormControl,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useState } from "react";

const Addition = () => {
  const [inputOne, setInputOne] = useState("0");
  const [inputTwo, setInputTwo] = useState("0");
  const [result, setResult] = useState(0);

  const handleClick = () => {
    setResult(parseInt(inputOne) + parseInt(inputTwo));
  };

  return (
    <>
      <Container>
        <FormControl>
          <NumberInput name="number1" value={inputOne} onChange={setInputOne}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <span>+</span>

          <NumberInput name="number2" value={inputTwo} onChange={setInputTwo}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button type="button" onClick={handleClick}>
          Sum
        </Button>

        {inputOne && inputTwo && <div>{result}</div>}
      </Container>
    </>
  );
};

export default Addition;
