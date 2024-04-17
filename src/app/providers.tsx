"use client";

import { CartProvider } from "@/contexts/cart/CartProvider";
import { theme } from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>{children}</CartProvider>
    </ChakraProvider>
  );
}
