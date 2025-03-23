import React, { memo } from "react";
import CustomText from "./CustomText";
import CustomBreadcrumbs from "./CustomBreadcrumbs";

const PageHeader = ({ text = "", items = [] }) => {
  return (
    <div className="flex flex-col gap-2">
      <CustomText text={text} type="title" className="!text-white !text-2xl" />
      <CustomBreadcrumbs items={items} />
    </div>
  );
};

export default memo(PageHeader);
