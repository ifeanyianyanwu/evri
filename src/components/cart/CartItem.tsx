import { CartItem as CartItemType } from "../../types";
import {
  AiOutlineCloseCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useAppDispatch } from "../../store/hooks";
import {
  decrease,
  increase,
  remove,
} from "../../store/features/cart/cartSlice";

type IProps = { product: CartItemType };

const CartItem = ({ product }: IProps) => {
  const dispatch = useAppDispatch();

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleIncreaseBtnClick = () => {
    dispatch(increase(product.id));
  };

  const handleDecreaseBtnClick = () => {
    dispatch(decrease(product.id));
  };

  const handleRemoveBtnClick = () => {
    dispatch(remove(product.id));
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
          <span className="flex gap-2 items-center border-solid border-black border p-1 w-fit">
            <AiOutlineMinus
              onClick={handleDecreaseBtnClick}
              className="cursor-pointer"
            />
            <p>{product.quantity}</p>
            <AiOutlinePlus
              onClick={handleIncreaseBtnClick}
              className="cursor-pointer"
            />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-end">
        <AiOutlineCloseCircle
          className="cursor-pointer"
          onClick={handleRemoveBtnClick}
        />
        <p className="text-gray-600">{currencyFormat.format(product.price)}</p>
      </div>
    </div>
  );
};

export default CartItem;
