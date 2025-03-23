import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { sliderItems } from "utils/constant";

function CustomSlider() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Sider trigger={null} collapsible collapsed={false}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultOpenKeys={[location.pathname]}
          className="bg-black1"
          items={sliderItems}
          onClick={(e) => navigate(e?.key)}
        />
      </Sider>
    </div>
  );
}

export default memo(CustomSlider);
