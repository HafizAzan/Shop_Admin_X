import React, { memo } from "react";
import { Dropdown } from "antd";

const CustomDropdown = ({
  items = [],
  placement = "bottom",
  children,
  open,
  handleOpenChange = () => {},
  onClick = () => {},
  overlayClassName = "",
  ...rest
}) => {
  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
      trigger={["click"]}
      placement={placement}
      overlayClassName={overlayClassName}
      open={open}
      onOpenChange={handleOpenChange}
      {...rest}
    >
      {children}
    </Dropdown>
  );
};

export default memo(CustomDropdown);
