import { Box, Heading } from "@chakra-ui/react";
import Addition from "../components/Addition";
import Header from "../components/commons/Header";

const Sum = () => {
  return (
    <Box backgroundColor="InfoBackground" w="100vw" h="100vh">
      <Header>
        <Heading>Sum!</Heading>
      </Header>

      <Addition />
    </Box>
  );
};

export default Sum;
