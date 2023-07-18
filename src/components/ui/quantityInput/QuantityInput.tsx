import { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type IProps = {
  handleIncreaseBtnClick: () => void;
  handleDecreaseBtnClick: () => void;
  value: number;
  className: string;
};

const QuantityInput = ({
  handleDecreaseBtnClick,
  handleIncreaseBtnClick,
  value,
  className,
}: IProps) => {
  return (
    <span className={className}>
      <AiOutlineMinus
        onClick={handleDecreaseBtnClick}
        className="cursor-pointer"
      />
      <p>{value}</p>
      <AiOutlinePlus
        onClick={handleIncreaseBtnClick}
        className="cursor-pointer"
      />
    </span>
  );
};

export default QuantityInput;
