import { Form, Rate } from "antd";
import React from "react";
import CustomText from "./CustomText";

function CustomRating({
  name,
  label = "",
  rules = [],
  classNameItem = "",
  allowClear = true,
  ...rest
}) {
  return (
    <Form.Item
      name={name}
      initialValue={2.5}
      {...(label && {
        label: (
          <CustomText
            text={label}
            type="text"
            className="!text-sm font-semibold"
          />
        ),
      })}
      rules={rules}
      className={classNameItem}
    >
      <Rate
        allowHalf
        allowClear={allowClear}
        {...rest}
        className="custom-rate"
      />
    </Form.Item>
  );
}

export default CustomRating;
