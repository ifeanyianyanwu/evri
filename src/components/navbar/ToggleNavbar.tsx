import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showNavbar } from "../../store/features/modals/modalsSlice";
import {
  HiOutlineHeart,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiX,
} from "react-icons/hi";
import { styles } from "../../styles";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";

const ToggleNavbar = () => {
  const dispatch = useAppDispatch();

  const navBarShown = useAppSelector((state) => state.modals.navBarShown);

  const handleMenuClick = () => {
    dispatch(showNavbar(!navBarShown));
  };

  const nav: Element = document.getElementById("mobile-nav") as Element;

  return (
    <>
      {createPortal(
        <div
          className={`md:hidden flex flex-col absolute top-0 sm:w-1/2 w-full h-screen bg-white overflow-hidden z-30 transition-all ${
            navBarShown ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          <div className="flex justify-between px-[5%] md:px-10 py-7 items-center gap-6 w-full">
            <HiX
              className={`${styles.icon} sm:ml-auto ml-0`}
              onClick={handleMenuClick}
            />
            <span className="w-[80px] h-[50px] mx-auto block sm:hidden">
              <Logo />
            </span>
            <HiOutlineShoppingCart
              className={`${styles.icon} block sm:hidden`}
            />
          </div>

          <div className="flex gap-10 px-[5%] md:px-10 flex-col">
            <Link to="">Home</Link>
            <Link to="">Shop</Link>
            <span className="flex justify-between">
              <p>Search</p>
              <HiOutlineSearch className={styles.icon} />
            </span>
            <span className="flex justify-between">
              <p>Wishlist</p>
              <HiOutlineHeart className={styles.icon} />
            </span>
            <Link to="" className="flex md:hidden">
              Sign in
            </Link>
          </div>
        </div>,
        nav
      )}
    </>
  );
};

export default ToggleNavbar;
