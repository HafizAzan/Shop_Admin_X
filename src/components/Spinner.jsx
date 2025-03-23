import { Spin } from "antd";
import React, { memo } from "react";

function Spinner({ size = "medium" }) {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <Spin size="large" />
    </div>
  );
}

export default memo(Spinner);
