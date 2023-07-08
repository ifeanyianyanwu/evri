import React, { useEffect } from "react";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { useGetProductsQuery } from "../../store/features/api/apiSlice";
import { ProductList } from "../../types";

const BestSellers = () => {
  const { data, error, isLoading } = useGetProductsQuery(null);

  const bestSellers: ProductList = data?.slice(0, 7);

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Section>
      <Container className="grid grid-cols-2 lg:grid-cols-4  gap-8">
        {error ? (
          <>An error occured</>
        ) : isLoading ? (
          <>Loading...</>
        ) : (
          <div className="col-span-2 md:col-span-1 relative">
            <h1 className="text-5xl font-extralight text-gray-700">
              Explore Our Bestsellers
            </h1>
            <p className="my-6 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sint
              delectus perferendis
            </p>
            <span className="absolute w-8 h-0.5 bg-black bottom-0"></span>
          </div>
        )}
        {bestSellers?.map((item, index) => (
          <div
            key={item.id}
            className={`grid gap-4 overflow-hidden group/card cursor-pointer ${
              index === bestSellers.length - 1 ? "md:grid hidden" : ""
            }`}
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt="img"
                className="max-w-[100%] aspect-square group-hover/card:scale-110 transition-all duration-[0.5s] ease-in-out"
              />
            </div>
            <div className="translate-y-[30px] grid gap-2 p-2 group-hover/card:translate-y-0 transition-all duration-500">
              <p className="capitalize text-gray-600">{item.name}</p>
              <p className="text-gray-600">
                {currencyFormat.format(item.price)}
              </p>
              <div className="text-gray-600">gfgfdgffgghyhug</div>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default BestSellers;
