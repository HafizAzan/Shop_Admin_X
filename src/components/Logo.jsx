import React, { memo } from "react";
import CustomText from "./CustomText";

function Logo() {
  return (
    <>
      <CustomText text="ShopAdminX" type="text" className="font-semibold" />
    </>
  );
}

export default memo(Logo);
