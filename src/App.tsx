import { Box, Heading, Text } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/commons/Header";

function App() {
  return (
    <Box w="100%" h="100vh">
      <Header>
        <Heading>Welcome!</Heading>
      </Header>

      <Text>This is a new project...</Text>
    </Box>
  );
}

export default App;
