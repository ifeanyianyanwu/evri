import React from "react";
import { CartItem as CartItemType } from "../../types";

type IProps = { product: CartItemType };

const CartItem = ({ product }: IProps) => {
  return <div>{product.name}</div>;
};

export default CartItem;
