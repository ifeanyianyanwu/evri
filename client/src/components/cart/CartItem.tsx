import { CartItem as CartItemType } from "../../types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch } from "../../store/hooks";
import {
  decrease,
  increase,
  removeFromCart,
} from "../../store/features/cart/cartSlice";
import { QuantityInput } from "../ui";
import { useFormatCurrency } from "../../hooks/useFormatCurrency";

type IProps = { product: CartItemType };

const CartItem = ({ product }: IProps) => {
  const dispatch = useAppDispatch();

  const formattedCurrency = useFormatCurrency(product.price);

  const handleIncreaseBtnClick = () => {
    dispatch(increase(product.id));
  };

  const handleDecreaseBtnClick = () => {
    dispatch(decrease(product.id));
  };

  const handleRemoveBtnClick = () => {
    dispatch(removeFromCart(product.id));
  };
  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-4">
        <div className="md:w-[120px] md:h-[120px] h-[80px] w-[80px] flex-shrink-0">
          <img
            src={product.image}
            alt="product image"
            className="aspect-square w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-gray-600 capitalize font-semibold">
            {product.name}
          </p>
          <QuantityInput
            handleDecreaseBtnClick={handleDecreaseBtnClick}
            handleIncreaseBtnClick={handleIncreaseBtnClick}
            value={product.quantity}
            className="flex gap-3 items-center border-solid border-black border p-1 w-fit"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-end">
        <AiOutlineCloseCircle
          size={22}
          className="cursor-pointer text-gray-400 hover:text-black"
          onClick={handleRemoveBtnClick}
        />
        <p className="text-gray-600">{formattedCurrency}</p>
      </div>
    </div>
  );
};

export default CartItem;
