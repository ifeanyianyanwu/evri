import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showCart } from "../../store/features/modals/modalsSlice";
import {
  HiOutlineHeart,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiX,
} from "react-icons/hi";
import { styles } from "../../styles";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useAppDispatch();

  const cartShown = useAppSelector((state) => state.modals.cartShown);

  const handleCloseBtnClick = () => {
    dispatch(showCart(!cartShown));
  };

  const cart: Element = document.getElementById("cart") as Element;

  return (
    <>
      {createPortal(
        <div
          className={`flex flex-col fixed top-0 right-0 sm:w-1/2 w-full h-screen bg-white overflow-hidden z-30 transition-all duration-[0.6s] ${
            cartShown
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex justify-between px-[5%] md:px-10 py-7 items-center gap-6 w-full">
            <p>Cart (0)</p>
            <HiX
              className={`${styles.icon} sm:ml-auto ml-0`}
              onClick={handleCloseBtnClick}
            />
          </div>

          <div className="flex gap-10 px-[5%] md:px-10 flex-col overflow-auto bg-red-800 flex-grow"></div>
        </div>,
        cart
      )}
    </>
  );
};

export default Cart;
