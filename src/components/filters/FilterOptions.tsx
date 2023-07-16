import { SyntheticEvent, useEffect, useState } from "react";
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

  const handleInputChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    dispatch(updateFilters({ name: name, filter: value }));
  };

  return (
    <div>
      <h4 className="mb-6 font-medium">Filter By</h4>

      <div className="grid gap-2">
        <FilterGroup title="Sort By">
          {filterOptions?.sort.map((item) => (
            <div key={item.name} className="flex gap-2 items-center">
              <input
                type="radio"
                id={item.value}
                name="Sort"
                onChange={handleInputChange}
                value={item.value}
                checked={filters.sort === item.value}
              />
              <label htmlFor={item.value} className="capitalize font-light">
                {item.name}
              </label>
            </div>
          ))}
        </FilterGroup>
        <FilterGroup title="Category">
          {filterOptions?.categories.map((item) => (
            <div key={item} className="flex gap-2 items-center">
              <input
                type="checkbox"
                id={item}
                name="Category"
                onChange={handleInputChange}
                value={item}
                checked={filters.categories.includes(item)}
              />
              <label htmlFor={item} className="capitalize font-light">
                {item}
              </label>
            </div>
          ))}
        </FilterGroup>
        <FilterGroup title="Colors">
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
