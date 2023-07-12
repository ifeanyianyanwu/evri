import { Navbar } from "../components";
import { useGetProductsQuery } from "../store/features/api/apiSlice";
import { ProductList } from "../types";
import Product from "../components/product/Product";
import { useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import Section from "../layout/Section";
import Container from "../layout/Container";
import SearchInput from "../components/ui/searchinput/SearchInput";
import { Link } from "react-router-dom";
import FiltersSidebar from "../components/filters/FiltersSidebar";

const Shop = () => {
  const { data, error, isLoading } = useGetProductsQuery(null);
  const [filteredProducts, setFilteredProducts] = useState<ProductList>([]);

  const typedData: ProductList = data;
  const { searchText } = useAppSelector((state) => state.products);

  useEffect(() => {
    let filteredData = typedData;
    if (!isLoading && !error) {
      filteredData = typedData?.filter((item) =>
        item.name.includes(searchText)
      );
      setFilteredProducts(filteredData);
    }
  }, [searchText, typedData]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <>
      <Navbar />
      <Container>
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
            <div className="flex justify-between items-center">
              <p className="text-xs">{filteredProducts.length} Products</p>
              <div className="md:hidden block">
                <SearchInput />
              </div>
            </div>
            {!filteredProducts.length && <p>No product found</p>}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 flex-grow">
              {filteredProducts?.map((item) => (
                <Product product={item} key={item.id} />
              ))}
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Shop;
