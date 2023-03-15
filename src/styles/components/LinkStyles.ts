import { ComponentStyleConfig } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const LinkStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    whiteSpace: "nowrap",
    textDecoration: "none",
    w: "fit-content",

    _hover: {
      textDecoration: "none",
      color: "darkOrange",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    DarkOutline: {
      color: "dark",
      px: "8",
      py: "2",
      textTransform: "uppercase",
      border: "1px solid #292A29",
      fontWeight: "700",
      bg: "transparent",
      _hover: {
        border: "1px solid #8A4000",
        bg: "primary",
        color: "light",
      },
    },

    LightOutline: {
      color: "light",
      px: "8",
      py: "2",
      textTransform: "uppercase",
      border: "1px solid #f8f8f8",
      bg: "transparent",
      fontWeight: "700",

      _hover: {
        border: "1px solid #f8f8f8",
        bg: "light",
        color: "dark",
      },
    },

    navUnderline: {
      color: "dark",
      fontWeight: "700",
      fontSize: "20px",
      _after: {
        content: '""',
        display: "block",
        width: "0",
        height: "2px",
        bg: "dark",
        transition: "width .3s",
      },
      _hover: {
        color: "dark",
        _after: {
          width: "100%",
          bg:"tertiary"
        },
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
