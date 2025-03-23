import React, { memo, useEffect, useState } from "react";
import PageHeader from "components/PageHeader";
import { Empty, Flex, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProductByIdThunk } from "hooks/useProduct";
import { useParams } from "react-router-dom";
import { AUTHENTICATED_ROUTES_URL } from "utils/routesConstant";
import Spinner from "components/Spinner";
import CustomText from "components/CustomText";
import ProductStatusTag from "components/ProductStatusTag";
import CustomRating from "components/CustomRating";
import CustomProductCard from "components/CustomProductCard";
import CustomPagination from "components/CustomPagination";

const PAGE_SIZE = 5; // Ek page pe kitne products dikhane hain

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.selectedProduct);
  const { items: allProducts, status } = useSelector((state) => state.products);

  const [filteredData, setFilteredData] = useState([]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(getProductByIdThunk(id));
    }

    if (!allProducts || allProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allProducts, id]);

  useEffect(() => {
    if (allProducts.length > 0 && data?.category) {
      const related = allProducts.filter(
        (product) =>
          product.category === data.category && product.id !== data.id
      );
      setFilteredData(related);
      setCurrent(1);
    }
  }, [allProducts, data]);

  if (status === "loading") {
    return <Spinner />;
  }

  const startIndex = (current - 1) * PAGE_SIZE;
  const paginatedData = filteredData.slice(startIndex, startIndex + PAGE_SIZE);

  const handleChangePagination = (page) => {
    setCurrent(page);
  };

  return (
    <>
      <PageHeader
        text="Product Detail"
        items={[
          { label: "All Product", link: AUTHENTICATED_ROUTES_URL.PRODUCTS },
          { label: "Product Detail" },
        ]}
      />

      <Flex className="px-4 py-4 mt-4 bg-black1">
        <main className="w-[45%]">
          <Image
            src={data?.imageUrl || "/default-product-image.jpg"}
            className="min-h-[400px] max-h-[400px] object-contain rounded-sm"
          />
        </main>
        <main className="w-[54%] pt-16">
          <CustomText text={data?.productName || "product"} type="title" />

          <ProductStatusTag status={data?.stckstatus} />

          <CustomText
            text={data?.description}
            type="paragraph"
            className="pt-2 !mb-1 text-grey1 h-[70px] overflow-y-auto"
          />
          <CustomText
            text="Product Rating"
            type="paragraph"
            className="text-grey1 text-[14px] !mb-0"
            ellipsis
          />
          <CustomRating defaultValue={data?.rating} disabled />
          <CustomText
            text={`$${data?.price}`}
            type="text"
            className="font-semibold text-blue2 text-[24px]"
          />
          <CustomText
            text={`Product Quantity : ${data?.stockQuantity}`}
            type="paragraph"
            className="text-grey1 text-[14px]"
            ellipsis
          />
        </main>
      </Flex>

      <section>
        {paginatedData.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {paginatedData.map((product) => (
                <CustomProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <CustomPagination
                total={filteredData.length}
                pageSize={PAGE_SIZE}
                current={current}
                onChange={handleChangePagination}
              />
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-[50vh]">
            <Empty
              description={
                <CustomText
                  text="No Products Found."
                  className="text-gray-500"
                />
              }
            />
          </div>
        )}
      </section>
    </>
  );
}

export default memo(ProductDetail);
