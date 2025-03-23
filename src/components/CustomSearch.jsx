import { Input } from "antd";
import React, { memo } from "react";

function CustomSearch({
  placeholder = "Search products...",
  onChange = () => {},
  onSearch = () => {},
  value = "",
}) {
  return (
    <Input.Search
      placeholder={placeholder}
      onChange={onChange}
      onSearch={onSearch}
      enterButton
      className="w-1/2 custom-search-input"
      value={value}
    />
  );
}

export default memo(CustomSearch);
