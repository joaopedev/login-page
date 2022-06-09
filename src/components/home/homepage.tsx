import * as React from "react";
import { useState } from "react";
import {
  Button,
  Box,
  ChakraProvider,
  Grid,
  GridItem,
  Input,
  Text,
  theme,
  VStack,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { LockIcon } from "@chakra-ui/icons";
import { DotaBlack } from "./dotablack";
import { DotaWhite } from "./dotawhite";

export const LoginBox = () => {
  const [show, setShow] = useState(false);
  const [trade, setTrade] = useState(false);
  const handleClick = () => setShow(!show);
  const handleDota = () => setTrade(!trade);
  return (
    <ChakraProvider theme={theme}>
      <Grid templateColumns="1fr 480px 480px 1fr" gap={5} minH="100vh" p={3}>
        <GridItem w="100%" h="100%">
        </GridItem>
        <GridItem display="grid" justifyContent="start" alignContent="center" w="100%" h="100%">
          <VStack flexDirection="row" spacing={8}>
            <Box>
              <Text display="flex" alignItems="center">Hello, on this site you will be able to become a friend of Jassa and invite him to play with you.</Text>
              {/* font-family: "Radiance","Noto Sans",sans-serif; */}
            </Box>
          </VStack>
        </GridItem>
        <GridItem display="grid" alignContent="center" w="100%" h="100%">
          <Box
            textAlign="right"
            fontSize="xl"
            boxShadow="lg"
            p="6"
            rounded="md"
          >
            <VStack spacing={8}>
              <Box display="flex" justifyContent="space-between">
                {/* <LockIcon w="100px" h="100px"></LockIcon> */}
                <DotaWhite/>
                <Text p={10} display="flex" alignItems="center">
                  Jassa Friends
                </Text>
              </Box>
              <InputGroup>
                <Input placeholder="Email" />
              </InputGroup>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Box
                display="flex"
                pl="20%"
                pr="20%"
                justifyContent="space-between"
                w="100%"
              >
                <Button>Enter</Button>
                <Button>Register</Button>
              </Box>
            </VStack>
          </Box>
        </GridItem>
        <GridItem display="flex" justifyContent="flex-end" w="100%" h="100%">
          <ColorModeSwitcher boxShadow="lg" p="6" rounded="md" />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
