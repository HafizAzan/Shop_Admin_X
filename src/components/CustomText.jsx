import { Typography } from "antd";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { cn } from "utils/tailwind.merge";

const { Text, Title, Paragraph } = Typography;

function CustomText({ type = "text", text = "", className = "", ...rest }) {
  switch (type) {
    case "text":
      return (
        <Text className={cn("text-white text-lg", className)} {...rest}>
          {text}
        </Text>
      );

    case "title":
      return (
        <Title className={cn("text-xl font-bold ", className)} {...rest}>
          {text}
        </Title>
      );

    case "paragraph":
      return (
        <Paragraph className={cn("text-white text-base", className)} {...rest}>
          {text}
        </Paragraph>
      );

    case "link":
      return (
        <Link
          className={cn(" text-blue-600 text-sm !underline", className)}
          {...rest}
        >
          {text}
        </Link>
      );

    default:
      return (
        <Typography className={cn("text-white", className)}>{text}</Typography>
      );
  }
}

export default memo(CustomText);
