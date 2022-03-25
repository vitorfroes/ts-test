import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Animals from "./pages/Animals";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import Sum from "./pages/Sum";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/sum" element={<Sum />}></Route>
        <Route path="/animals" element={<Animals />}></Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
