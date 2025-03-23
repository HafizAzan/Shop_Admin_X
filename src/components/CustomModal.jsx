import { Modal } from "antd";
import React, { memo } from "react";

function CustomModal({
  title = "",
  open,
  onOk = () => {},
  onCancel = () => {},
  children,
  ...rest
}) {
  return (
    <>
      <Modal
        title={title}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        {...rest}
      >
        {children}
      </Modal>
    </>
  );
}

export default memo(CustomModal);
