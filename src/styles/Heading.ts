import { ComponentStyleConfig } from "@chakra-ui/react";

const Heading: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontFamily: "'Open Sans', 'sans-serif'",
    fontWeight: 700,

  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
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

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "solid",
    colorScheme: "",
  },
};

export default Heading;
