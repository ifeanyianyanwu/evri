import { useEffect, useState } from "react";
import convert from "color-convert";

export const ColorInput = ({ item }: { item: string }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(convert.hex.keyword(item));
  }, []);

  return (
    <div className="flex gap-2 items-center">
      <input type="checkbox" id={item} />
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
