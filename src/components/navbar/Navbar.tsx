import { HiMenu } from "react-icons/hi";
import Logo from "../../assets/Logo";
import { styles } from "../../styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import {
  showCart,
  showNavbar,
  showWishlist,
} from "../../store/features/modals/modalsSlice";
import { useEffect, useState, useRef } from "react";
import CartIcon from "../cart/CartIcon";
import WishlistIcon from "../wishlist/WishlistIcon";
import SearchInput from "../ui/searchinput/SearchInput";

type IProps = {
  //passing a prop, alternative to determine if search icon should be shown
  shop?: true;
};

const Navbar = ({ shop }: IProps) => {
  const [searchShown, setSearchShown] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/shop") {
      setSearchShown(true);
    }
    return () => {
      if (location.pathname === "/shop") {
        setSearchShown(false);
      }
    };
  }, [location]);

  const handleMenuClick = () => {
    dispatch(showNavbar(true));
  };
  const handleCartBtnClick = () => {
    dispatch(showCart(true));
  };

  const handleWishlistBtnClick = () => {
    dispatch(showWishlist(true));
  };

  return (
    <div className="flex justify-between px-[5%] md:px-10 py-7 items-center gap-6 z-20 absolute top-0 w-full">
      <HiMenu
        className={`${styles.icon} md:hidden block`}
        onClick={handleMenuClick}
      />
      <span
        className="w-[80px] h-[50px] mx-auto md:mx-0 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Logo />
      </span>
      <span className="hidden md:flex gap-6 items-center">
        <Link to="/" className="text-gray-700">
          Home
        </Link>
        <Link to="/shop" className="text-gray-700">
          Shop
        </Link>
      </span>

      <div className="flex gap-6 items-center md:ml-auto">
        <span className="hidden md:flex gap-6 items-center">
          {searchShown && <SearchInput />}
          <WishlistIcon onClick={handleWishlistBtnClick} />
        </span>
        <CartIcon onClick={handleCartBtnClick} />
        <Link to="" className="hidden md:flex text-gray-700">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
