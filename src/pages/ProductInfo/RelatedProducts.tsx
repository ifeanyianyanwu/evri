import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../store/services/api/apiSlice";
import { Product as ProductType, ProductList } from "../../types";

type IProps = {
  category: string | undefined;
};

const RelatedProducts = ({ category }: IProps) => {
  const { data, error, isLoading } = useGetProductsQuery(null);

  const relatedByCategory: ProductList = data
    ?.filter((item: ProductType) => item.category === category)
    .slice(0, 4);

  return (
    <div className="flex flex-col gap-6 relative mb-8 pt-8">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <h1 className="text-2xl font-base capitalize">Related Products</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 flex-grow">
            {relatedByCategory?.map((item) => (
              <Product product={item} key={item.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RelatedProducts;
