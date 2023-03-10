import React from "react";
import {
  chakra,
  Box,
  shouldForwardProp,
  Heading,
  Container,
  Flex,
} from "@chakra-ui/react";
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

export default function Bouncy(props) {
  const [scrollDown, setScrollDown] = React.useState(false);
  const [scrollUp, setScrollUp] = React.useState(false);

let windowScrollValue = window.scrollY;

const circleSize = windowScrollValue * 2;


    console.log(windowScrollValue);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > windowScrollValue) {
                setScrollDown(true);
                setScrollUp(false);
                console.log(windowScrollValue);
            } else {
                setScrollDown(false);
                setScrollUp(true);
                console.log(windowScrollValue);
            }
            windowScrollValue = window.scrollY;
        });
    }, [windowScrollValue]);





  

  return (
    <Flex
      h='100vh'
      w='100vw'
      maxW='100vw'
      display='flex'
      bg='blue.400'
      alignItems={"flex-end"}
      justifyContent='center'>
      <ChakraBox
        initial={{ opacity: 1, width: '100px' , height:'100px', y:'0'}}
        animate={{ width: `${circleSize}px`, height:`${circleSize}px`,  opacity: 1, y:'-100px' }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        // viewport={{ once: true }}
        // animate={{
        //     y: [0, -500, -600, -500, 0],
        //   scale: scrollDown[(1, 0.9, 0.5, 0.9, 1)],
        //   //   scale: scrollUp ? [4, 4, 3, 7, 2] : [0, 0, 0, 0, 0],

        //   bgGradient: "linear(to-l, #ffffff, #000000)",

        //     rotate: [0, 0, 270, 360, 720],
        //   // borderRadius: ["20%", "20%", "50%", "50%", "20%"],

        padding='2'
        // bgGradient='linear(to-l, #7928CA, #FF0080)'
        bg='red'
        border='4px solid black'
        w='30vw'
        h='40vh'
        borderRadius='9999px 9999px 9999px 9999px'></ChakraBox>
      <ScrollToTop />
    </Flex>
  );
}
