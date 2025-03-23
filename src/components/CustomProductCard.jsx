import React, { memo, useState } from "react";
import CustomText from "./CustomText";
import CustomButton from "./CustomButton";
import CustomModal from "./CustomModal";
import { Badge, Card, Flex, message, Space, Tag } from "antd";
import { Link } from "react-router-dom";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { MESSAGES } from "utils/constant";
import { deleteProductThunk } from "hooks/useProduct";
import { useDispatch } from "react-redux";
import { AUTHENTICATED_ROUTES_URL } from "utils/routesConstant";
import ProductStatusTag from "./ProductStatusTag";
import CustomDeleteModal from "./CustomDeleteModal";

function CustomProductCard({ product = {} }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    imageUrl = "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg",
    price = "893",
    productName = "",
    stckstatus,
    status,
    id,
  } = product;

  const deleteModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const deleteProduct = () => {
    dispatch(deleteProductThunk(id));
    setIsModalOpen(false);
    message.success(MESSAGES.PRODUCT_DELETE);
  };

  return (
    <Badge.Ribbon
      color={
        status === "draft"
          ? "red"
          : status === "publish"
          ? "purple"
          : "transparent"
      }
      text={status === "draft" ? "Draft" : "Publish"}
    >
      <Card
        className="px-0 border-none bg-black1"
        cover={<img src={imageUrl} alt="Product" />}
        bodyStyle={{ padding: "10px" }}
      >
        <Flex justify="space-between" align="center" wrap>
          <CustomText
            text={productName}
            type="text"
            className="font-bold capitalize"
          />
          <ProductStatusTag status={stckstatus} />
        </Flex>

        <CustomText
          text={`$${price}`}
          type="text"
          className="font-extrabold text-blue2"
        />

        <CustomText
          text={description}
          type="paragraph"
          className="text-grey1"
          ellipsis
        />

        <Flex justify="space-between" align="center" wrap>
          <Link
            to={AUTHENTICATED_ROUTES_URL.PRODUCT_DETAIL.replace(":id", id)}
            className="px-2 py-1 rounded-md cursor-pointer bg-blue2"
          >
            <EyeOutlined />
          </Link>

          <Space>
            <Link
              className="px-2 py-1 border-2 rounded-md cursor-pointer border-grey1"
              to={AUTHENTICATED_ROUTES_URL.EDIT_PRODUCTS.replace(":id", id)}
            >
              <EditOutlined />
            </Link>

            <CustomButton
              className="!bg-transparent px-2 py-1 border-2 rounded-md border-grey1 cursor-pointer"
              onClick={deleteModalHandler}
            >
              <DeleteOutlined />
            </CustomButton>

            <CustomDeleteModal
              open={isModalOpen}
              onCancel={closeModalHandler}
              onOk={deleteProduct}
            >
              <Flex gap={8}>
                <DeleteFilled className="text-[20px] text-red-500" />
                <CustomText
                  text="Delete Product"
                  type="text"
                  className="text-[16px]"
                />
              </Flex>

              <CustomText
                text={`Make sure you want to delete product "${productName}"`}
                type="paragraph"
                className="text-grey1 text-[14px] pt-2"
              />
            </CustomDeleteModal>
          </Space>
        </Flex>
      </Card>
    </Badge.Ribbon>
  );
}

export default memo(CustomProductCard);
