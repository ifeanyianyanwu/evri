import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  fullwidth?: boolean;
};

const Button = ({ children, onClick, type, fullwidth }: IProps) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`border-solid border-black border px-6 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300 ${
        fullwidth ? "sm:w-full" : "sm:w-fit"
      } w-full`}
    >
      {children}
    </button>
  );
};

export default Button;
