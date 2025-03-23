import { Table } from "antd";
import React, { memo } from "react";

function CustomTable({ columns = [], data = [] }) {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        className="mt-6 custom-table"
      />
    </>
  );
}

export default memo(CustomTable);
