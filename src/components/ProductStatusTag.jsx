import React, { memo } from "react";
import { Tag } from "antd";

const ProductStatusTag = ({ status }) => {
  const getTagStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "in stock":
        return { backgroundColor: "#046c4e", color: "white" };
      case "out of stock":
        return { backgroundColor: "#c81e1e", color: "white" };
      default:
        return { backgroundColor: "orange", color: "white" };
    }
  };

  return (
    <Tag
      className="text-white border-none rounded-[10px] inline-block h-[22px]"
      style={getTagStyle(status)}
    >
      {status ? status.charAt(0).toUpperCase() + status.slice(1) : "Unknown"}
    </Tag>
  );
};

export default memo(ProductStatusTag);
