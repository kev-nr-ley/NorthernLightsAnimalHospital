import { ComponentStyleConfig } from "@chakra-ui/react";

// Box cannot accept variables!

export const ImageStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    HeroBg: {
      w: "100vw",
      h: "100vh",
      objectFit: "cover",
      objectPosition: "center",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      border: "4px",
      filter: "blur(4px)",
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
