import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  useGetProductInfoQuery,
  useGetProductsQuery,
} from "../store/features/api/apiSlice";

import { Navbar } from "../components";
import Container from "../layout/Container";
import { styles } from "../styles";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Product, ProductInfo as ProductInfoType } from "../types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart } from "../store/features/cart/cartSlice";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { addToWishlist } from "../store/features/wishlist/wishlistSlice";
import Button from "../components/ui/button/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductInfo = () => {
  const [productInfo, setProductInfo] = useState<ProductInfoType>();
  const [product, setProduct] = useState<Product>();
  const [displayedImage, setDisplayedImage] = useState<string>("");
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);
  const [cartQuantity, setCartQuantity] = useState<number>(1);

  const { wishlistItems } = useAppSelector((state) => state.wishlist);

  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetProductInfoQuery(id);
  const {
    data: productsData,
    error: productsError,
    isLoading: productIsLoading,
  } = useGetProductsQuery(null);

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleAddToCartBtnClick = () => {
    dispatch(
      addToCart({ product: product as Product, quantity: cartQuantity })
    );
  };

  const handleAddToWishlistBtnClick = () => {
    dispatch(addToWishlist(product as Product));
  };

  const handleIncreaseBtnClick = () => {
    setCartQuantity((prev) => prev + 1);
  };

  const handleDecreaseBtnClick = () => {
    if (cartQuantity === 1) return;
    setCartQuantity((prev) => prev - 1);
  };

  const heartIcon = isInWishlist ? (
    <HiHeart className={`${styles.icon} text-white`} />
  ) : (
    <HiOutlineHeart className={`${styles.icon} text-white`} />
  );

  useEffect(() => {
    //handle updating the state for product details after the data is done fetching
    if (data !== undefined) {
      setProductInfo(data);

      //handle setting the default product image
      setDisplayedImage(data.images[0].thumbnails.full.url);
    }
    if (productsData !== undefined) {
      //handle finding the product in the products array and setting it's variant from the products array to the product state
      //for the purpose of updating cart and wishlist with the proper product object type
      const productobj = productsData.find((x: Product) => data?.id === x.id);
      setProduct(productobj);
    }
  }, [data, productsData]);

  useEffect(() => {
    if (productInfo !== undefined) {
      //check if product is already in wishlist
      const wishListItem = wishlistItems.find(
        (item) => item.id === productInfo.id
      );
      if (wishListItem) {
        setIsInWishlist(true);
      } else {
        setIsInWishlist(false);
      }
    }
  }, [wishlistItems, productInfo]);

  return (
    <div>
      <Navbar />
      <Container>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occurred</p>
        ) : (
          <>
            {/* heading */}
            <div className="flex justify-between md:py-6 py-1 gap-2 flex-wrap">
              <span
                className="flex gap-3 items-center cursor-pointer text-gray-500"
                onClick={() => navigate("/shop")}
              >
                <BsFillArrowLeftCircleFill
                  className={`text-2xl cursor-pointer`}
                />
                <p>Back to Shop</p>
              </span>
              <span className=" gap-2 text-xs hidden md:flex">
                <Link to="/">Home</Link>
                &gt;
                <Link to="/shop">Shop</Link>
                &gt;
                <Link to={`/shop/${id}`} className="capitalize">
                  {data?.name}
                </Link>
              </span>
            </div>
            {/* product details content */}
            <div className="flex flex-col sm:grid grid-flow-col md:grid-flow-row grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-8 my-8">
              {/* image content */}
              <div className="grid grid-flow-col lg:grid-flow-row grid-cols-1 lg:grid-cols-5 grid-rows-5 lg:grid-rows-1 gap-4 h-[338px] lg:h-[395px] md:h-[800px] sm:h-[458px]">
                <div className="flex flex-row lg:flex-col gap-2 max-w-full order-last lg:order-1 justify-between">
                  {productInfo?.images.map((img) => (
                    <div key={img.id} className="h-full">
                      <img
                        key={img.id}
                        src={img.thumbnails.small.url}
                        alt="product thumbnail"
                        className="h-full w-full aspect-[5/3] sm:aspect-[7/4]"
                        onClick={() =>
                          setDisplayedImage(img.thumbnails.full.url)
                        }
                      />
                    </div>
                  ))}
                </div>
                <figure className="col-span-1 lg:col-span-4 row-span-4 lg:row-span-1 order-1 lg:order-last relative ">
                  <img
                    src={displayedImage}
                    alt="product full-image"
                    className="h-full w-full"
                  />
                  <div
                    className="absolute -top-4 lg:-bottom-4 lg:top-auto right-2 bg-gray-800 p-2 rounded-full"
                    onClick={handleAddToWishlistBtnClick}
                  >
                    {heartIcon}
                  </div>
                </figure>
              </div>

              {/* other details content */}
              <div className="">
                <h1>{productInfo?.name}</h1>
                <p>{productInfo?.description}</p>
                <div>
                  {productInfo?.stars}
                  stars {productInfo?.reviews}
                </div>
                <p>
                  {productInfo?.price &&
                    currencyFormat.format(productInfo.price)}
                </p>
                <div>
                  {productInfo?.colors.map((color) => (
                    <div
                      key={color}
                      style={{ backgroundColor: color }}
                      className="h-4 w-4"
                    ></div>
                  ))}
                </div>
                <div>
                  <span className="flex gap-3 items-center border-solid border-black border p-1 w-fit">
                    <AiOutlineMinus
                      onClick={handleDecreaseBtnClick}
                      className="cursor-pointer"
                    />
                    <p>{cartQuantity}</p>
                    <AiOutlinePlus
                      onClick={handleIncreaseBtnClick}
                      className="cursor-pointer"
                    />
                  </span>
                  <Button
                    disabled={
                      productInfo?.stock && productInfo.stock > 0 ? false : true
                    }
                  >
                    ADD TO CART
                  </Button>
                </div>
                <div>
                  <p>Company: {productInfo?.company}</p>
                  <p>Category: {productInfo?.category}</p>
                  <p>In stock: {productInfo?.stock}</p>
                </div>
              </div>
            </div>
            <div>Related Products</div>
          </>
        )}
      </Container>
    </div>
  );
};

export default ProductInfo;
