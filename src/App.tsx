import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { Router, Route, Link } from "react-router-dom";
import { LoginBox } from "./components/home/homepage";

export const App = () => {
  return (
    <ChakraProvider>
      <LoginBox/>
    </ChakraProvider>
  );
};
