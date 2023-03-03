import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#CA5F00",
    background: "#FFF1E4",
    light: "#F8F8F8",
    dark: "#292A29",
  },

  text: {
    fontFamily: "'Open sans', 'sans-serif'",
    fontWeight: 400,
    color: "colors.dark",
    fontSize: "16px", //1rem
    lineHeight: "22px", // auto
  },

  Heading: {
    fontFamily: "'Open Sans', 'sans-serif'",
    fontWeight: 700,

    variants: {
      Heading2: {
        fontSize: "36px", //2.25em
        mb: "1.5em", //24px
      },

      Heading3: {
        fontSize: "24px", //1.5em
        mb: "1.25em", //20px
      },
    },
  },

  Section: {
    p: "10vw 15vw",

    Box: {
      p: "0",
      m: "0",
      variants: {
        sectionContent: {
          gap: "5vw",
          minW: "300px",
          minH: "240px",
          w: "25vw",
          h: "20vw",
        },
        footerContainer: {
          w: "240px",
          h: "200px",
          gap: "1.25em",
        },
      },
    },
  },

  Link: {
    fontWeight: 700,
    textAlign: "center",
    _hover: {
      color: "colors.primary",
    },

    variants: {
      outline: {
        textTransform: "uppercase",
        border: '1px solid "brand.dark"',
        _hover: {
          outline: "4px solid 'brand.dark'",
        },
      },

      highlight: {
        color: "colors.light",
        bg: " colors.dark",
        textTransform: "capitalize",
        _hover: {
          bg: "colors.primary",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box bg='brand.900' color='brand.100'>
        Welcome
      </Box>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
