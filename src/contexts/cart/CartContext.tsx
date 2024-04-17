import { CartContextType } from "@/interfaces/cart/ICartContextType";
import React from "react";

const defaultValue: CartContextType = {
  cartItems: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  decrementProductInCart: () => {},
  totalAmount: 0,
  totalItems: 0,
};

export const CartContext = React.createContext<CartContextType>(defaultValue);
