import React, { memo } from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CustomBreadcrumbs = ({ items }) => {
  return (
    <Breadcrumb className="custom-breadcurmbs">
      <Breadcrumb.Item>
        <Link to="/">
          <HomeOutlined /> Home
        </Link>
      </Breadcrumb.Item>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default memo(CustomBreadcrumbs);
