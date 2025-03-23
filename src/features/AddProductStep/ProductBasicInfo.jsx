import { Flex } from "antd";
import React, { memo } from "react";
import CustomInput from "components/CustomInput";
import CustomSelect from "components/CustomSelect";
import { brandsItem, categoriesItems } from "utils/constant";

function ProductBasicInfo() {
  return (
    <Flex gap={20} justify="space-between" wrap>
      <main className="w-[48%]">
        <CustomInput
          label="Product Name"
          placeholder="Enter product name"
          name="productName"
          rules={[{ required: true }]}
        />

        <CustomInput
          label="Description"
          type="textarea"
          placeholder="Enter Description"
          name="description"
          rows={5}
          rules={[{ required: true }]}
        />
      </main>
      <main className="w-[48%]">
        <CustomSelect
          label="Category"
          placeholder="Select category"
          name="category"
          className="custom-select h-[45px]"
          rules={[{ required: true }]}
          options={categoriesItems}
          dropdownStyle={{ background: "#24262d" }}
        />

        <CustomSelect
          label="Brand"
          placeholder="Select brand"
          name="brand"
          className="custom-select h-[45px]"
          rules={[{ required: true }]}
          options={brandsItem}
          dropdownStyle={{ background: "#24262d" }}
        />

        <CustomInput
          label="SKU"
          initialValue="sku_"
          placeholder="Enter sku"
          name="sku"
          rules={[{ required: true }]}
        />
      </main>
    </Flex>
  );
}

export default memo(ProductBasicInfo);
