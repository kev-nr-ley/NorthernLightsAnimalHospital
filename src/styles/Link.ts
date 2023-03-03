import { ComponentStyleConfig } from "@chakra-ui/react";

const Link: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontWeight: 700,
    textAlign: "center",
    _hover: {
      color: "colors.primary",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    outline: {
      textTransform: "uppercase",
      border: '1px solid "brand.dark"',
      _hover: {
        outline: "4px solid 'brand.dark'",
      },
    },

    solid: {
      color: "colors.light",
      bg: " colors.dark",
      textTransform: "capitalize",
      _hover: {
        bg: "colors.primary",
      },
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "solid",
    colorScheme: "",
  },
};

export default Link;
