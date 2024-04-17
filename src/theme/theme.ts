import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    customBlue: "#0F52BA",
  },
  styles: {
    global: {
      body: {
        maxWidth: "100vw",
        overflowX: "hidden",
        minHeight: "100vh",
      },
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
    },
  },
});
