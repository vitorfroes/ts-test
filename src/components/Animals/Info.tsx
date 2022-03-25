import { Container, FormControl, Select, Text } from "@chakra-ui/react";

const Info = () => {
  return (
    <Container bg="beige" padding="10" maxW="container.lg" borderRadius="md">
      <FormControl marginBottom="10">
        <Select id="animal" placeholder="Select an animal">
          <option>Horse</option>
        </Select>
      </FormControl>

      <Text>
        <b>Name:</b> Horse
      </Text>
      <Text>
        <b>Species:</b> <i>Equus ferus caballus</i>
      </Text>
      <Text>
        <b>Diet:</b>
      </Text>
      <Text>
        <b>Life span:</b> 30 years
      </Text>
      <Text fontSize="3xl" textAlign="center">
        🐴
      </Text>
    </Container>
  );
};

export default Info;
