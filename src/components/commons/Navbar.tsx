import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link as={RouterLink} to="/animals">
        Animals
      </Link>{" "}
      |{" "}
      <Link as={RouterLink} to="/sum">
        Sum
      </Link>{" "}
      |{" "}
      <Link as={RouterLink} to="/">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
