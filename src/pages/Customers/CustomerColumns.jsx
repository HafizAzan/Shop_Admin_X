import { Flex, message, Tag } from "antd";
import CustomText from "components/CustomText";
import CustomButton from "components/CustomButton";
import CustomDeleteModal from "components/CustomDeleteModal";
import { EyeOutlined, DeleteFilled } from "@ant-design/icons";
import { useState } from "react";

export const CustomerColumns = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalId, setIsModalId] = useState(null);

  const closeModalHandler = () => {
    setIsModalId(null);
    setIsModalOpen(false);
  };

  const deleteOrderHandler = () => {
    setIsModalId(null);
    setIsModalOpen(false);
    message.success("Order Deleted SuccessFully!");
  };

  return [
    {
      title: <CustomText text="emal" className="uppercase text-md" />,
      key: "email",
      dataIndex: "email",
    },
    {
      title: <CustomText text="name" className="uppercase text-md" />,
      key: "name",
      dataIndex: "name",
    },
    {
      title: <CustomText text="phone" className="uppercase text-md" />,
      key: "phone",
      dataIndex: "phone",
      render: (phone) => (
        <CustomText text={`+${phone}`} className="text-blue-500 text-md" />
      ),
    },
    {
      title: <CustomText text="Status" className="uppercase text-md" />,
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color =
          status === "active"
            ? "green"
            : status === "inactive"
            ? "gold"
            : "red";
        return (
          <Tag
            style={{ backgroundColor: color }}
            className="text-black border-none"
          >
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: <CustomText text="Total Order" className="uppercase text-md" />,
      key: "order",
      dataIndex: "totalOrder",
    },
    {
      title: (
        <CustomText text="Last Order Date" className="uppercase text-md" />
      ),
      key: "date",
      dataIndex: "lastOrderDate",
    },
    {
      title: <CustomText text="Actions" className="uppercase text-md" />,
      key: "actions",
      align: "left",
      fixed: "right",
      width: 180,
      className: "!bg-[#1a1c23]",
      render: (_, record) => (
        <Flex align="center" gap={10} justify="end">
          <CustomButton type="primary" icon={<EyeOutlined />}>
            View
          </CustomButton>

          <CustomButton
            className="bg-red-500 hover:!bg-red-700"
            type="text"
            icon={<DeleteFilled />}
            onClick={() => {
              setIsModalId(record?.key);
              setIsModalOpen(true);
            }}
          >
            Delete
          </CustomButton>

          <CustomDeleteModal
            open={isModalOpen && isModalId === record?.key}
            onCancel={closeModalHandler}
            onOk={deleteOrderHandler}
          >
            <Flex gap={8}>
              <DeleteFilled className="text-[20px] text-red-500" />
              <CustomText
                text="Delete Order"
                type="text"
                className="text-[16px]"
              />
            </Flex>

            <CustomText
              text={`Make sure you want to delete order "${record?.orderId}"`}
              type="paragraph"
              className="text-grey1 text-[14px] pt-2"
            />
          </CustomDeleteModal>
        </Flex>
      ),
    },
  ];
};

export const dataSource = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  email: i % 2 === 0 ? `wenyravo@example.com` : "warehouse@exmaple.com",
  name: i % 2 === 0 ? `mitchel jhonson` : "steve smith",
  phone: `92316112269${i}`,
  totalOrder: `89${i}`,
  status: i % 2 === 0 ? "active" : "inactive",
  lastOrderDate: `${i + 1}-jan-2025`,
}));
