import { Navbar } from "../components";
import { useGetProductsQuery } from "../store/features/api/apiSlice";
import { Product as ProductType, ProductList } from "../types";
import Product from "../components/product/Product";
import { useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import Container from "../layout/Container";
import SearchInput from "../components/ui/searchinput/SearchInput";
import { Link } from "react-router-dom";
import FiltersSidebar from "../components/filters/Sidebar";
import Button from "../components/ui/button/Button";
import MobileFilters from "../components/filters/MobileFilters";
import Loading from "../components/loading/Loading";

const Shop = () => {
  const { data, error, isLoading } = useGetProductsQuery(null);
  const [filteredProducts, setFilteredProducts] = useState<ProductList>([]);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const { searchText, filters } = useAppSelector((state) => state.products);

  //handle filter logic
  useEffect(() => {
    let filteredData: ProductList = data;

    //check if there's data before before performing any action
    if (data?.length > 0) {
      const { categories, colors, sort } = filters;

      //check if there's any filter data before filtering
      const filterValid =
        categories.length > 0 || colors.length > 0 || sort !== "";

      if (filterValid) {
        filteredData = filteredData
          .filter((product) => {
            if (categories.length > 0)
              return categories.includes(product.category);
            else return product;
          })
          .filter((product) => {
            if (colors.length > 0)
              return colors.some((color) => product.colors.includes(color));
            else return product;
          })
          .sort((a, b) => {
            if (sort === "lowToHigh") {
              return a.price - b.price;
            } else if (sort === "highToLow") {
              return b.price - a.price;
            } else if (sort === "ascending") {
              return a.name.localeCompare(b.name);
            } else if (sort === "descending") {
              return b.name.localeCompare(a.name);
            }
            return (a.id as any) - (b.id as any);
          });
      }

      //handle search
      if (searchText !== "") {
        filteredData = filteredData.filter((item: ProductType) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
    }

    setFilteredProducts(filteredData);
  }, [filters, data, searchText]);

  return (
    <div className="relative">
      <Navbar />
      <MobileFilters
        showFilterModal={showFilterModal}
        setShowFilterModal={setShowFilterModal}
        products={data}
      />
      <Container>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <p>An error occurred</p>
        ) : (
          <>
            <div className="flex justify-between items-center md:py-8 py-6 gap-2">
              <h1 className="text-xl font-medium">Shop</h1>
              <span className="flex gap-2 text-xs">
                <Link to="/">Home</Link>
                &gt;
                <Link to="/shop">Shop</Link>
              </span>
            </div>

            <div className="flex gap-8 md:py-8 py-6 items-start">
              <FiltersSidebar products={data} />
              <section className="grid gap-8 w-full">
                <div className="md:hidden w-full flex justify-end">
                  <SearchInput />
                </div>
                <div className="flex justify-between items-center gap-8">
                  <div className="md:hidden block w-[50%]">
                    <Button fullwidth onClick={() => setShowFilterModal(true)}>
                      Filters
                    </Button>
                  </div>
                  <p className="text-xs w-[50%] text-right md:text-left">
                    {filteredProducts?.length} Products
                  </p>
                </div>
                {!filteredProducts?.length && (
                  <p className="text-xl mx-auto my-4">No product found</p>
                )}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 flex-grow">
                  {filteredProducts?.map((item) => (
                    <Product product={item} key={item.id} />
                  ))}
                </div>
              </section>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Shop;
