import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "--font-montserrat",
    body: "--font-montserrat",
  },
  colors: {
    customBlue: "#0F52BA",
  },
  styles: {
    global: {
      body: {
        maxWidth: "100vw",
        overflowX: "hidden",
      },
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
    },
  },
});
