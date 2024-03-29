import { ComponentStyleConfig } from "@chakra-ui/react";

export const InputStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontFamily: "fonts.body",
    // color: "colors.primary",
    // mb: "0.5em",
    fontSize: "16px",
    fontWeight: "700",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    bold: {
      fontWeight: "bold",
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
