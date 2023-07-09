import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showCart } from "../../store/features/modals/modalsSlice";
import { HiX } from "react-icons/hi";
import { styles } from "../../styles";
import EmptyBag from "../../assets/EmptyBag";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useAppDispatch();

  const cartShown = useAppSelector((state) => state.modals.cartShown);
  const numberOfItemsInCart = useAppSelector(
    (state) => state.cart.numberOfItemsInCart
  );
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const handleCloseBtnClick = () => {
    dispatch(showCart(false));
  };

  const cart: Element = document.getElementById("cart") as Element;

  return (
    <>
      {createPortal(
        <>
          <div
            className={`flex flex-col fixed top-0 right-0 sm:w-1/2 w-full h-screen h-svh bg-white overflow-hidden z-30 transition-all duration-[0.6s] ${
              cartShown
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex justify-between px-[5%] md:px-10 py-7 items-center gap-6 w-full">
              <p>Cart ({numberOfItemsInCart})</p>
              <HiX
                className={`${styles.icon} sm:ml-auto ml-0`}
                onClick={handleCloseBtnClick}
              />
            </div>

            <div className="flex gap-10 px-[5%] md:px-10 flex-col overflow-auto bg-white flex-grow">
              {numberOfItemsInCart === 0 ? (
                <div className="grid gap-6 place-content-center w-full h-full">
                  <EmptyBag />
                  <p className="text-gray-400">No Product in the Cart</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <CartItem key={item.id} product={item} />
                ))
              )}
            </div>
          </div>
          {cartShown && (
            <div className="fixed inset-0 bg-slate-900 opacity-70 z-20 sm:block hidden"></div>
          )}
        </>,
        cart
      )}
    </>
  );
};

export default Cart;
