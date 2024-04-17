"use client";

import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from "@/contexts/cart/CartProvider";
import { theme } from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>{children}</CartProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}