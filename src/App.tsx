import * as React from "react"
import {
  Button,
  ButtonGroup,
  IconButton,
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
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { SearchIcon, LockIcon } from '@chakra-ui/icons'


export const App = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (


    <ChakraProvider theme={theme}>
      <Grid templateColumns="1fr 480px 480px 1fr" gap={5} minH="100vh" p={3}>
        <GridItem w='100%' h='100%'></GridItem>
        <GridItem display='grid' alignContent='center' w='100%' h='100%'>
          <Box boxSize='sm'>
           <LockIcon w='250px' h='250px' ></LockIcon>
          </Box>
        </GridItem>
        <GridItem display='grid' alignContent='center' w='100%' h="100%">
          <Box textAlign="right" fontSize="xl" boxShadow='lg' p='6' rounded='md'>
            <VStack spacing={8}>
              <Text>
                My login page
              </Text>
              <InputGroup>
                <Input placeholder="Email" />
              </InputGroup>
              <InputGroup>
                <Input type={show ? 'text' : 'password'} placeholder="Password" />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button>Login</Button>
            </VStack>
          </Box>
        </GridItem>
        <GridItem display='flex' justifyContent='flex-end' w='100%' h='100%'>
          <ColorModeSwitcher boxShadow='lg' p='6' rounded='md' />
        </GridItem>
      </Grid>
    </ChakraProvider>
  )
}
