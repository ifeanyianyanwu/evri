import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showCart } from "../../store/features/modals/modalsSlice";
import { HiX } from "react-icons/hi";
import { styles } from "../../styles";
import EmptyBag from "../../assets/EmptyBag";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { calculateTotal } from "../../store/features/cart/cartSlice";
import { Button } from "../ui";
import { useFormatCurrency } from "../../hooks/useFormatCurrency";

const Cart = () => {
  //Get the Redux dispatch function
  const dispatch = useAppDispatch();

  //Retrieve data from the Redux store using selectors
  const cartShown = useAppSelector((state) => state.modals.cartShown);
  const numberOfItemsInCart = useAppSelector(
    (state) => state.cart.numberOfItemsInCart
  );
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector((state) => state.cart.total);

  //Format total price with currency
  const formattedCurrency = useFormatCurrency(totalPrice);

  //Handler to close the cart
  const handleCloseBtnClick = () => {
    dispatch(showCart(false));
  };

  //Calculate total price when cart items changes
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  //Find the element with ID 'cart' to create a portal
  const cart: Element = document.getElementById("cart") as Element;

  return (
    <>
      {createPortal(
        <>
          <div
            className={`flex flex-col fixed top-0 right-0 w-full sm:w-3/4 lg:w-1/2 max-w-[640px] h-screen h-svh bg-white overflow-hidden z-30 transition-all duration-[0.6s] ${
              cartShown
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex justify-between px-[5%] md:px-10 py-8 sm:py-12 items-center gap-6 w-full">
              <p>Cart ({numberOfItemsInCart})</p>
              <HiX
                className={`${styles.icon} sm:ml-auto ml-0`}
                onClick={handleCloseBtnClick}
              />
            </div>

            <div className="flex gap-10 px-[5%] md:px-10 flex-col overflow-auto bg-white flex-grow ">
              {numberOfItemsInCart === 0 ? (
                <div className="grid gap-6 place-content-center w-full h-full">
                  <EmptyBag />
                  <p className="text-gray-400">No Product in the Cart</p>
                </div>
              ) : (
                <div className="flex gap-8 flex-col">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} product={item} />
                  ))}
                </div>
              )}
            </div>
            {numberOfItemsInCart !== 0 && (
              <div className="px-10 py-6 flex justify-between items-center gap-6 sm:flex-row flex-col">
                <p>Total: {formattedCurrency}</p>
                <Button>CHECK OUT</Button>
              </div>
            )}
          </div>
          {cartShown && (
            <div
              className="fixed inset-0 bg-slate-900 opacity-70 z-20 sm:block hidden"
              onClick={handleCloseBtnClick}
            ></div>
          )}
        </>,
        cart
      )}
    </>
  );
};

export default Cart;
