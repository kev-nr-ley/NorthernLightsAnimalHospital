import React, { lazy, Suspense } from "react";
import { chakra, Box, shouldForwardProp } from "@chakra-ui/react";
import ScrollToTop from "@components/ScrollToTop";
import { motion, isValidMotionProp } from "framer-motion";
import LoadingScreen from "@components/LoadingScreen";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function About(props) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Box {...props}>
        <ChakraBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
          {props.children}
          <ScrollToTop />
        </ChakraBox>
      </Box>
    </Suspense>
  );
}
