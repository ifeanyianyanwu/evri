import { HiOutlineEye, HiOutlineHeart } from "react-icons/hi";
import { Product as ProductType } from "../../types";
import { styles } from "../../styles";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addItem } from "../../store/features/cart/cartSlice";

type IProps = { product: ProductType; index: number; arrLength?: number };

const Product = ({ product, index, arrLength }: IProps) => {
  //   const [isInCart, setIsInCart] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  //check if product is already in wishlist
  //   useEffect(() => {
  //     const item = wishListItems.find((item) => item.id === product.id);
  //     if (item) setIsInCart(true);
  //   }, [wishListItems, product]);

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleAddToCartBtnClick = () => {
    dispatch(addItem({ product: product, quantity: 1 }));
  };

  return (
    <div
      key={product.id}
      className={`grid overflow-hidden group/card  my-2 hover:shadow-normal ${
        arrLength && index === (arrLength as number) - 1 ? "md:grid hidden" : ""
      }`}
    >
      <div className="overflow-hidden">
        <img
          loading="lazy"
          src={product.image}
          alt="img"
          className="h-[100%] w-[100%] aspect-square group-hover/card:scale-110 transition-all duration-[0.5s] ease-in-out cursor-pointer"
        />
      </div>
      <div className="translate-y-[40%] grid gap-2 p-4 group-hover/card:translate-y-0 transition-all duration-500">
        <p className="capitalize text-gray-600">{product.name}</p>
        <p className="text-gray-600">{currencyFormat.format(product.price)}</p>
        <div className="flex justify-between items-center">
          <p
            className="text-gray-600 text-sm font-semibold cursor-pointer"
            onClick={handleAddToCartBtnClick}
          >
            ADD TO CART
          </p>
          <HiOutlineHeart className={`${styles.icon} mx-2`} />
          {/* <HiHeart className={styles.icon} />  sm:translate-y-[40px] */}
        </div>
      </div>
    </div>
  );
};

export default Product;
