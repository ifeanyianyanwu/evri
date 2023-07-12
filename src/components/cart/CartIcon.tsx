import { HiOutlineShoppingCart } from "react-icons/hi";
import { styles } from "../../styles";
import { useAppSelector } from "../../store/hooks";

type IProps = {
  onClick: () => void;
};

const CartIcon = ({ onClick }: IProps) => {
  const { numberOfItemsInCart } = useAppSelector((state) => state.cart);

  return (
    <div className="relative">
      <HiOutlineShoppingCart className={styles.icon} onClick={onClick} />
      <span className="absolute right-[-8px] top-[-8px] bg-black text-white rounded-full h-4 w-4 grid place-content-center text-xs">
        {numberOfItemsInCart}
      </span>
    </div>
  );
};

export default CartIcon;
