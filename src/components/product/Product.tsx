import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { Product as ProductType } from "../../types";
import { styles } from "../../styles";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addToCart } from "../../store/features/cart/cartSlice";
import { addToWishlist } from "../../store/features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { useFormatCurrency } from "../../hooks/useFormatCurrency";

type IProps = { product: ProductType; index?: number; arrLength?: number };

const Product = ({ product, index, arrLength }: IProps) => {
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formattedPrice = useFormatCurrency(product.price);

  const { wishlistItems } = useAppSelector((state) => state.wishlist);

  //check if product is already in wishlist
  useEffect(() => {
    const item = wishlistItems.find((item) => item.id === product.id);
    if (item) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [wishlistItems, product]);

  const handleAddToCartBtnClick = () => {
    dispatch(addToCart({ product: product, quantity: 1 }));
  };

  const handleAddToWishlistBtnClick = () => {
    dispatch(addToWishlist(product));
  };

  const heartIcon = isInWishlist ? (
    <HiHeart className={`${styles.icon}`} />
  ) : (
    <HiOutlineHeart className={`${styles.icon}`} />
  );

  return (
    <div
      key={product.id}
      className={`grid overflow-hidden group/card  my-2 hover:shadow-normal ${
        arrLength && index === (arrLength as number) - 1 ? "md:grid hidden" : ""
      } animate-slideup`}
    >
      <div className="overflow-hidden">
        <img
          onClick={() => navigate(`/shop/${product.id}`)}
          loading="lazy"
          src={product.image}
          alt="img"
          className="h-[100%] w-[100%] aspect-square group-hover/card:scale-110 transition-all duration-[0.5s] ease-in-out cursor-pointer object-contain"
        />
      </div>
      <div className="translate-y-[40%] grid gap-2 p-4 group-hover/card:translate-y-0 transition-all duration-500">
        <p className="capitalize text-gray-600">{product.name}</p>
        <p className="text-gray-600">{formattedPrice}</p>
        <div className="flex justify-between items-center">
          <p
            className="text-gray-600 text-sm font-semibold cursor-pointer"
            onClick={handleAddToCartBtnClick}
          >
            ADD TO CART
          </p>
          <div className="mx-2" onClick={handleAddToWishlistBtnClick}>
            {heartIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
