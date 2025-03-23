import { Pagination } from "antd";
import React, { memo } from "react";

function CustomPagination({ pageSize, current, total, onChange = () => {} }) {
  return (
    <div className="px-1 py-1 bg-white1 rounded-xl custom-pagination">
      <Pagination
        align="center"
        total={total}
        defaultPageSize={pageSize}
        defaultCurrent={current}
        onChange={onChange}
      />
    </div>
  );
}

export default memo(CustomPagination);
