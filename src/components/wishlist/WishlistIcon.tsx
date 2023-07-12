import { HiOutlineHeart } from "react-icons/hi";
import { styles } from "../../styles";
import { useAppSelector } from "../../store/hooks";

type IProps = {
  onClick?: () => void;
};

const WishlistIcon = ({ onClick }: IProps) => {
  const { numberOfItemsInWishlist } = useAppSelector((state) => state.wishlist);

  return (
    <div className="relative">
      <HiOutlineHeart className={styles.icon} onClick={onClick} />
      <span className="absolute right-[-8px] top-[-8px] bg-black text-white rounded-full h-4 w-4 grid place-content-center text-xs">
        {numberOfItemsInWishlist}
      </span>
    </div>
  );
};

export default WishlistIcon;
