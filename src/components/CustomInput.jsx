import { Form, Input, InputNumber } from "antd";
import React, { memo } from "react";
import { cn } from "../utils/tailwind.merge";
import CustomText from "./CustomText";

function CustomInput({
  type = "",
  name = "",
  label = "",
  className = "",
  rules = [],
  initialValue,
  ...rest
}) {
  return (
    <Form.Item
      name={name}
      rules={rules}
      initialValue={initialValue}
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
    >
      {type === "number" ? (
        <InputNumber
          type="number"
          className={cn("custom-input", className)}
          onStep={() => null}
          {...rest}
        />
      ) : type === "textarea" ? (
        <Input.TextArea className={cn("custom-input", className)} {...rest} />
      ) : type === "password" ? (
        <Input.Password className={cn("custom-input", className)} {...rest} />
      ) : type === "url" ? (
        <Input type="url" className={cn("custom-input", className)} {...rest} />
      ) : (
        <Input className={cn("tel-input custom-input", className)} {...rest} />
      )}
    </Form.Item>
  );
}

export default memo(CustomInput);
