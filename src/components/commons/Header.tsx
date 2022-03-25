import { Center } from "@chakra-ui/react";
import Navbar from "./Navbar";

interface iHeader {
  children: object;
}

const Header = (props: iHeader) => {
  return (
    <>
      <Navbar />
      <Center h="20vh">{props.children}</Center>
    </>
  );
};

export default Header;
