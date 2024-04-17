import React, { useReducer } from "react";
import { IProduct } from "@/interfaces/product/IProduct";
import { CartContext } from "@/contexts/cart/CartContext";
import { ICartItems } from "@/interfaces/cart/ICartItems";

type CartAction = { type: "ADD_ITEM"; product: IProduct } | { type: "REMOVE_ITEM"; productId: number };

interface CartState {
  cartItems: ICartItems[];
  totalAmount: number;
  totalItems: number;
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedCartItems = [...state.cartItems];
      const itemIndex = updatedCartItems.findIndex((item) => item.id === action.product.id);

      if (itemIndex < 0) {
        updatedCartItems.push({ ...action.product, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCartItems[itemIndex],
          quantity: updatedCartItems[itemIndex].quantity + 1,
        };
        updatedCartItems[itemIndex] = updatedItem;
      }

      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: state.totalAmount + parseFloat(action.product.price),
        totalItems: state.totalItems + 1,
      };

    case "REMOVE_ITEM":
      const updatedItems = state.cartItems.filter((item) => item.id !== action.productId);
      const removedItem = state.cartItems.find((item) => item.id === action.productId)!;
      return {
        ...state,
        cartItems: updatedItems,
        totalAmount: state.totalAmount - parseFloat(removedItem.price) * removedItem.quantity,
        totalItems: state.totalItems - removedItem.quantity,
      };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    cartItems: [],
    totalAmount: 0,
    totalItems: 0,
  });

  const addProductToCart = (product: IProduct) => {
    dispatchCartAction({ type: "ADD_ITEM", product });
  };

  const removeProductFromCart = (productId: number) => {
    dispatchCartAction({ type: "REMOVE_ITEM", productId });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.cartItems,
        addProductToCart,
        removeProductFromCart,
        totalAmount: cartState.totalAmount,
        totalItems: cartState.totalItems,
      }}>
      {children}
    </CartContext.Provider>
  );
};
