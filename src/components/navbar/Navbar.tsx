import {
  HiMenu,
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import Logo from "../../assets/Logo";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[5%] md:px-10 py-7 items-center gap-6 z-10">
      <HiMenu className={`${styles.icon} md:hidden block`} />
      <span className="w-[80px] h-[50px] mx-auto md:mx-0">
        <Logo />
      </span>
      <span className="hidden md:flex gap-6 items-center">
        <Link to="">Home</Link>
        <Link to="">Shop</Link>
      </span>

      <div className="flex gap-6 items-center md:ml-auto">
        <span className="hidden md:flex gap-6 items-center">
          <Link to="">Sign in</Link>
          <HiOutlineSearch className={styles.icon} />
          <HiOutlineHeart className={styles.icon} />
        </span>
        <HiOutlineShoppingCart className={styles.icon} />
      </div>
    </div>
  );
};

export default Navbar;
