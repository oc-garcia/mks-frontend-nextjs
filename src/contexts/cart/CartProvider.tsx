import React, { useReducer } from "react";
import { IProduct } from "@/interfaces/product/IProduct";
import { CartContext } from "@/contexts/cart/CartContext";
import { ICartItems } from "@/interfaces/cart/ICartItems";

type CartAction =
  | { type: "ADD_ITEM"; product: IProduct }
  | { type: "REMOVE_ITEM"; productId: number }
  | { type: "DECREMENT_ITEM"; productId: number };
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

    case "DECREMENT_ITEM":
      const decrementCartItems = [...state.cartItems];
      const decrementedItemIndex = decrementCartItems.findIndex((item) => item.id === action.productId);

      if (decrementedItemIndex >= 0 && decrementCartItems[decrementedItemIndex].quantity > 1) {
        const updatedItem = {
          ...decrementCartItems[decrementedItemIndex],
          quantity: decrementCartItems[decrementedItemIndex].quantity - 1,
        };
        decrementCartItems[decrementedItemIndex] = updatedItem;
      } else {
        decrementCartItems.splice(decrementedItemIndex, 1);
      }

      const decreasedItem = state.cartItems.find((item) => item.id === action.productId)!;
      return {
        ...state,
        cartItems: decrementCartItems,
        totalAmount: state.totalAmount - parseFloat(decreasedItem.price),
        totalItems: state.totalItems - 1,
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

  const decrementProductInCart = (productId: number) => {
    dispatchCartAction({ type: "DECREMENT_ITEM", productId });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.cartItems,
        addProductToCart,
        removeProductFromCart,
        decrementProductInCart,
        totalAmount: cartState.totalAmount,
        totalItems: cartState.totalItems,
      }}>
      {children}
    </CartContext.Provider>
  );
};
