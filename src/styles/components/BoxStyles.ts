import { ComponentStyleConfig } from "@chakra-ui/react";


// Box cannot accept variables!


export const BoxStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    color:'Fred'
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    Section: {
      bg: "green",
      color:'red',
      p: "10vw 15vw",
      w: "100vw",
      maxW: "100%",
      h: "100%",
    },

    SectionContent: {
      gap: "5vw",
      minW: "300px",
      minH: "240px",
      w: "25vw",
      h: "20vw",
    },

    Footer: {
      w: "100vw",
      minW: "300px",
      maxW: "100%",
      h: "25vh",
      minH: "240px",
      maxH: "100%",
      p: "5vw 10vw",
    },

    FooterContainer: {
      w: "240px",
      h: "200px",
      gap: "1.25em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
