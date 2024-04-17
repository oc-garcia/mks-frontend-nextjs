import { IProduct } from "../product/IProduct";

export interface ICartItems extends IProduct {
  quantity: number;
}
