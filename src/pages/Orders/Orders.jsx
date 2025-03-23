import React, { memo } from "react";
import PageHeader from "components/PageHeader";
import CustomTable from "components/CustomTable";
import { dataSource, OrderColumns } from "./OrderColumns";

function Orders() {
  return (
    <div>
      <PageHeader text="All Orders" items={[{ label: "All Orders" }]} />
      <CustomTable data={dataSource} columns={OrderColumns()} />
    </div>
  );
}

export default memo(Orders);
