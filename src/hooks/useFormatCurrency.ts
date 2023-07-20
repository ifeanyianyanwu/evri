import { useEffect, useState } from "react";

export const useFormatCurrency = (value: number) => {
  const [formattedCurrency, setFormattedCurrency] = useState<string>();

  useEffect(() => {
    const currencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const format = currencyFormat.format(value);
    setFormattedCurrency(format);
  }, [value]);

  return formattedCurrency;
};
