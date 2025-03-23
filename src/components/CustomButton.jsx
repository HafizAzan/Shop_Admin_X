import { Button } from "antd";
import React, { memo } from "react";
import { cn } from "utils/tailwind.merge";

function CustomButton({ className = "", children, ...rest }) {
  return (
    <Button className={cn(className)} {...rest}>
      {children}
    </Button>
  );
}

export default memo(CustomButton);
