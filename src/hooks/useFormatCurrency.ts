import { useEffect, useState } from "react";

export const useFormatCurrency = (value: number | undefined) => {
  const [formattedCurrency, setFormattedCurrency] = useState<string>();

  useEffect(() => {
    if (value === undefined) return;
    const currencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const format = currencyFormat.format(value);
    setFormattedCurrency(format);
  }, [value]);

  return formattedCurrency;
};
