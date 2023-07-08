import {
  HiMenu,
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import Logo from "../../assets/Logo";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showCart, showNavbar } from "../../store/features/modals/modalsSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const navbarShown = useAppSelector((state) => state.modals.navbarShown);

  const handleMenuClick = () => {
    dispatch(showNavbar(!navbarShown));
  };
  const handleCartBtnClick = () => {
    dispatch(showCart(true));
  };

  return (
    <div className="flex justify-between px-[5%] md:px-10 py-7 items-center gap-6 z-20 absolute top-0 w-full">
      <HiMenu
        className={`${styles.icon} md:hidden block`}
        onClick={handleMenuClick}
      />
      <span className="w-[80px] h-[50px] mx-auto md:mx-0">
        <Logo />
      </span>
      <span className="hidden md:flex gap-6 items-center">
        <Link to="" className="text-gray-700">
          Home
        </Link>
        <Link to="" className="text-gray-700">
          Shop
        </Link>
      </span>

      <div className="flex gap-6 items-center md:ml-auto">
        <span className="hidden md:flex gap-6 items-center">
          <HiOutlineSearch className={styles.icon} />
          <HiOutlineHeart className={styles.icon} />
        </span>
        <HiOutlineShoppingCart
          className={styles.icon}
          onClick={handleCartBtnClick}
        />
        <Link to="" className="hidden md:flex text-gray-700">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
