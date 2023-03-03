import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Link,
  VStack,
  Code,
  Grid,
  Icon,
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

function App() {
  const { colors, fonts } = useTheme();
  return (
    <Box variant='section' theme={useTheme} >
      <h2>App</h2>
    </Box>
  );
}

export default App;
