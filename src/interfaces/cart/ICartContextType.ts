import { IProduct } from "../product/IProduct";
import { ICartItems } from "./ICartItems";

export interface CartContextType {
  cartItems: ICartItems[];
  addProductToCart: (product: IProduct) => void;
  removeProductFromCart: (productId: number) => void;
  decrementProductInCart: (productId: number) => void;
  totalAmount: number;
  totalItems: number;
}
