import { Box, Heading } from "@chakra-ui/react";
import Info from "../components/Animals/Info";
import Header from "../components/commons/Header";

const Animals = () => {
  return (
    <Box width="100%" height="100vh" backgroundColor="lightgreen">
      <Header>
        <Heading>Animals</Heading>
      </Header>

      <Info></Info>
    </Box>
  );
};

export default Animals;
