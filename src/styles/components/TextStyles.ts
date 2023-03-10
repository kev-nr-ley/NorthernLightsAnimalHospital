import { ComponentStyleConfig } from "@chakra-ui/react";

export const TextStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontFamily: "fonts.body",
    mt:'8',
    fontSize:'1rem',
    lineHeight:'1.5rem',
    // color: "colors.primary",
    // mb: "0.5em",
    // fontSize: "16px",
    // fontWeight: "normal",
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
