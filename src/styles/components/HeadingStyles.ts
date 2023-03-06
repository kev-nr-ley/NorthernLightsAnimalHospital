import { ComponentStyleConfig } from "@chakra-ui/react";

export const HeadingStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontFamily: "'Open Sans', 'sans-serif'",
    fontWeight: 700,
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    SectionHeading: {
      fontSize: "36px", //2.25em
      // mb: "0.5em",
    },

    BodyHeading: {
      fontSize: "24px", //1.5em
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "solid",
    colorScheme: "",
  },
};
