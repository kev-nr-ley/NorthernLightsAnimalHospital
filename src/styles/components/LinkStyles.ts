import { ComponentStyleConfig } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const LinkStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    whiteSpace: "nowrap",
    textDecoration: "none",
    w: "fit-content",
    px: "8",
    py: "2",

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
      color: "dark",
      textTransform: "uppercase",
      border: "4px solid #292A29",
      fontWeight: "700",
      bg: "transparent",
      _hover: {
        border: "4px solid #8A4000",
        bg: "primary",
        color: "light",
      },
    },

    LightOutline: {
      color: "light",
      textTransform: "uppercase",
      border: "4px solid #f8f8f8",
      bg: "transparent",
      fontWeight: "700",

      _hover: {
        border: "4px solid #f8f8f8",
        bg: "light",
        color: "dark",
      },
    },

    navLink: {
      color: "dark",
      fontWeight: "700",
      fontSize: "20px",
    },

    solid: {
      color: "light",
      bg: "dark",
      textTransform: "capitalize",
      px: "4",
      py: "2",
      _hover: {
        bg: "primary",
        color: "light",
      },
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
