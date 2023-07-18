import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  fullwidth?: boolean;
  disabled?: boolean;
};

const Button = ({ children, onClick, type, fullwidth, disabled }: IProps) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`px-6 py-3 bg-gray-800 text-white ${
        fullwidth ? "sm:w-full" : "sm:w-fit"
      } w-full disabled:opacity-50`}
      disabled={disabled || false}
    >
      {children}
    </button>
  );
};

export default Button;
