import React from 'react';
import {
  ChakraProvider,
  Box,
  extendTheme
} from '@chakra-ui/react';
import Main from './components/Main';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: "hsl(185, 41%, 84%)",
      }
    })
  },
  fonts: {
    body: "Space Mono, monospace"
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Main/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
