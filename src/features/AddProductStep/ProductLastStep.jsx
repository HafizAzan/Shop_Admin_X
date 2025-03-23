import React, { memo, useState } from "react";
import { Flex, Form, Radio } from "antd";
import ImageUpload from "components/ImageUpload";
import CustomInput from "components/CustomInput";
import CustomSelect from "components/CustomSelect";
import CustomRating from "components/CustomRating";
import { status } from "utils/constant";

const ProductLastStep = ({ form, fileList, setFileList }) => {
  const [uploadType, setUploadType] = useState("url");

  return (
    <Flex gap={20} justify="space-between" wrap>
      <main className="w-[48%]">
        <CustomInput
          label="Delivery Time"
          placeholder="Enter Delivery Time"
          name="delivery"
          rules={[{ required: true }]}
        />

        <CustomSelect
          label="Status"
          placeholder="Select Status"
          name="status"
          className="custom-select h-[45px]"
          rules={[{ required: true }]}
          options={status}
          dropdownStyle={{ background: "#24262d" }}
        />

        <CustomRating
          label="Rating"
          name="rating"
          rules={[{ required: true }]}
        />
      </main>
      <main className="w-[48%]">
        <Form.Item
          name="imageType"
          initialValue={uploadType}
          className="!mb-4"
          rules={[{ required: true }]}
        >
          <Radio.Group
            value={uploadType}
            onChange={(e) => {
              form.setFieldsValue({ imageType: e.target.value });
              setUploadType(e.target.value);
            }}
          >
            <Radio value="url">Image URL</Radio>
            <Radio value="upload">Upload Image</Radio>
          </Radio.Group>
        </Form.Item>
        {uploadType === "upload" ? (
          <ImageUpload fileList={fileList} setFileList={setFileList} />
        ) : (
          <CustomInput
            type="url"
            label="Image URL"
            placeholder="Enter Image URL"
            name="imageUrl"
            rules={[
              { required: true, type: "url", message: "Enter a valid URL" },
            ]}
          />
        )}
      </main>
    </Flex>
  );
};

export default memo(ProductLastStep);
