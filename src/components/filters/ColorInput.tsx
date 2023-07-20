import { useEffect, useState } from "react";
import convert from "color-convert";
import { useAppSelector } from "../../store/hooks";

type IProps = {
  item: string;
  onChange: ({ name, value }: { name: string; value: string }) => void;
};

export const ColorInput = ({ item, onChange }: IProps) => {
  const [color, setColor] = useState("");
  const { colors } = useAppSelector((state) => state.products.filters);

  useEffect(() => {
    setColor(convert.hex.keyword(item));
  }, []);

  return (
    <div
      key={item}
      className="cursor-pointer w-fit"
      onClick={() => onChange({ name: "Color", value: item })}
    >
      <div className="flex gap-2 items-center">
        <p
          className={`${
            colors.includes(item) ? "text-black" : "text-gray-500"
          } hover:text-black capitalize`}
        >
          {color}
        </p>
        <span
          style={{ backgroundColor: item }}
          className="rounded-full h-2 w-2 p-2 block"
        ></span>
      </div>
      {colors.includes(item) ? (
        <div className="w-full h-[1px] bg-black"></div>
      ) : null}
    </div>
  );
};
