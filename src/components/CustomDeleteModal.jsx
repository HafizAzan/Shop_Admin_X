import React, { memo } from "react";
import CustomModal from "./CustomModal";

function CustomDeleteModal({ open, onCancel, onOk, children, ...rest }) {
  return (
    <CustomModal
      title={null}
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      okText="Yes, Delete"
      cancelText="No, Keep it"
      okButtonProps={{
        style: { backgroundColor: "#d32f2f", color: "#ffffff" },
      }}
      cancelButtonProps={{
        style: {
          backgroundColor: "#6c757d",
          color: "#ffffff",
          border: "none",
        },
      }}
      mask={false}
      {...rest}
    >
      {children}
    </CustomModal>
  );
}

export default memo(CustomDeleteModal);
