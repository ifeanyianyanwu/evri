import { ReactNode } from "react";

type BackGround = "none" | "cream";

type IProps = {
  id?: string;
  background?: BackGround;
  children: ReactNode;
};

const Section = ({ id, children, background }: IProps) => {
  return (
    <section
      id={id}
      className={`${
        background === "cream" ? "bg-[#F5EFEB]" : "bg-none"
      } w-full sm:py-16 py-11`}
    >
      {children}
    </section>
  );
};

export default Section;
