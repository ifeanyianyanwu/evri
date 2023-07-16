import { ProductList } from "../../types";
import { FilterOptions } from "./FilterOptions";

export type IProductProp = {
  products: ProductList;
};

const Sidebar = ({ products }: IProductProp) => (
  <aside className="md:block hidden min-w-[200px]">
    <FilterOptions products={products} />
  </aside>
);

export default Sidebar;
