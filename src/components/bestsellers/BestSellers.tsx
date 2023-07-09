import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { useGetProductsQuery } from "../../store/features/api/apiSlice";
import { ProductList } from "../../types";
import Product from "../product/Product";

const BestSellers = () => {
  const { data, error, isLoading } = useGetProductsQuery(null);

  const bestSellers: ProductList = data?.slice(0, 7);

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-8">
          {error ? (
            <>An error occured</>
          ) : isLoading ? (
            <>Loading...</>
          ) : (
            <div className="col-span-2 md:col-span-1 relative my-2">
              <h1 className="text-5xl font-extralight text-gray-700">
                Explore Our Bestsellers
              </h1>
              <p className="my-6 text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                sint delectus perferendis
              </p>
              <span className="absolute w-8 h-0.5 bg-black bottom-0"></span>
            </div>
          )}
          {bestSellers?.map((item, index) => (
            <Product
              key={item.id}
              product={item}
              index={index}
              arrLength={bestSellers.length}
            />
          ))}
        </div>
        <div className="grid place-content-center mt-14">
          <button className="border-solid border-black border px-6 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300">
            SEE ALL PRODUCTS
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default BestSellers;
