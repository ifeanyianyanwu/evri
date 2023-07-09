import React from "react";
import { CartItem as CartItemType } from "../../types";

type IProps = { product: CartItemType };

const CartItem = ({ product }: IProps) => {
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.totalPrice}</div>
      <div>{product.quantity}</div>
    </div>
  );
};

export default CartItem;
