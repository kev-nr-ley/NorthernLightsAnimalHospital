import { ComponentStyleConfig } from "@chakra-ui/react";

export const LinkStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    w: "fit-content",
    fontWeight: 700,
    py: "8px",
    px: "16px",
    fontSize:'16px',
    // maxW: "240px",

    border: "none",
    color: "dark",
    whiteSpace: "nowrap",
    // bg:'transparent',
    textDecoration: "none",
    _hover: {
      textDecoration: "none",
      color: "primary",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    DarkOutline: {
      color: "colors.dark",
      textTransform: "uppercase",
      border: "4px solid #292A29",
      _hover: {
        border: "4px solid #CA5F00",
        bg: "primary",
        color: "light",
      },
    },
    LightOutline: {
      color: "colors.dark",
      textTransform: "uppercase",
      border: "1px solid #f8f8f8",
      _hover: {
        border: "1px solid #f8f8f8",
        bg: "light",
        color: "primary",
      },
    },

    solid: {
      color: "colors.light",
      bg: " #292A29",
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
