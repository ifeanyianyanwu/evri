import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  showCart,
  showWishlist,
  showNavbar,
} from "../../store/features/modals/modalsSlice";
import { HiX } from "react-icons/hi";
import { styles } from "../../styles";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";
import CartIcon from "../cart/CartIcon";
import WishlistIcon from "../wishlist/WishlistIcon";

const ToggleNavbar = () => {
  const dispatch = useAppDispatch();

  const { navbarShown } = useAppSelector((state) => state.modals);

  const handleCloseBtnClick = () => {
    dispatch(showNavbar(false));
  };

  const handleCartBtnClick = () => {
    dispatch(showCart(true));
  };

  const handleWishlistBtnClick = () => {
    dispatch(showWishlist(true));
  };

  const nav: Element = document.getElementById("mobile-nav") as Element;

  return (
    <>
      {createPortal(
        <>
          <div
            className={`md:hidden flex flex-col fixed top-0 left-0 sm:w-1/2 w-full h-screen h-svh bg-white overflow-auto pb-10 z-30 transition-all duration-[0.6s] ${
              navbarShown
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100%] opacity-0"
            }`}
          >
            <div className="flex justify-between px-[5%] md:px-10 py-7 items-center gap-6 w-full">
              {/* sm:ml-auto ml-0 */}
              <HiX className={`${styles.icon}`} onClick={handleCloseBtnClick} />
              <span className="w-[80px] h-[50px] mx-auto block sm:hidden">
                <Logo />
              </span>
              <CartIcon onClick={handleCartBtnClick} />
            </div>

            <div className="flex gap-10 px-[5%] md:px-10 flex-col">
              <Link onClick={handleCloseBtnClick} to="/">
                Home
              </Link>
              <Link onClick={handleCloseBtnClick} to="/shop">
                Shop
              </Link>
              <span
                className="flex justify-between"
                onClick={handleWishlistBtnClick}
              >
                <p>Wishlist</p>
                <WishlistIcon />
              </span>
              {/* <Link to="" className="flex md:hidden">
                Sign in
              </Link> */}
            </div>
          </div>
          {navbarShown && (
            <div
              className="fixed inset-0 bg-slate-900 opacity-70 z-20 sm:block md:hidden hidden"
              onClick={handleCloseBtnClick}
            ></div>
          )}
        </>,
        nav
      )}
    </>
  );
};

export default ToggleNavbar;
