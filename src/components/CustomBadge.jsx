import { Badge } from "antd";
import React, { memo } from "react";

function CustomBadge({ color = "", count = "", children, ...rest }) {
  return (
    <Badge {...rest} color={color} count={count}>
      {children}
    </Badge>
  );
}

export default memo(CustomBadge);
