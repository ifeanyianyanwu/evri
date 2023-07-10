import {
  Product,
  ProductList,
  WishlistItem as WishlistItemType,
} from "../../types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/features/cart/cartSlice";
import { useGetProductsQuery } from "../../store/features/api/apiSlice";
import { addToWishlist } from "../../store/features/wishlist/wishlistSlice";
import { useEffect, useState } from "react";

type IProps = { product: WishlistItemType };

const WishlistItem = ({ product }: IProps) => {
  const [filteredProduct, setFilteredProduct] = useState<Product | null>(null);
  const { data } = useGetProductsQuery(null);
  const dispatch = useAppDispatch();

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  //on mount fiter products object and get product equal to wish list product
  useEffect(() => {
    const products: ProductList = data;
    const item = products?.filter((item) => item.id === product.id)[0];
    setFilteredProduct(item);
  }, [data, product]);

  const handleAddToCartBtnClick = () => {
    if (!filteredProduct) return;
    dispatch(addToCart({ product: filteredProduct as Product, quantity: 1 }));
    dispatch(addToWishlist(filteredProduct as Product));
  };

  const handleRemoveBtnClick = () => {
    if (!filteredProduct) return;
    dispatch(addToWishlist(filteredProduct as Product));
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
          <p
            onClick={handleAddToCartBtnClick}
            className="text-gray-600 text-sm font-semibold cursor-pointer"
          >
            MOVE TO CART
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-end">
        <AiOutlineCloseCircle
          size={22}
          className="cursor-pointer text-gray-400 hover:text-black"
          onClick={handleRemoveBtnClick}
        />
        <p className="text-gray-600">{currencyFormat.format(product.price)}</p>
      </div>
    </div>
  );
};

export default WishlistItem;
