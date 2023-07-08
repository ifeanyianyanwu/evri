import { ReactNode } from "react";

type BackGround = "none" | "brands";

type IProps = {
  id?: string;
  background?: BackGround;
  children: ReactNode;
};

const Section = ({ id, children, background }: IProps) => {
  return (
    <section id={id} className={`bg-${background || "none"} w-full py-16`}>
      {children}
    </section>
  );
};

export default Section;
