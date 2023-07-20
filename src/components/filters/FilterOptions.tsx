import { useEffect, useState } from "react";
import Button from "../ui/button/Button";
import { ColorInput } from "./ColorInput";
import { FilterGroup } from "./FilterGroup";
import { sortOptions } from "../../helper";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  updateFilters,
  clearFilters,
} from "../../store/features/products/productsSlice";
import { IProductProp } from "./Sidebar";

export type State = {
  categories: string[];
  colors: string[];
  sort: { name: string; value: string }[];
};

export const FilterOptions = ({ products }: IProductProp) => {
  const [filterOptions, setFilterOptions] = useState<State>();
  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (products?.length > 0) {
      //create an array of unique colors
      const temp: string[] = [];
      products.forEach((item) => {
        item.colors.forEach((i) => temp.push(i));
      });
      const colors = Array.from(new Set(temp));

      //array of unique categories
      const categories = Array.from(
        new Set(products.map((item) => item.category))
      );

      setFilterOptions({
        categories: categories,
        colors: colors,
        sort: sortOptions,
      });
    }
  }, [products]);

  const handleInputChange = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    dispatch(updateFilters({ name: name, filter: value }));
  };

  return (
    <div>
      <h4 className="mb-6 font-medium">Filter By</h4>

      <div className="grid gap-2">
        <FilterGroup title="SORT BY">
          {filterOptions?.sort.map((item) => (
            <div
              key={item.name}
              className="cursor-pointer w-fit"
              onClick={() =>
                handleInputChange({ name: "Sort", value: item.value })
              }
            >
              <p
                className={`${
                  item.value === filters.sort ? "text-black" : "text-gray-500"
                } hover:text-black capitalize`}
              >
                {item.name}
              </p>
              {item.value === filters.sort ? (
                <div className="w-full h-[1px] bg-black"></div>
              ) : null}
            </div>
          ))}
        </FilterGroup>
        <FilterGroup title="CATEGORY">
          {filterOptions?.categories.map((item) => (
            <div
              key={item}
              className="cursor-pointer w-fit"
              onClick={() =>
                handleInputChange({ name: "Category", value: item })
              }
            >
              <p
                className={`${
                  filters.categories.includes(item)
                    ? "text-black"
                    : "text-gray-500"
                } hover:text-black capitalize`}
              >
                {item}
              </p>
              {filters.categories.includes(item) ? (
                <div className="w-full h-[1px] bg-black"></div>
              ) : null}
            </div>
          ))}
        </FilterGroup>
        <FilterGroup title="COLORS">
          {filterOptions?.colors.map((item) => (
            <ColorInput item={item} key={item} onChange={handleInputChange} />
          ))}
        </FilterGroup>
        <div className="py-8">
          <Button fullwidth onClick={() => dispatch(clearFilters())}>
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
};
