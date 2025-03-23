import { Flex } from "antd";
import React, { memo } from "react";
import CustomInput from "components/CustomInput";
import { offer, stkStatus } from "utils/constant";
import CustomSelect from "components/CustomSelect";

function ProductMediumInfo() {
  return (
    <Flex gap={20} wrap>
      <main className="w-[48%]">
        <CustomInput
          type="number"
          label="Price"
          placeholder="Enter Price"
          name="price"
          rules={[{ required: true }]}
        />

        <CustomSelect
          label="Offer"
          placeholder="Select Offer"
          name="offer"
          className="custom-select h-[52px]"
          rules={[{ required: true }]}
          options={offer}
          dropdownStyle={{ background: "#24262d" }}
        />

        <CustomInput
          label="Offer Value"
          placeholder="Enter Offer Value"
          name="offerValue"
          rules={[{ required: true }]}
          className="h-[52px]"
        />
      </main>
      <main className="w-[48%]">
        <CustomInput
          type="number"
          label="Stock Quantity Availabel"
          placeholder="Enter Stock Quantity"
          name="stockQuantity"
          rules={[{ required: true }]}
        />
        <CustomSelect
          label="Stock Status"
          placeholder="Select Stock Status"
          name="stckstatus"
          className="custom-select h-[52px]"
          rules={[{ required: true }]}
          options={stkStatus}
          dropdownStyle={{ background: "#24262d" }}
        />
      </main>
    </Flex>
  );
}

export default memo(ProductMediumInfo);
