import React, { memo } from "react";
import { Select, Form } from "antd";
import CustomText from "./CustomText";

const { Option } = Select;

const CustomSelect = ({
  name,
  label = "",
  options = [],
  placeholder = "Select an option",
  rules = [],
  classNameItem = "",
  // allowClear = true,
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      hasFeedback={name}
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
      <Select placeholder={placeholder} {...rest}>
        {options.map((option) => (
          <Option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default memo(CustomSelect);
