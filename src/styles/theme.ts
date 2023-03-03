import { extendTheme } from "@chakra-ui/react";

import "@fontsource/open-sans";
import "@fontsource/open-sans/400";
import "@fontsource/open-sans/700";

import Link from "./Link";
import Heading from "./Heading";
import Text from "./Text";
import Box from "./Box";

const theme = extendTheme({
  colors: {
    primary: "#CA5F00",
    background: "#FFF1E4",
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
  },
});

export default theme;
