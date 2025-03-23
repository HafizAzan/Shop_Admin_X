import { Card } from "antd";
import React, { memo } from "react";
import CustomText from "./CustomText";

function CustomAnalyticCard({ label = "Total Customer" }) {
  return (
    <Card className="border-none bg-white1">
      <CustomText text={label} type="paragraph" />
    </Card>
  );
}

export default memo(CustomAnalyticCard);
