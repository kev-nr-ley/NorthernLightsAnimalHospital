import { extendTheme } from "@chakra-ui/react";

import "@fontsource/open-sans";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import { HeadingStyles as Heading } from "./components/HeadingStyles";
import { LinkStyles as Link } from "./components/LinkStyles";
import { TextStyles as Text } from "./components/TextStyles";
import { BoxStyles as Box } from "./components/BoxStyles";
import { ImageStyles as Image } from "./components/ImageStyles";
import { InputStyles as Input } from "./components/InputStyles";

export const theme = extendTheme({
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        color: "inherit",
        boxSizing: "border-box",
        textDecoration: "none",
      },

      a: {
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },

  // https://coolors.co/gradient-palette
  colors: {
    primary: "#8A4000",
    secondary: "#C5A000",

    // using this for underlines on nav and default link hover
    tertiary: "#FF7700",
    darkOrange: "#dd4400",
    //

    quaternary: "#FFD700",
    primaryOpacity80: "#8A400080",
    primaryOpacity80: "rgba(138, 64, 0, 0.80)",
    primaryOpacity90: "rgba(138, 64, 0, 0.90)",
    primaryOpacity90: "rgba(138, 64, 0, 0.90)",
    primaryOpacity95: "rgba(138, 64, 0, 0.95)",
    primaryOpacity99: "rgba(138, 64, 0, 0.99)",
    star: "#FFD700",
    background: "#ffe1c6",
    light: "#F8F8F8",
    dark: "#292A29",
  },

  fonts: {
    heading: "'Open Sans', 'sans-serif'",
    body: "'Open Sans', 'sans-serif'",
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
  },

  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  components: {
    Link,
    Heading,
    Text,
    Box,
    Image,
    Input,
  },
});
