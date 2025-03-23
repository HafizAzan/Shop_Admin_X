import React, { memo } from "react";
import PageHeader from "components/PageHeader";
import CustomTable from "components/CustomTable";
import { CustomerColumns, dataSource } from "./CustomerColumns";

function Customers() {
  return (
    <div>
      <PageHeader text="Customers" items={[{ label: "Customers" }]} />
      <CustomTable data={dataSource} columns={CustomerColumns()} />
    </div>
  );
}

export default memo(Customers);
