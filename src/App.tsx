import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { Router, Route, Link } from "react-router-dom";
import { LoginBox } from "./components/home/homepage";
import { Private } from "./components/private/private";

export const App = () => {
  return (
    <ChakraProvider>
      <LoginBox/>
    </ChakraProvider>
  );
};
