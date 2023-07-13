import { Navbar } from "../components";
import { useGetProductsQuery } from "../store/features/api/apiSlice";
import { Product as ProductType, ProductList } from "../types";
import Product from "../components/product/Product";
import { useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import Container from "../layout/Container";
import SearchInput from "../components/ui/searchinput/SearchInput";
import { Link } from "react-router-dom";
import FiltersSidebar from "../components/filters/FiltersSidebar";
import Button from "../components/ui/button/Button";

const Shop = () => {
  const { data, error, isLoading } = useGetProductsQuery(null);
  const [filteredProducts, setFilteredProducts] = useState<ProductList>([]);

  const { searchText } = useAppSelector((state) => state.products);

  useEffect(() => {
    let filteredData: ProductList = data;

    if (!isLoading && !error && data?.length) {
      filteredData = data.filter((item: ProductType) =>
        item.name.includes(searchText)
      );
    }

    setFilteredProducts(filteredData);
  }, [searchText, data]);

  return (
    <>
      <Navbar />
      <Container>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occurred</p>
        ) : (
          <>
            <div className="flex justify-between items-center md:py-10 py-6 gap-2">
              <h1 className="text-xl font-base">Shop</h1>
              <span className="flex gap-2 text-xs">
                <Link to="/">Home</Link>
                &gt;
                <Link to="/shop">Shop</Link>
              </span>
            </div>

            <div className="flex gap-6 md:py-10 py-6">
              <FiltersSidebar />
              <section className="grid gap-8 w-full">
                <div className="md:hidden w-full flex justify-end">
                  <SearchInput />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="md:hidden block w-[50%]">
                    <Button>Filters</Button>
                  </div>
                  <p className="text-xs w-[50%] text-right md:text-left">
                    {filteredProducts.length} Products
                  </p>
                </div>
                {!filteredProducts.length && <p>No product found</p>}
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
    </>
  );
};

export default Shop;
