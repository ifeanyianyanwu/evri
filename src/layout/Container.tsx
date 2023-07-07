import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ className, children }: IProps) => {
  return (
    <div
      className={`w-[90%] md:w-[95%] max-w-screen-xl mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
