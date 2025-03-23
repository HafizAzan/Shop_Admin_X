import { Footer, Header } from "antd/es/layout/layout";
import React, { memo } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "components/Logo";
import CustomDropDown from "components/CustomDropDown";
import CustomRoundedImg from "components/CustomRoundedImg";
import { profileDropDown } from "utils/constant";
import { imageConstant } from "assets/imageConstant";
import CustomButton from "components/CustomButton";
import { BellFilled } from "@ant-design/icons";
import CustomBadge from "components/CustomBadge";
import { useAuthStore } from "store/zustand-store";
import CustomSlider from "components/CustomSlider";

function FrontendLayout() {
  const { logout } = useAuthStore();

  const ItemsHandler = (e) => {
    if (e?.key === "3") {
      logout();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header className="flex items-center justify-between bg-black1 h-[60px] px-4">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-x-5">
          <CustomBadge dot color="red" className="cursor-pointer">
            <BellFilled className="text-xl text-blue1" />
          </CustomBadge>
          <CustomDropDown
            items={profileDropDown}
            overlayClassName="custom-dropdown"
            placement="bottomLeft"
            onClick={ItemsHandler}
          >
            <CustomButton className="!bg-transparent !border-none !p-0">
              <CustomRoundedImg
                src={imageConstant?.img}
                alt="profile-icon-not-found"
              />
            </CustomButton>
          </CustomDropDown>
        </div>
      </Header>

      <div className="flex flex-1">
        <div className="text-white bg-black1">
          <CustomSlider />
        </div>

        <div className="flex flex-col w-full h-screen">
          <div className="flex-1 p-4 pb-20 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(FrontendLayout);
