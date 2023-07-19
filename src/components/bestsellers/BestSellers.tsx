import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { useGetProductsQuery } from "../../store/features/api/apiSlice";
import { ProductList } from "../../types";
import Product from "../product/Product";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const BestSellers = () => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetProductsQuery(null);

  const bestSellers: ProductList = data?.slice(0, 7);

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 relative my-2">
            <h1 className="text-5xl font-extralight text-gray-700">
              Explore Our Bestsellers
            </h1>
            <p className="my-6 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sint
              delectus perferendis
            </p>
            <span className="absolute w-8 h-0.5 bg-black bottom-0"></span>
          </div>
          {error ? (
            <Error />
          ) : isLoading ? (
            <div className="relative grid place-content-center col-span-2">
              <Loading />
            </div>
          ) : (
            bestSellers?.map((item, index) => (
              <Product
                key={item.id}
                product={item}
                index={index}
                arrLength={bestSellers.length}
              />
            ))
          )}
        </div>
        <div className="flex justify-center mt-14">
          <Button onClick={() => navigate("/shop")}>SEE ALL PRODUCTS</Button>
        </div>
      </Container>
    </Section>
  );
};

export default BestSellers;
