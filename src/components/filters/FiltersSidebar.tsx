import { useEffect, useState } from "react";
import { ProductList } from "../../types";
import Button from "../ui/button/Button";
import { ColorInput } from "./ColorInput";
import { FilterGroup } from "./FilterGroup";
import { sortOptions } from "../../helper";

type IProps = {
  products: ProductList;
};

type State = {
  categories: string[];
  colors: string[];
  sort: { name: string; value: string }[];
};

const FiltersSidebar = ({ products }: IProps) => {
  const [filterOptions, setFilterOptions] = useState<State>();

  useEffect(() => {
    if (products) {
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

  return (
    <aside className="md:block hidden min-w-[200px]">
      <h4 className="mb-6 font-medium">Filter By</h4>
      <div className="grid gap-2">
        <FilterGroup title="Sort By">
          {filterOptions?.sort.map((item) => (
            <div key={item.name} className="flex gap-2 items-center">
              <input type="radio" id={item.value} name="sort" />
              <label htmlFor={item.value} className="capitalize font-light">
                {item.name}
              </label>
            </div>
          ))}
        </FilterGroup>
        <FilterGroup title="Category">
          {filterOptions?.categories.map((item) => (
            <div key={item} className="flex gap-2 items-center">
              <input type="checkbox" id={item} />
              <label htmlFor={item} className="capitalize font-light">
                {item}
              </label>
            </div>
          ))}
        </FilterGroup>
        <FilterGroup title="Colors">
          {filterOptions?.colors.map((item) => (
            <ColorInput item={item} key={item} />
          ))}
        </FilterGroup>
        <div className="py-8">
          <Button fullwidth>Clear Filters</Button>
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
