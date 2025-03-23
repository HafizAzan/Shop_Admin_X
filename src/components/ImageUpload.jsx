import React, { memo, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, Form } from "antd";
import CustomText from "components/CustomText";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ImageUpload = ({ fileList, setFileList }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div className="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[#d9d9d9]">
      <PlusOutlined />
      <CustomText text="Upload" className="text-[14px]" />
    </div>
  );

  return (
    <Form.Item
      label={
        <CustomText
          text="Product Image"
          type="text"
          className="!text-sm font-semibold"
        />
      }
    >
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={1}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>

      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </Form.Item>
  );
};

export default memo(ImageUpload);
