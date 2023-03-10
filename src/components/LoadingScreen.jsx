import React from "react";
import {
  motion,
  AnimatePresence,
  isValidMotionProp,
  useReducedMotion,
} from "framer-motion";
import {
  Box,
  Image,
  Container,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import Page from "@components/Page";
import { useTheme } from "@chakra-ui/react";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function LoadingScreen() {
  const { colors, fonts } = useTheme();
  return (
    <Page>
      <Box
        bg='dark'
        w='100vw'
        h='100vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
        position='relative'>
        <ChakraBox
          initial={{ y: 50 }}
          animate={{ y: 100 }}
          exit={{ y: 0, opacity: 0}}
          duration={1.6}
          transition={{ type: "spring", stiffness: 1000 }}>
          <Image
            w='20vw'
            minW='300px'
            h='auto'
            src='/images/dogbrush.png'
            alt='loading'
            position='relative'
            top={"-20vh"}
          />
        </ChakraBox>
      </Box>
    </Page>
  );
}
