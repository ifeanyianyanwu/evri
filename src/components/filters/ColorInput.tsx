import { SyntheticEvent, useEffect, useState } from "react";
import convert from "color-convert";
import { useAppSelector } from "../../store/hooks";

type IProps = {
  item: string;
  onChange: (e: SyntheticEvent) => void;
};

export const ColorInput = ({ item, onChange }: IProps) => {
  const [color, setColor] = useState("");
  const { filters } = useAppSelector((state) => state.products);

  useEffect(() => {
    setColor(convert.hex.keyword(item));
  }, []);

  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        id={item}
        value={item}
        onChange={onChange}
        name="Color"
        checked={filters.colors.includes(item)}
      />
      <label htmlFor={item} className="capitalize font-light">
        {color}
      </label>
      <span
        style={{ backgroundColor: item }}
        className="rounded-full h-2 w-2 p-2 block"
      ></span>
    </div>
  );
};
