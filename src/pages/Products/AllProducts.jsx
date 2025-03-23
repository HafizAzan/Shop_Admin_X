import React, { memo, useEffect, useMemo, useState } from "react";
import PageHeader from "components/PageHeader";
import CustomProductCard from "components/CustomProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "hooks/useProduct";
import { Empty, Flex, Input, Space, Spin } from "antd";
import CustomPagination from "components/CustomPagination";
import CustomText from "components/CustomText";
import CustomSelect from "components/CustomSelect";
import { categoriesItems, productStatus } from "utils/constant";
import Spinner from "components/Spinner";
import Fuse from "fuse.js";
import CustomSearch from "components/CustomSearch";

const PAGE_SIZE = 5;

function AllProducts() {
  const dispatch = useDispatch();
  const { items: data, status } = useSelector((state) => state.products);

  const [current, setCurrent] = useState(1);
  const [prodStatus, setStatus] = useState("all products");
  const [category, setCategory] = useState("All Categories");
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredData = useMemo(() => {
    let result = data;

    if (prodStatus !== "all products") {
      result = result.filter((item) => item.status === prodStatus);
    }

    if (category !== "All Categories") {
      result = result.filter((item) => item.category === category);
    }

    if (searchQuery.trim() !== "") {
      const searchResults = new Fuse(result, {
        keys: ["productName", "description", "category"],
        threshold: 0.3,
      }).search(searchQuery);

      result = searchResults.map((res) => res.item);
    }

    return result;
  }, [data, prodStatus, category, searchQuery]);

  const paginatedData = useMemo(() => {
    const startIndex = (current - 1) * PAGE_SIZE;
    return filteredData.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredData, current]);

  const handleChangePagination = (page) => {
    setCurrent(page);
  };

  const selectStatus = (value) => {
    if (value !== prodStatus) {
      setStatus(value);
      setCurrent(1);
    }
  };

  if (status === "loading") {
    return <Spinner />;
  }

  const onSearch = (value) => {
    setSearchQuery(value);
    setCurrent(1);
  };

  return (
    <>
      <PageHeader text="All Products" items={[{ label: "All Products" }]} />

      <Flex
        className="px-2 py-3 mt-4 bg-white1"
        align="center"
        justify="space-between"
      >
        <CustomSearch
          onSearch={onSearch}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value.trim() === "") {
              setSearchQuery("");
              setCurrent(1);
            }
          }}
        />

        <Space>
          <CustomSelect
            onChange={selectStatus}
            value={prodStatus}
            options={productStatus}
            placeholder="Sort By Status"
            dropdownStyle={{ background: "#24262d" }}
            classNameItem="mb-0"
          />

          <CustomSelect
            onChange={setCategory}
            value={category}
            options={["All Categories", ...categoriesItems]}
            placeholder="Sort By Category"
            dropdownStyle={{ background: "#24262d" }}
            classNameItem="mb-0"
          />
        </Space>
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

export default memo(AllProducts);
